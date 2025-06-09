// 1) Given a string, reverse each word in a sentence 
let myName = 'Hassan Ahmed Khan'
const reversedWord = myName.split(" ").map(word => {
    return word.split('').reverse().join("")
});

// console.log(reversedWord.join(' '));



// 2) How to check if an object is an array or not?
function checkArray(element) {
    return Array.isArray(element)
}
// console.log(checkArray([]))
// console.log(checkArray({}))



// 3) How to empty an array in JavaScript? Do not reset it to a new array
let arr = [1, 2, 3, 4, 5]
arr.length = 0
// console.log(arr)



// 4) How would you check if a number is an integer?
let a = 65465.546654
if (a % 1 === 0) {
    // console.log('Number ia an integer');
}

else {
    // console.log("Number is not an integr");
}


// 5) Duplicate an array 
function duplicateArray() {
    let arr = [1, 2, 3, 4, 5]
    // console.log(arr.concat(arr));
}
duplicateArray()


// 6) Write a javaScript funtion that reverse a number 
function reverseNumber(number) {
    // console.log(Number(number.toString().split('').reverse().join('')))
}
reverseNumber(201)


// 7)  Check if the string is palindrome or not 
function checkPalString(str) {

    var palStr = str.split('').reverse().join('')
    if (palStr === str) {
        // console.log('Word is palindrome')
    }
    else {
        // console.log('Word is not palindrome');
    }
}
checkPalString('lool')


// 8) Write a JavaScript funtion that returns a string with letters in alphabetical orders 
function alphabetsOrder(str) {
    // console.log(str.toLowerCase().split('').sort());
}
alphabetsOrder('Hassan')


// 9) Write a Javascript funtions that accepts a word as a parameter and converts the first letter of each word of the string in uppercase 
function upperCaseString(str) {
    let allWords = str.split(' ').map((word) => {
        return word.charAt(0).toUpperCase() + word.substring(1);
    })
    const convertedWord = allWords.join(' ')
    // console.log(convertedWord);
}
upperCaseString('hassan ahmed khan')


// 10) Write a javascript funtion to get the number of occurence of each letter in a specified string
function numberOfOccurences(str) {
    let occurences = {}
    str.split(" ").join('').split('').forEach((char) => {
        if (occurences.hasOwnProperty(char) === false) {
            occurences[char] = 1
        }
        else {
            occurences[char]++
        }
    })

    // console.log(occurences);
}
numberOfOccurences("Hassan Ahmed Khan")


// 11) Loop an array and add all members to it
function addArray() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    let sum = 0
    arr.forEach((num) => {
        sum = sum + num
    })
    // console.log(sum)
}
addArray()

// 12) In an array of numbers and strings add only numbers not strings 
function addOnlyNumbers() {
    let arr = [1, 'hassan', 677, 'ahmed', 'khan', 988987]
    let sum = 0
    arr.forEach((item) => {
        if (typeof item === 'number') {
            sum = sum + item
        }
    })
    // console.log(sum);
}
addOnlyNumbers()

// 13) Loop an array of objects and remove all objects which don't have gender value male
function removeObjects() {
    const people = [
        { name: "Alice", gender: "female" },
        { name: "Bob", gender: "male" },
        { name: "Charlie", gender: "male" },
        { name: "Dana", gender: "female" },
        { name: "Eli", gender: "non-binary" }
    ];
    const males = people.filter(person => person.gender === 'male');
    // console.log(males);
}
removeObjects();


// 14) Write a javasscript function to clone an array 
function cloneArray(arr) {
    const newArr = [...arr]
    // console.log(newArr)
}
cloneArray([1, 2, 3, 4, 5])



// 15) Write a js function which accepts an argument and returns the type
// Note: There are six possible values that typeof returns object, function, Boolean, number, string and undefined
function typeFn(type) {
    // return console.log(typeof (type));
}
typeFn(function () { })



// 16) Write a js function to get the last element of an array 
function lastElement(arr) {
    return arr[arr.length - 1]
}
// console.log(lastElement([1, 1, 1, 1, 1, 2, 65984]));



// 17) Write a js function to get the first element of an array 
function firstElement(arr) {
    return arr[0]
}
// console.log(firstElement([54646, 1, 1, 1, 1, 1, 2, 65984]));



