// Varible to store user inputs
let userInputs = [];

//Story
let originalStory = `In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. 
Word got out that the team had "debugged" the ${userInputs[2]}`;

// number of unique replacements in story
const numberOfQuestions = 3;

// array of questions
const questionArray = ["Enter a place","Enter a name","Enter a problem to solve"]

// getting user input
for (let i = 0; i < numberOfQuestions; i++) {
    console.log(i);
}


/*
STORY

'In <someplace>, computer pioneer <somename> found herself working on a <a problem>. 
Word got out that the team had "debugged" the <a problem>'

*/