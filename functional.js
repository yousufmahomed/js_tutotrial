let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

// we want to convert the states to lower case, split on white space
// also join on a hyphen as a function urlified
function urlified(string) {
    return string.toLowerCase().split(/\s+/).join("-");
}


// we then want to return these as a mapped function that includes http:etc;
function completeUrls(myArray) {
    return myArray.map(myArray => "https://example.com/" + urlified(myArray));
}

console.log(completeUrls(states));


// filter: we need to return both dakotas, use includes('dakota')
// and a regex to show the length of array being split is 2

let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];

function containsDakota(states) {
  return states.filter(state => state.includes("Dakota"));
}
console.log(containsDakota(states));

function twoWordStates(states) {
  return states.filter(state => state.split(/\s+/).length === 2);
}
console.log(twoWordStates(states));