// 18 Write a js function to find the most frequent item of an array
function freqItem(arr) {
    let frq = {}
    arr.forEach((item) => {
        if (frq.hasOwnProperty(item)) {
            frq[item]++
        }
        else {
            frq[item] = 1
        }
    })
    let ans = Object.keys(frq).reduce((acc, num) => {
        return frq[acc] > frq[num] ? acc : num
    })

    // console.log(ans);
}
freqItem([1, 1, 1, 1, 1, 1, 2, 5, 5, 5, 5, 6, 6, 3, 3, 3, 3, 3, 9, 9, 9, 8]);



// 19) Write a js program to shuffle an array 
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        // Pick a random index from 0 to i
        const j = Math.floor(Math.random() * (i + 1));

        // Swap elements arr[i] and arr[j]
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}
// console.log(shuffleArray([2, 5, 9, 7, 32, 3, 9, 6, 6]));



// 20) Write a program to find union of two arrays 
function union(arr1, arr2) {
    // console.log([...new Set(arr1.concat(arr2))]);
}
union([1, 2, 3, 4, 5, 6, 7, 8, 9], [2, 3, 6, 8, 7, 9, 5, 3])



// How to find intersection
function intersection(arr1, arr2) {
    const result = arr1.filter(item => arr2.includes(item));
    // console.log([...new Set(result)]);
}
intersection([1, 2, 3, 4, 5], [2, 3, 5, 6, 7]);



// 21) Use console log to display currect year
// console.log(new Date().getFullYear());



// 22) Write a loop to print numbers from 1 to 50 
function printNumbers() {
    for (let i = 1; i <= 50; i++) {
        // console.log(i);
    }
}
printNumbers()



// 23) Use a while loop to sum the numbers from 1 to 10  
function sumNumbers() {
    let num = 1
    let sum = 0
    while (num <= 10) {
        sum = sum + num
        num++
    }
    // console.log(sum);
}
sumNumbers()



// 24) Create a forof loop to log the each character of a word Javascript 
function logJS() {
    const js = "JavaScript"
    for (const char of js) {
        // console.log(char)
    }
}
logJS()



// 25) Write a for loop that skips even number between 1 and 20 
function skipsNumber() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !== 0) {
            // console.log(i);
        }
    }
}
skipsNumber()


// 26) Use a do while loop to log numbers between 5 to 1 
function doWhile() {
    let i = 5
    do {
        // console.log(i)
        i--
    } while (i >= 1);
}
doWhile()


// 27) Create a for loop that calculates the factorial of 5 
function factorial() {
    let fact = 1
    for (let i = 1; i <= 5; i++) {
        fact = fact * i
    }
    // console.log(fact)
}
factorial()


// 28) write a nested loop to cretae a 3x3 grid of numbers
function createGrid() {
    let count = 1;
    for (let i = 1; i <= 3; i++) {
        let line = '';
        for (let j = 1; j <= 3; j++) {
            line += count + ' ';
            count++;
        }
        // console.log(line.trim());
    }
}
createGrid();



// 29) Use a for loop to reverse an array 
function reverseArray() {
    let arr = [1, 2, 3, 4];
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
// console.log(reverseArray());



// 30) Use a while loop that logs numbers from 1 to 100 divisible by 5
function divisible5() {
    let i = 1
    while (i <= 100) {
        if (i % 5 === 0) {
            // console.log(i);
        }
        i++
    }
}
divisible5()



// 31) Use forin loop to iterate over an object and log its keys 
function forInLoop() {
    const people =
    {
        name: "Alice",
        age: "test",
        email: 'test'
    }
    for (const key in people) {
        // console.log(key)
    }
}
forInLoop()



// 32) Create an array of top 5 favourite movies and logs it 
function favouriteMovies() {
    let movies = ['Avengers', 'Avengers Infinity War', 'Avengers Endgame', 'Avatar', 'MI Dead Reckoning']
    movies.forEach((movie) => {
        // console.log(movie);
    })
}
favouriteMovies()


// 33) Find and log the second element of an array 
function secondElement() {
    const arr = [1, 2, 3, 4, 5]
    // console.log(arr[1]);
}
secondElement()


// 34) Add two new elements at the start of an array using unshift() 
function unshift() {
    let arr = [1, 2, 3, 4, 5]
    arr.unshift(6)
    arr.unshift(7)
    // console.log(arr);
}
unshift()


// 35) Use slice to extract the first three elements of an array 
function usseSLice() {
    let arr = [1, 2, 3, 4, 5]
    // console.log(arr.slice(0, 3));
}
usseSLice()


// 36) Sort an array of numbers in ascending order 
function sortArray() {
    let arr = [5, 2, 9, 1];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log(arr);
}
sortArray();

// 37) Find an area with given radius
function area(r) {
    console.log((Math.PI * r * r).toFixed(2));
}
area(30)