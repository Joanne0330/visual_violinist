const learnData = {
	"/learn/introduction": {
		isPractice: false,
		learnTitle: "Introduction to finger placement",
		subText: "Let's take a look at what makes a semitone and whole tone and how they affect your finger placement!",
		learnData: [
      {
        learnImg: '', 
				imgTitle: '',
				texts: [
					"Do you know why sometimes on the same string, you have to play your first and second finger right next to each other without any space in between them, and why sometimes you have some space in between your first and second finger, but no space between your second and third finger?",
				]
      },
      {
        learnImg: '', 
				imgTitle: '',
				texts: [
          "Well, let's look at the two fingers WITHOUT space first:",
					"Sometimes the distance between the two fingers is VERY SMALL, so small that you can't fit any other note in between them. This is why you have to put those two fingers tightly together, so tightly what the skin of these fingers are touching each other.",
          "We call this small distance, or interval, SEMITONE!" 
				]
      },
      {
        learnImg: '', 
				imgTitle: '',
				texts: [
          "Now let's talk about the two fingers WITH some space in between: ",
					"If there is some space in between your two fingers, just enough space to possibly fit another finger in between them, it is a SLIGHTLY BIGGER distance, big enough to fit another note in between these two fingers.",
          "We call this slightly bigger distance, or interval, WHOLE TONE!" 
				]
      },
			{
				learnImg: '/assets/images/learn/piano_keyboard_even_more_space.png', 
				imgTitle: 'Piano keyboard showing whole-tones and semitones',
				texts: [
					"Let's compare what we have just learned with a piano keyboard:",
					'If you look this piano keyboard carefully, you will see that most two white keys next to each other have a black key in between them.', 
          'Take D and E for example, there is a black key between them and that black key plays a note called D# (D sharp) or Eb (E flat).',
					'Since there is a note in between D and E, the distance between D and E is a WHOLE TONE.',
					'However, E and F do not have a black key in between them, nor do B and C!',
					"Does this mean that the distance between E and F is a SEMITONE? What about the distance between B and C, do they also form a SEMITONE?",
          "The answer for both is: YES!"
				]
			},
      {
        learnImg: '', 
				imgTitle: '',
				texts: [
          "So, E and F naturally form a SEMITONE, so do B and C...",
          "But how do we remember?",
          "Well, I try to remember them this way:",
          "Eat Fudge and Banana Cake! (E F and B C)",
          "You can never go wrong with good desserts...."
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
			{
				learnImg: '', 
				imgTitle: '',
				texts: [
					"Lastly, you can find more notes and finger patterns grouped by keys up to 4 sharps and 4 flats in the Learn section from the Main Menu.",
					"But please remember, it is far more beneficial to always know what notes you are playing and where to find them on the fingerboard, and their spatial relationship to each other instead of just memorising patterns. This will help learning new music in different variation of keys, sightread, and play better in tune.", 
					"You can also practice this in the Play & Practice section! Check them out in the Main Menu"
				]
			},
		]
	},
  "/learn/c_major": {
    isPractice: false,
    learnTitle: "Learn: C Major",
    subText: "When everything is natural! There is no sharp nor flat!",
    learnData: [
      {
        learnImg: '/assets/images/learn/C_major_all_strings.png', 
        imgTitle: 'C Major notes and finger pattern',
        texts: [
          'C Major is the key where there is no sharp nor flat on any note!',
          'This this case, we must remember where the semitones are! They are between E and F, and also B and C!',
          'To play these intervals, you must put those fingers together!'
        ]
      },
    ]
  },
  "/learn/g_major": {
    isPractice: false,
    learnTitle: "Learn: G Major",
    subText: "When we have one sharp, F#",
    learnData: [
			{
        learnImg: '/assets/images/learnKeys/G_major_with_key.png', 
        imgTitle: 'G Major with key signature',
        texts: [
          "There is an order to what notes are made sharp. The first note to be made sharp is F!", 
					"This means all the Fs in your music are sharp! You will find 2 F# notes in the first position on your violin.",
					"If all the Fs are sharp, this key is called G Major. You can find the key signature in the beginning of your music, one # sign sitting on the high F position!"
        ]
      },
			{
        learnImg: '/assets/images/learnKeys/G_major_without_key.png', 
        imgTitle: 'G Major without key signature',
        texts: [
          "If there is no key signature (no # sign sitting on high F position), you will then see the sharp signs next to these notes!", 
        ]
      },
      {
        learnImg: '/assets/images/learn/G_major_all_strings.png', 
        imgTitle: 'G Major notes and finger pattern',
        texts: [
          'This all the notes for G Major in the first position on your violin and where they are located.',
					"You can find F# on D string and E string.",
					"Remember, F is now sharp so it is no longer a semitone to E. It is now semitone to G!"
        ]
      },
    ]
  },
  "/learn/f_major": {
    isPractice: false,
    learnTitle: "Learn: F Major",
    subText: "When we have one flat, Bb",
    learnData: [
			{
        learnImg: '/assets/images/learnKeys/F_major_with_key.png', 
        imgTitle: 'F Major with key signature',
        texts: [
          "There is an order to what notes are made flat. The first flat note should be B!", 
					"This means all the Bs in your music are flat! You will find 3 Bb notes in the first position on your violin.",
					"If all the Bs are flat, this key is called F Major. You can find the key signature in the beginning of your music, one flat sign (b) sitting on the B position!"
        ]
      },
			{
        learnImg: '/assets/images/learnKeys/F_major_without_key.png', 
        imgTitle: 'F Major without key signature',
        texts: [
          "If there is no key signature (no b sign sitting on B position), you will then see the flat signs next to these notes!", 
        ]
      },
      {
        learnImg: '/assets/images/learn/F_major_all_strings.png', 
        imgTitle: 'F Major notes and finger pattern',
        texts: [
          'This all the notes for F Major in the first position on your violin and where they are located.',
					"You can find Bb notes on G, A string and E string.",
					"Remember, B is now flat so it is no longer a semitone to C. It is now semitone to A!"
        ]
      },
    ]
  },
  "/learn/d_major": {
    isPractice: false,
    learnTitle: "Learn: D Major",
    subText: "When we have two sharps, F# and C#",
    learnData: [
			{
        learnImg: '/assets/images/learnKeys/D_major_with_key.png', 
        imgTitle: 'D Major with key signature',
        texts: [
          "If your music has 2 sharps, the first one is F, and the second one is C!", 
					"This means all the Fs and Cs in your music are sharp! You will find 2 F# and 2 C# notes in the first position on your violin.",
					"If all the Fs and Cs are sharp, this key is called D Major. You can find the key signature in the beginning of your music, two # signs sitting on the F and C positions!"
        ]
      },
			{
        learnImg: '/assets/images/learnKeys/D_major_without_key.png', 
        imgTitle: 'G Major without key signature',
        texts: [
          "If there is no key signature (no # signs), you will then see the sharp signs next to these notes!", 
        ]
      },
      {
        learnImg: '/assets/images/learn/D_major_all_strings.png', 
        imgTitle: 'D Major notes and finger pattern',
        texts: [
					'This all the notes for D Major in the first position on your violin and where they are located.',
					"You can find F# notes on D and E strings, and C# notes on G and A strings.",
					"Remember, F is now sharp so it is no longer a semitone to E. It is now semitone to G! C is also sharp so they are semitone to D!",
					"Take a look at the C# on the G string, it is now moved higher, position right next to the 4th finger D!"
        ]
      },
    ]
  },
  "/learn/b_flat_major": {
    isPractice: false,
    learnTitle: "Learn: Bb Major",
    subText: "When we have two flats, Bb and Eb!",
    learnData: [
			{
        learnImg: '/assets/images/learnKeys/Bb_major_with_key.png', 
        imgTitle: 'Bb Major with key signature',
        texts: [
          "If your music has 2 flats, the first one is B, and the second one is E.", 
					"This means all the Bs and Es in your music are flat! You will find 3 Bb and 2 Eb notes in the first position on your violin.",
					"If all the Bs and Es are flat, this key is called Bb Major. You can find the key signature in the beginning of your music, two flat (b) signs sitting on B and E positions!"
        ]
      },
			{
        learnImg: '/assets/images/learnKeys/Bb_major_without_key.png', 
        imgTitle: 'Bb Major without key signature',
        texts: [
          "If there is no key signature (no b signs), you will then see the flat signs next to these notes!", 
        ]
      },
      {
        learnImg: '/assets/images/learn/B_flat_major_all_strings.png', 
        imgTitle: 'Bb Major notes and finger pattern',
        texts: [
					'This all the notes for Bb Major in the first position on your violin and where they are located.',
					"You can find Bb notes on G, A string and E string, and Eb notes on D and A string.",
					"Watch out! E is now flat so you can no longer play open E! To play this note, you can use 4th finger on the A string, position close to 3rd finger D!"
        ]
      },
    ]
  },
  "/learn/a_major": {
    isPractice: false,
    learnTitle: "Learn: A Major",
    subText: "When we have three sharps, F#, C#, and G#",
    learnData: [
			{
        learnImg: '/assets/images/learnKeys/A_major_with_key.png', 
        imgTitle: 'A Major with key signature',
        texts: [
          "If your music has 3 sharps, it will be F, C and G!", 
					"This means all the Fs, Cs, and Gs in your music are sharp! You will find 2 F#, 2 C# and 3 G# notes in the first position on your violin.",
					"If all the Fs, Cs, and Gs are sharp, this key is called A Major. You can find the key signature in the beginning of your music, 3 # signs sitting on the F, C and G positions!"
        ]
      },
			{
        learnImg: '/assets/images/learnKeys/A_major_without_key.png', 
        imgTitle: 'A Major without key signature',
        texts: [
          "If there is no key signature (no # signs), you will then see the sharp signs next to these notes!", 
        ]
      },
      {
        learnImg: '/assets/images/learn/A_major_all_strings.png', 
        imgTitle: 'A Major notes and finger pattern',
        texts: [
					'This all the notes for A Major in the first position on your violin and where they are located.',
					"You can find F# notes on D string E strings, and C# notes on G and A strings, and G# notes on G, D and E strings.",
					"Take a look at the C# on the G string and G# on the D string, they are now moved higher, position right next to the 4th finger note!",
					"The low G is sharp therefore you can no longer use the open G string which can only play G natural. Instead, you can use first finger to play G# which is placed right below low A!"
        ]
      },
    ]
  },
  "/learn/e_flat_major": {
    isPractice: false,
    learnTitle: "Learn: Eb Major",
    subText: "When we have three flats, Bb, Eb, and Ab!",
    learnData: [
			{
        learnImg: '/assets/images/learnKeys/Eb_major_with_key.png', 
        imgTitle: 'Eb Major with key signature',
        texts: [
					"We have now 3 flats, and the music is already getting crowded with flat notes in the first position!",
					"So much to remember already!",
          "If your music has 3 flats, it will be B, E and A!", 
					"This means all the Bs, Es, and As in your music are flat! We have now total of 8 flat notes in the first position!",
					"If all the Bs, Es, and As are flat, this key is called Eb Major. You can find the key signature in the beginning of your music, 3 flat (b) signs sitting on B, E and A positions!"
        ]
      },
			{
        learnImg: '/assets/images/learnKeys/Eb_major_without_key.png', 
        imgTitle: 'Eb Major without key signature',
        texts: [
          "If there is no key signature (no b signs), you will then see the flat signs next to these notes!", 
        ]
      },
      {
        learnImg: '/assets/images/learn/E_flat_major_all_strings.png', 
        imgTitle: 'Eb Major notes and finger pattern',
        texts: [
          'This all the notes for Eb Major in the first position on your violin and where they are located.',
					'A is now flat, therefore you will not be able to use open A to play this note. Instead, you can use the 4th finger on a lower string (D string), and position the finger close to the 3rd finger G.',
					"Please take a look, all first finger notes (Ab, Eb, Bb, and F) across all and strings are positioned low, and most 4th finger notes (Ab, Eb, and Bb) are close to the 3rd finger positions! "
        ]
      },
    ]
  },
  "/learn/e_major": {
    isPractice: false,
    learnTitle: "Learn: E Major",
    subText: "When we have four sharps, F#, C#, G#, and D#",
		learnData: [
			{
        learnImg: '/assets/images/learnKeys/E_major_with_key.png', 
        imgTitle: 'E Major with key signature',
        texts: [
					"Wow, it's starting to get rather crowded and complicated!",
          "If your music has 4 sharps, it will be F, C, G and D!", 
					"This means all the Fs, Cs, Gs, and Ds in your music are sharp! You will find these sharp notes in the first position.",
					"If all the Fs, Cs, Gs and Ds are sharp, this key is called E Major. You can find the key signature in the beginning of your music, 4 # signs sitting on the F, C, G and D positions!"
        ]
      },
			{
        learnImg: '/assets/images/learnKeys/E_major_without_key.png', 
        imgTitle: 'E Major without key signature',
        texts: [
          "If there is no key signature (no # signs), you will then see the sharp signs next to these notes!", 
        ]
      },
      {
        learnImg: '/assets/images/learn/E_major_all_strings.png', 
        imgTitle: 'E Major notes and finger pattern',
        texts: [
					'This all the notes for E Major in the first position on your violin and where they are located.',
					"Take a look at the D# on the A string, like C# on the G string and G# on the D string, it is now also moved higher, position right next to the 4th finger E!",
					"And now take a look at the D string, since D is now sharp, you can no longer use open D to play these notes. Instead, you can use first finger to play it, just below E.",
					"Or, if you are feeling brave, you can also play this D# using 4th finger on the G string, but give it a good stretch to make it higher!",
	
        ]
      },
    ]
  },
  "/learn/a_flat_major": {
    isPractice: false,
    learnTitle: "Learn: Ab Major",
    subText: "When we have four flats, Bb, Eb, Ab, and Db!",
    learnData: [
			{
        learnImg: '/assets/images/learnKeys/Ab_major_with_key.png', 
        imgTitle: 'Ab Major with key signature',
        texts: [
					"We have now 4 flats! There are now 10 flat notes can be played in the first position!",
          "And the 4 flats are B, E, A and D!", 
					"This means all the Bs, Es, As and Ds in your music are flat!",
					"If all the Bs, Es, As and Ds are flat, this key is called Ab Major. You can find the key signature in the beginning of your music, 4 flat (b) signs sitting on B, E, A and D positions!"
        ]
      },
			{
        learnImg: '/assets/images/learnKeys/Ab_major_without_key.png', 
        imgTitle: 'Ab Major without key signature',
        texts: [
          "If there is no key signature (no b signs), you will then see the flat signs next to these notes!", 
        ]
      },
      {
        learnImg: '/assets/images/learn/A_flat_major_all_strings.png', 
        imgTitle: 'Ab Major notes and finger pattern',
        texts: [
					'This all the notes for Ab Major in the first position on your violin and where they are located.',
					"The only open string you can use to play in this key is the open G. Since D, A, and E are all flat, you will have go to a string lower (than the note itself) and use the 4th finger and position it lower.",
					"We now have all 1st finger notes in low positions, and all 4th finger notes in low positions as well!"
        ]
      },
    ]
  },
}

export default learnData;