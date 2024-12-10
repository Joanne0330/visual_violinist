import MIDISounds from 'midi-sounds-react';

const InvisibleMidiSound = (props) => {
	const {soundChoices} = props;
	return (
		<div style={{  visibility: 'hidden', width: 0,  height: 0}}>
			<MIDISounds style={{ visibility: 'hidden' }} instruments={soundChoices} ref={(ref) => (MIDISounds.midiSounds = ref)} appElementName="root" />
	 </div>
	)
}

export default InvisibleMidiSound;