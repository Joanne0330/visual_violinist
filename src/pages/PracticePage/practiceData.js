const practiceData = {
	"/practice/c_major": {
		isPractice: true,
		practiceTitle: "Let's practice C Major",
		subText: "When everything is natural, there is no sharp nor flat!",
		practiceData: [
			{noteImg: "/assets/images/singleNotes/low_G.png" , noteBaseName: 'G', accidental: '', chosenString: ['G'], fingering: ['0'], position: [1]},
			{noteImg: "/assets/images/singleNotes/low_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['G'], fingering: ['1'], position: [9]},
			{noteImg: "/assets/images/singleNotes/low_B.png" , noteBaseName: 'B', accidental: '', chosenString: ['G'], fingering: ['2'], position: [17]},
			{noteImg: "/assets/images/singleNotes/low_C.png" , noteBaseName: 'C', accidental: '', chosenString: ['G'], fingering: ['3'], position: [21]},
			{noteImg: "/assets/images/singleNotes/low_D.png" , noteBaseName: 'D', accidental: '', chosenString: ['D', 'G'], fingering: ['0', '4'], position: [2, 29]},
			{noteImg: "/assets/images/singleNotes/mid_E.png" , noteBaseName: 'E', accidental: '', chosenString: ['D'], fingering: ['1'], position: [10]},
			{noteImg: "/assets/images/singleNotes/mid_F.png" , noteBaseName: 'F', accidental: '', chosenString: ['D'], fingering: ['2'], position: [14]},
			{noteImg: "/assets/images/singleNotes/mid_G.png" , noteBaseName: 'G', accidental: '', chosenString: ['D'], fingering: ['3'], position: [22]},
			{noteImg: "/assets/images/singleNotes/mid_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['A', 'D'], fingering: ['0', '4'], position: [3, 30]},
			{noteImg: "/assets/images/singleNotes/mid_B.png" , noteBaseName: 'B', accidental: '', chosenString: ['A'], fingering: ['1'], position: [11]},
			{noteImg: "/assets/images/singleNotes/mid_C.png" , noteBaseName: 'C', accidental: '', chosenString: ['A'], fingering: ['2'], position: [15]},
			{noteImg: "/assets/images/singleNotes/mid_D.png" , noteBaseName: 'D', accidental: '', chosenString: ['A'], fingering: ['3'], position: [23]},
			{noteImg: "/assets/images/singleNotes/high_E.png" , noteBaseName: 'E', accidental: '', chosenString: ['E', 'A'], fingering: ['0', '4'], position: [4, 31]},
			{noteImg: "/assets/images/singleNotes/high_F.png" , noteBaseName: 'F', accidental: '', chosenString: ['E'], fingering: ['1'], position: [8]},
			{noteImg: "/assets/images/singleNotes/high_G.png" , noteBaseName: 'G', accidental: '', chosenString: ['E'], fingering: ['2'], position: [16]},
			{noteImg: "/assets/images/singleNotes/high_A.png" , noteBaseName: 'A', accidental: '', chosenString: ['E'], fingering: ['3'], position: [24]},
			{noteImg: "/assets/images/singleNotes/high_B.png" , noteBaseName: 'B', accidental: '', chosenString: ['E'], fingering: ['4'], position: [32]}
		]
	},
	"/practice/g_major": {
		isPractice: true,
		practiceTitle: "Let's practice G Major",
		subText: 'When there is one sharp: F#',
		practiceData: [
			{noteImg: "/assets/images/singleNotes/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
			{noteImg: "/assets/images/singleNotes/high_G_sharp.png", noteBaseName: 'G', accidental: '#', chosenString: ['E'], fingering: ['2'], position: [20]}, 
		]
	},


}

export default practiceData;