// Varible to store user inputs
let userInputs = [];


// number of unique replacements in story
const numberOfQuestions = 3;

// array of questions
const questionArray = ["Enter a place ?","Enter a name ?","Enter a problem to solve ?"]

// getting user input
for (let i = 0; i < numberOfQuestions; i++) {
    userInputs.push(prompt(questionArray[i] + ` (${numberOfQuestions - 1 - i} questions left)`));
}

//console.log(userInputs);

//Story
let originalStory = `
<h2>${userInputs[1]}'s Story</h2>

<p>In ${userInputs[0]}, computer pioneer ${userInputs[1]} found herself working on a ${userInputs[2]}. 
Word got out that the team had "debugged" the ${userInputs[2]}</p>`;


alert("All done! Here's your story!");
document.write(originalStory);




/*
STORY

'In <someplace>, computer pioneer <somename> found herself working on a <a problem>. 
Word got out that the team had "debugged" the <a problem>'

*/