const learnData = {
	"/learn/introduction": {
		isPractice: false,
		learnTitle: "Introduction to finger placement",
		subText: "Let's take a look at what makes a whole tone and semitone and how that affects our finger placement!",
		learnData: [
			{
				learnImg: '/assets/images/learn/piano_keyboard_even_more_space.png', 
				imgTitle: 'Piano keyboard showing whole-tones and semitones',
				texts: [
					'To learn about spacing or distance between 2 fingers on a violin, we must first learn about whole-tone and semitone intervals.',
					'If you observe this piano keyboard carefully, you will notice that most 2 adjacent white keys have a black key in between them. Take D and E for example, there is a black key between them and that black key is D# or Eb.',
					'When 2 notes have another note in between them, this interval is called whole-tone. D and E together form a whole-tone.',
					'However, E and F do not have a black key in between them, nor do B and C!',
					'When 2 notes do not have another note in between them, this interval is called semitone (or half-step). Semitone is the smallest interval possible in music in our western world!',
					'Therefore we must remember, E and F naturally form a semitone, so do B and C!'
				]
			},
			{
				learnImg: '/assets/images/learn/D_string_example_natural.png', 
				imgTitle: 'D string example - all natural',
				texts: [
					'This is the reason why on the violin, sometimes there is a space between the two adjacent fingers, and sometimes there is no space and those fingers are positioned right next to each other without any gap!', 
					'Look at this example above - they are notes on the D string. Take a look at the 2nd finger F and the 3rd finger G, there is a gap between them and that is because F and G form a whole-tone.', 
					'However, if you look at the 1st finger E and the 2nd finger F, they are right next to each other without any gap. This is because they form a semitone.'
				]
			},
			{
				learnImg: '/assets/images/learn/D_string_example_F_sharp.png', 
				imgTitle: 'D string example - F#',
				texts: [
					"But now look at the F on the same string, it has now become sharp (#)! When a note is sharp it means it is a semitone higher than its natural self, therefore we have to move it closer to G!", 
					'So now the distance between the first, second and third fingers have changed!', 
					'The 1st finger E is now whole-tone to F# and has a space in between them, and there is no space between the 2nd finger F# and the 3rd finger G!'
				]
			},
			{
				learnImg: '/assets/images/learn/G_string_example_natural.png', 
				imgTitle: 'G string example - all natural',
				texts: [
					"Let's take a look at another example! We are nowing having a look at the notes on our lowest string - the G string.", 
					'The 2nd finger B is a semitone to the 3rd finger C therefore they do not have a gap between them. The rest of the notes however, are all whole-tones to their next door neighbours so we must leave a gap betwween.'
				]
			},
			{
				learnImg: '/assets/images/learn/G_string_example_B_flat.png', 
				imgTitle: 'G string example - Bb',
				texts: [
					"But now we are making the B flat (b) therefore we will have to move it a semitone lower. It is now right next to the 1st finger A and together they form a semitone instead of a whole-tone!", 
					'The spacing of the 2nd finger to the 3rd finger is also changed. B flat forms a whole-tone interval with the 3rd finger C. They now have a space between them.', 
				]
			},
			{
				learnImg: '/assets/images/learn/E_string_example_natural.png', 
				imgTitle: 'E string example - all natural',
				texts: [
					"However, we have a different situation here on the E string! The semitone lies between open E and the 1st finger F!", 
					"So there is no space between the open string and the 1st finger? How do we do that?",
					'You can simply move the first finger lower (away from you)!',
					'If you go back and compare the previous example on G string, you will notice the placement of the 1st finger note on the G string is different. There is a gap between the open G and the 1st finger A, unlike this E string example!' 
				]
			},
			{
				learnImg: '/assets/images/learn/E_string_example_F_sharp.png', 
				imgTitle: 'E string example - F#',
				texts: [
					"And if F is sharp, the position of the 1st finger would then be at the usual place", 
					"It would also form a semitone with the 2nd finger G!"
				]
			},
			{
				learnImg: '/assets/images/learn/C_major_all_strings.png', 
				imgTitle: 'C Major notes and finger pattern',
				texts: [
					"In short, when there is no sharp nor flat in your music, this shows all the notes across all your strings in the first position in relations to where the semitones are, and what the finger pattern looks like!", 
				]
			},
		]
	},
}

export default learnData;