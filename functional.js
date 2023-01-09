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

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// sum: Imperative solution
function imperativeSum(elements) {
  let total = 0;
  elements.forEach(function(n) {
    total += n;
  });
  return total;
}
console.log(imperativeSum(numbers));

// sum: Functional solution
function functionalSum(elements) {
  return elements.reduce((total, n) => { return total += n; });
}
console.log(functionalSum(numbers));

// lengths: Imperative solution
function imperativeLengths(elements) {
  let lengths = {};
  elements.forEach(function(element) {
    lengths[element] = element.length;
  });
  return lengths;
}
console.log(imperativeLengths(states));

// lengths: Functional solution
function functionalLengths(elements) {
  return elements.reduce((lengths, element) => {
                          lengths[element] = element.length;
                          return lengths;
                        }, {});
}
console.log(functionalLengths(states));

// multiplication: Functional solution
function functionalMultiplication(elements) {
  return elements.reduce((total, n) => { return total *= n; });
}
console.log(functionalMultiplication(numbers));
