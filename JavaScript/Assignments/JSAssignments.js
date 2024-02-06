// let arr = [1, 2, 3, 4, 1, 0, 2, 2]; //length 8
// let out = [], temp = [], sum = 0, i = 0;
// let size = 5;
// while (i <= arr.length-1) {
//     sum += arr[i];
//     if(sum <= size){
//         temp.push(arr[i]);
//         i++;
//     }
//     if(sum > size){
//         out.push(temp);
//         sum = 0;
//         temp = [];
//     }
// }
// console.log(out);

// --------------> Shortcut <--------------
// function shortcut(str1, str2) {
//     if(str1 == "" || str2 == ""){
//         return '';
//     }
//     let f = str1.charAt(0);
//     let s = str2.charAt(0);
//     return f.concat(s);
// }

// let sh = shortcut("Hello", "world");
// console.log(sh);

// ------------> first char <--------------
// function firstChar(str) {
//     if(str == " " || str == "") return "";
//     str = str.trim();
//     return str.charAt(0);

// }
// console.log(firstChar(' Rosa Parks '));

// -------------> first word <--------------

// function firstWord(str) {
//   if (str == "") return "";
//   str = str.trim();
//   let i = 0, str1 = "";
//   while (i <= str.length - 1) {
//     if(str[i] == " ") return str1;
//     str1 += str[i];
//     i++;
//   }
//   return str1;
// }
// let word = firstWord("");
// console.log(word);

// -----------> To Case <----------------------

// function toCase(s) {
//     return (`${s.toLowerCase()}-${s.toUpperCase()}`);
// }
// console.log(toCase('Mthatha'));

// --------> print function name  <-------------

// function functionName(){
//     alert(this.functionName);
// }
// functionName();

// ----------------> Add two values <----------------

// var first = parseInt(prompt("Enter first number"));
// var second = parseInt(prompt("Enter second number"));
// var result = first*2 + second;
// alert("The final result is: "+result);

// ------------> check same type <--------------

// function isSameType(a, b) {
//   console.log(typeof a);
//   console.log(typeof b);
//   return (typeof(a) == typeof(b));
// }
// let value1 = prompt("Enter Start of the Range.");
// let value2 = prompt("Enter End Of the Range.");
// let bool = isSameType(value1, value2);
// console.log(bool);

//--------------> Difference In Days  <-----------------

// var dateDiffInDays = function (date1, date2) {
//   date1 = new Date(date1);
//   date2 = new Date(date2);
//   const diff = date2 - date1;
//   const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
//   return days;
// };
// const dateOne = prompt("Enter Start Date.");
// const dateTwo = prompt("Enter End Date.");
// alert(dateDiffInDays(dateOne, dateTwo));

// ---------> Object Property Checker <------------

// let Obj = {
//   red: "#FF0000",
//   green: "#00FF00",
//   white: "#FFFFFF",
// };
// let keys = Object.keys(Obj);
// let color = "red";
// for (let p in Obj) {
// //   console.log(p, Obj[p]);
//   if(p == color){
//     console.log(true);
//   }
// }
// console.log(false);

// ----------> Amount of Days <-------------

// function daysOfAYear(year) {
// 	if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
// 	    return 366;
// 	} else {
// 	    return 365;
// 	}
// }
// const year = Number(prompt("Enter a year"));
// alert(daysOfAYear(year));

// -------> Print The Function Name <------------

// function functionName(){
//     alert(arguments.callee.name)
// }
// functionName();

// ------> URL Information <---------------
// const currentUrl = window.location.href;
// console.log(currentUrl.length);

// --------> Encoded String Parse <------------
// function parseCode(str) {
//     let objs = {};
//     for(let x in str){

//     }
// }
// let obj = parseCode("John000Doe000123");

// let obj = {};
// Object.assign(obj,{fname:"AAA"});
// Object.assign(obj,{lname:"BBB"});
// console.log(obj);

//---------------> Making Change <-----------------

// const makeChange = (usd) => {
//   let item = {
//     q: 25,
//     d: 10,
//     n: 5,
//     p: 1,
//   };

//   let obj = {};
//   for (let x in item) {
//     let curItem = item[x];
//     obj[x] = parseInt(usd / curItem);
//     usd = usd % curItem;
//   }
//   return obj;
// }
// const c = prompt("Enter c: ");
// alert(JSON.stringify(makeChange(c)));

