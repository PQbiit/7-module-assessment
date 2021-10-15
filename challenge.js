/* 
1) Sum Zero
Write a function that takes in an array of numbers. The function should return True 
if any two numberss in list sum to 0, and false otherwise.
*/

function sumZero(arr){
   
}

/* 
2) Unique Characters
Write a function that takes in a single word, as a string. 
It should return True if that word contains only unique characters. Return False otherwise.
*/

function unique(word){

}

/* 
3) Pangram Sentence
A pangram is a sentence that contains all the letters of the English alphabet 
at least once, like “The quick brown fox jumps over the lazy dog.”

Write a function to check a sentence to see if it is a pangram or not.
*/

function isPangram(sentence){

}

/* 
4) Longest Word
Write a function, findLongestWord, that takes a list of words and returns 
the length of the longest one.
*/

function findLongestWord(words){
    let max = words[0].length;
    words.map(word =>{
        if (word.length > max){
            max = word.length
        }
    });
    return max
}

console.log(findLongestWord(['hi','congratulations','hello']))