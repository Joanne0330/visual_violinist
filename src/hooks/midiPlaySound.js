import MIDISounds from 'midi-sounds-react';

export const midiPlaySound = (octave, number, midiSoundChoice, midiSoundLength) => {
  MIDISounds.midiSounds.playChordNow(midiSoundChoice, [octave * 12 + number], midiSoundLength);
}