// -----------> Generate Random String of Length L <------------------------

// function generateRandomNumber() {
//   let randomNumber = parseInt(Math.random() * 100);
//   if (randomNumber < 47) {
//     randomNumber += 47;
//   }
//   return randomNumber;
// }

// function generateRandomString(n) {
//   let str = "";
//   for (let i = 0; i < n; i++) {
//     str += String.fromCharCode(generateRandomNumber());
//   }
//   return str;
// }
// console.log(generateRandomString(5));

// ------------------> Contains Property <---------------

// let obj = {
//   name: "AA",
//   country: "India",
//   role: "Batsman",
//   domain: "sports",
// };
// delete obj["role"];
// console.log(obj);
// delete obj.role;
// console.log(obj);
// let js = JSON.stringify(obj);
// console.log(js);

// let key = "role";
// if(obj[key]){
//     console.log(true);
// }else{
//     console.log(false);
// }

// let obj = {
//     prop_1: "val_1",
//     prop_2: "val_2",
//     prop_3: "val_3",
//     prop_4: "val_4",
// };
// function gfg_Run() {
//     ans = "";
//     let prop = 'prop_5';
//     if (obj.hasOwnProperty(prop)) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }
// gfg_Run()

// -------->  Number Of Books Read  <--------------
// let books = [
//     {
//       author: "Bill Gates",
//       title: "The Road Ahead",
//       readingStatus: true,
//     },
//     {
//       author: "Steve Jobs",
//       title: "Walter Isaacson",
//       readingStatus: true,
//     },
//     {
//       author: "Suzanne Collins",
//       title: "Mockingjay: The Final Book of The Hunger Games",
//       readingStatus: false,
//     },
//   ];
// let count = 0;
// for (let i in books) {
//     let reading =  books[i].readingStatus;
//     // console.log(reading);
//     if(reading == true){
//         count++;
//     }
// }
// console.log(count);

// --------->  FizzBuzz  <-------------
// function fizz() {
//   for (let i = 1; i <= 20; i++) {
//     if (i % 3 == 0 && i % 5 != 0) {
//       alert("\nFizz");
//     } else if (i % 5 == 0 && i % 3 != 0) {
//       alert("\nBuzz");
//     } else if (i % 3 == 0 && i % 5 == 0) {
//       alert("\nFizzBuzz");
//     }
//   }
// }
// fizz();

// -------------> Index Of Ignore Case <---------------

// let s = "apple";
// console.log(s.length);
// let s1 = s.slice(2,5);
// console.log(s1);

function indexOfIgnoreCase(str, sub) {
  let n = sub.length;
  for (let i = 0; i < str.length; i++) {
    let s = str.slice(i, n);
    // console.log(s);
    if (s == sub) {
      return i;
    }
  }
  return -1;
}
let a = indexOfIgnoreCase("Hello", "lo");
// console.log(a);

// ----------> Second Highest Element  <--------------

// function secondHighest(a) {
//   let large = -Infinity;
//   let second = -Infinity;
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > large) {
//       second = large;
//       large = a[i];
//     } else if (a[i] < large && a[i] > second) {
//       second = a[i];
//     }
//   }
//   return isFinite(second) ? second : -Infinity;
// }
// let ar = [1,1,1,1,1];
// let arr = secondHighest(ar);
// console.log(arr);

// ------------------> Minimum date <----------------------------
// function minDate(arr){
//   let min = 0;
//   for (let i = 0; i < arr.length; i++) {
//     min = Math.min(0,parseInt(arr[0]));
//   }
//   // console.log(min);
//   return min;
// }

// let date = minDate(["2023/03/01", "2023/03/02", "2023/03/03"]);
// console.log(date);

function parseCode(user) {
  console.log(user.length, user);
  let a = [];
  let word = "";
  for (let i = 0; i < user.length; i++) {
    let ch = user.charAt(i);
    if(ch != 0){
      word += ch;
    }else{
      a.push(word);
      word = "";
    }
  }
  console.log(a);
  let ans = {
    firstName: "",
    lastName: "",
    id: "",
  };
  return ans;
}

let obj = parseCode("John000Doe000123");
console.log(obj);
