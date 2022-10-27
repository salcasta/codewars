//Duplicate Encoder

/*
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/


function duplicateEncode (word) {
    let lowerCase = word.toLowerCase().split('')
    
    let unique = lowerCase.map(v => lowerCase.indexOf(v) === lowerCase.lastIndexOf(v))
    
    return unique.toString().replace(/,/g, "").replace(/false/g, ")").replace(/true/g, "(").split(" ").join("")
}
