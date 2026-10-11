// Script to generate a high quality soothing 44.1kHz stereo ambient chime wav file
const fs = require('fs');
const path = require('path');

function generateWav(filename, scale) {
  const sampleRate = 44100;
  const duration = 24; // 24 seconds loop
  const numChannels = 2;
  const totalSamples = sampleRate * duration;
  const bytesPerSample = 2;
  const blockAlign = numChannels * bytesPerSample;
  const byteRate = sampleRate * blockAlign;
  const dataSize = totalSamples * blockAlign;

  const buffer = Buffer.alloc(44 + dataSize);

  // RIFF header
  buffer.write('RIFF', 0);
  buffer.writeUInt32LE(36 + dataSize, 4);
  buffer.write('WAVE', 8);

  // fmt chunk
  buffer.write('fmt ', 12);
  buffer.writeUInt32LE(16, 16); // Chunk size
  buffer.writeUInt16LE(1, 20); // PCM
  buffer.writeUInt16LE(numChannels, 22);
  buffer.writeUInt32LE(sampleRate, 24);
  buffer.writeUInt32LE(byteRate, 28);
  buffer.writeUInt16LE(blockAlign, 32);
  buffer.writeUInt16LE(16, 34); // Bits per sample

  // data chunk
  buffer.write('data', 36);
  buffer.writeUInt32LE(dataSize, 40);

  // Notes sequence
  const pentatonic = scale || [261.63, 329.63, 392.0, 440.0, 523.25, 659.25, 783.99];
  const chordProg = [
    [0, 2, 4],
    [1, 3, 5],
    [3, 5, 0],
    [2, 4, 6],
  ];

  let offset = 44;
  for (let i = 0; i < totalSamples; i++) {
    const t = i / sampleRate;
    const bar = Math.floor(t / 3) % chordProg.length;
    const timeInBar = t % 3;
    const chord = chordProg[bar];

    let sampleL = 0;
    let sampleR = 0;

    // Soft warm pad base
    const padFreq1 = pentatonic[chord[0]] * 0.5;
    const padFreq2 = pentatonic[chord[1]] * 0.5;
    const pad = Math.sin(2 * Math.PI * padFreq1 * t) * 0.15 + Math.sin(2 * Math.PI * padFreq2 * t) * 0.12;

    // Arpeggiated celestial bell/music box chimes
    const subNote = Math.floor(timeInBar / 0.75) % 3;
    const timeInSub = timeInBar % 0.75;
    const chimeFreq = pentatonic[chord[subNote]];
    const env = Math.exp(-timeInSub * 3.5); // fast decay chime

    const chime =
      (Math.sin(2 * Math.PI * chimeFreq * t) * 0.5 +
        Math.sin(2 * Math.PI * (chimeFreq * 2) * t) * 0.25 +
        Math.sin(2 * Math.PI * (chimeFreq * 3) * t) * 0.1) *
      env;

    sampleL = (pad + chime) * 0.5;
    sampleR = (pad + chime * 0.9) * 0.5;

    const intL = Math.max(-32768, Math.min(32767, Math.floor(sampleL * 30000)));
    const intR = Math.max(-32768, Math.min(32767, Math.floor(sampleR * 30000)));

    buffer.writeInt16LE(intL, offset);
    buffer.writeInt16LE(intR, offset + 2);
    offset += 4;
  }

  fs.writeFileSync(filename, buffer);
  console.log('Created audio:', filename);
}

const outDir = path.join(__dirname, 'public', 'music');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

generateWav(path.join(outDir, 'sparkle-chimes.wav'), [261.63, 329.63, 392.0, 440.0, 523.25, 659.25]);
generateWav(path.join(outDir, 'warm-memories.wav'), [220.0, 261.63, 329.63, 392.0, 440.0, 523.25]);
generateWav(path.join(outDir, 'starlight-theme.wav'), [293.66, 369.99, 440.0, 554.37, 587.33, 739.99]);
