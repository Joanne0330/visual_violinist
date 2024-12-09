import MIDISounds from 'midi-sounds-react';

const InvisibleMidiSound = () => {
	return (
		<div style={{  visibility: 'hidden', width: 0,  height: 0}}>
			<MIDISounds style={{ visibility: 'hidden' }} ref={(ref) => (MIDISounds.midiSounds = ref)} appElementName="root" />
	 </div>
	)
}

export default InvisibleMidiSound;