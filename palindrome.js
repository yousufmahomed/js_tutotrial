// a function to first split , then reverse and join a string 
// first step in creating a palindrome checker

function reverse(string){
    return Array.from(string).reverse.join("");
}

function palindrome(string){
    let processedContent = string.toLowerCase();
    processedContent === reverse(processedContent);
}

function emailParts(email) {
  let lowerCaseEmail = email.toLowerCase();
  return Array.from(lowerCaseEmail).split("@");
}
