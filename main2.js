console.log("Hello World!");

const age = 19;
console.log(age);

let num1 = 20;
let num2 = 50;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);

let myName = "Earn";

console.log(`Hello, ${myName}!`);

let fruits = ["Banana", "Strawberry", "Lyngee"];
fruits.forEach((element) => console.log(element));
console.log(fruits);

for (const i of fruits) {
  console.log(i);
}

let con_statement = 20;
if (con_statement % 2 === 0) console.log("even");
else console.log("odd");

function tewnaban(num1, num2) {
  let results;
  results = num1 + num2;
  return results;
}

console.log(tewnaban(2, 50));

const nums1 = [5, 6, 85, 65, 12];
let most_number = 0;
nums1.forEach((holder) => {
  if (holder > most_number) {
    most_number = holder;
  }
});

console.log(most_number);

let car = { make: "asd", model: "sdfv", year: 2004 };
console.log(car);

function canVote(age) {
  if (age >= 18) console.log("You can vote");
  else console.log("cant vote");
}
canVote(15);

function factorial(number) {
  let results = 1;
  if (number === 0 || number === 1) {
    return 1;
  } else {
    for (let i = 1; i <= number; i++) {
      results *= i;
    }
    return results;
  }
}

console.log(factorial(1));

function findSum(nums) {
  let results = 0;
  nums.forEach((index) => {
    results += index;
  });
  return results;
}
let fff = [5, 6, 8];

console.log(findSum(fff));

// 13

let person = {
  name: "Earn",
  age: 18,
  greeting: function greeting() {
    console.log("Hello, " + this.name + " age: " + this.age);
  },
};

person.greeting();

// 14
let randomNumber = -5;
if (randomNumber > 0) console.log("positive");
else if (randomNumber < 0) console.log("negative");
else if (randomNumber === 0) console.log("zero");

//15
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//16
function temperature(degree, unit) {
  if (unit == "Celsius") {
    let results1 = 0;
    results1 = degree * (9 / 5) + 32;
    return results1;
  } else if (unit == "Fahrenheit") {
    let results2 = 0;
    results2 = degree - 32 * (5 / 9);
    return results2;
  }
}
console.log(temperature(520, "Fahrenheit"));

//17

let wordsss = ["Plam", "Chompooh", "Baitong", "Kran", "Magroot"];
function checkWord(word) {
  let longestWord = "";
  word.forEach((element) => {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  });
  return longestWord;
}
console.log(checkWord(wordsss));

//18
let book = {title: 'Harry Potter', Author: 'Tood'}
function informationOfBook(title, author) {
    console.log('Book => ' + 'Title: ' + book.title + ', Author: ' + book.Author);
}

informationOfBook();

//19 leap year => กุมภามี29วัน 4ปีครั้ง

function leapYear(year) {
    if(year %4 === 0 && year %400 === 0) console.log('leap year');
    else console.log(`is't a leap year`);;
} 

leapYear(2004);

//20
function multiNumber (number) {
    for (let i = 1; i <= 12; i++) {
        console.log( number + '*'  + i + ' = ' + (number*i)); 
    }
}
multiNumber(5);
