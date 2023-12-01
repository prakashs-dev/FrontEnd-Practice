// 1.output statement
// console.log("Welcome to JavaScript BEeginner Class");
// console.log(100);
// console.log(true);
// console.log(25.23);
// console.log("a");

// 2.concatenating string
let first_name = "Prakash";
let last_name = "Saravanan";
// console.log("My full name "+first_name+" "+last_name);

// 3.printing multiple string in one single line
// console.log(first_name,last_name);

// 4.Arthimathic operation
// console.log(10+5);
// console.log(10-5);
// console.log(10*5);

let pie = Math.PI;
// console.log(2*pie*5);

// 5.Data Type

// a.String
let ab = "Hello JavaScript";
// console.log(ab);
// console.log(typeof(ab));
// console.log(ab, typeof(ab));

// b. Number

// c. Boolean

// d. Null - indicates absence of value
let address = null;
// console.log(address);

// e. Undefined
let num;
// console.log(num);

// f. Objects
let person = {
  name: "prakash",
  age: 24,
  address: null,
  hobbies: ["programming", "leetcode"],
  phone: {
    ind: +919874563214,
    us: +1365214789,
  },
};
// console.log(person);

// g. Array
let furites = [
  "apple",
  "banana",
  "orange",
  1,
  true,
  ["program", "leetcode"],
  { person },
];
// console.log(furites);

// 6. Date
let myDate = new Date();
// console.log(myDate);

// 7.BigNumber - n at end is used to denote bignumber
let n = 21651646515645348951554n;
// console.log(n);

// 8.Increment
let m = 10;
m++;
// console.log(m);

// 9. Exponentiation(**) - is power value
let ex = 5 ** 2;
// console.log(ex);

// 10. Unary plus
let z = 5;
// console.log(z);
// console.log(z+10);
// console.log(z+"10");
let p = +"5"; //converting string to number
// console.log(typeof p);
// console.log(p+z);

// 11. Unary Negation
let a = 10;
a = -a;
// console.log(a);

// 12. if-elseif-else

// 13. Ternary Operator

// 14. Switch Statement
let day = 5;
let day_name;
switch (day) {
  case 1:
    day_name = "Sunday";
    break;
  case 2:
    day_name = "Monday";
    break;
  case 3:
    day_name = "Tuesday";
    break;
  case 4:
    day_name = "Wednesday";
    break;
  case 5:
    day_name = "Thursday";
    break;
  case 6:
    day_name = "Friday";
    break;
  case 7:
    day_name = "Saturday";
    break;
  default:
    day_name = "Unknown day";
}

// console.log(day_name);

// 15. Nested If Statement

// var args = [0,10,20,30];
// var argumentsLength = function(...args) {
//   return args.length;
// };
// console.log(argumentsLength);

// var digit = 12345;
// var sum = 0;
// while(digit > 0){
//   var last = digit % 10;
//   sum += last;
//   digit = Math.floor(digit / 10);
// }
// console.log("sum of digit :",sum);

// ------------------
// Arrays
// ------
// const alphabets = ["A","B","C","D","E","F","G","H",'I','J','K','L','M','N','O','P'];
// const len = alphabets.length;
// console.log(len);

// for(var i = 0; i < len; i++){
//   console.log(alphabets[i]);
// }

// sort
// -----
// const alpha = ["A",'N','O',"B","F","G","H",'I','J',"C","D","E",'K','L','M','P'];
// alpha.sort();
// console.log(alpha);

// Array Indexing
// --------------

// const a1 = ['apple','banana','orange','kiwi','graph'];
// console.log(a1[2]);
// var obj = {"x": 5, "y": 42}

// var isEmpty = function(obj) {
//   return _.isEmpty(obj);
// };
// console.log(isEmpty)

// function getFormvalue(){
//   const fname =  document.getElementsByName("fname");
//   const lname =  document.getElementsByName("lname");
//   console.log(fname);
//   console.log(lname);
// }
// alert(fname+" "+lname);

// var u1 = prompt();
// console.log(`${u1} user 1`);
// var u2 = prompt();
// console.log(`${u2} user 2`);
// alert(u1 == u2);

// console.log("hello");

// const X = -1;
// var arr = [2, 4, 3, 5, 6];
// var ans = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == X) {
//     ans.push(i + 1);
//   }
// }

// if (ans.length == 0) {
//   console.log(-1);
// }
// for (let i = 0; i < ans.length; i++) {
//   console.log(ans[i]);
// }

// console.log("Welcome");

// let num1 = 134792;
// var count = 0;
// while (num1 > 0) {
//   let last_digit = num1 % 10;
//   count++;
//   num1 = Math.floor(num1 / 10);
// }
// console.log(count);

// let array = [1,2,3,4,5,6,7];
// console.log(array);
// array.push(8,9,10);
// console.log(array);
// array.pop();
// console.log(array);
// array.push("Prakash",true,10.5);
// console.log(array);

// array.unshift("Hey prakash");//add value at the front
// console.log(array);
// array.shift(false);// remove value at the end
// console.log(array);

//splice can add and delete elements anywhere in the array
// splice return another array deleted elements

// let deleted = array.splice(2, 4);//(startIndex, end)
// console.log(deleted);
// let del = array.splice(3);
// console.log(del);

// let newArr = array.slice(3,7);//(startIndex(not include), end(value))
// console.log(newArr)

// Objects every element should have key and value

// let arr = [2, "Prakash", true, 90.5, false];

// for (let i = 0; i < arr.length; i++) {
//   console.log(i,arr[i]);
// }

let obj = {
  Name: "Prakash",
  Age: 24,
  City: "tiruttani",
  Phone: 12345467890,
};

// obj["city"] = "Chennai";
// console.log(obj.name, obj.age);
// console.log(obj["name"], obj["age"], obj["city"], obj["phone"]);
// console.log(obj);
// delete obj.phone;
// console.log(obj);

// let keys = Object.keys(obj);
// console.log(keys);

// for (let i = 0; i < keys.length; i++) {
//   console.log(i, keys[i]);
// }

// for (let i = 0; i < keys.length; ++i) {
//   console.log(keys[i], `=`, obj[keys[i]]);
// }

// let value = Object.values(obj);
// console.log(value);

/*
for in loop ==> keys directly
for of loop ==> values directly -- doesn't exist on objects
*/

// for(let x in arr){
//   console.log(keys[x], arr[x]);
// }

// for(let y of arr){
//   console.log(y);
// }

// for(let p in obj){
//   console.log(p,obj[p]);
// }

// let callme = function(){
//   console.log(a,b);
// }
// console.log(typeof callme);

// let parent = function(a, b){
//   /*
//   since b is function
//   parent is function that takes another function as a parameter
//   therefore parent is higher oreder function
//   */
//   console.log(typeof a, typeof b);
// }
// parent(10, function(){});

/**
 * forEach =>  ( n => length of the array )
 *      Takes a callaback function and invokes that callback for `n` number of times.
 *      returns nothing.
 * map    =>
 *      Takes a callaback function and invokes that callback for `n` number of times.
 *      returns another array of same length.
 *
 * filter =>
 *      Takes a cllaback function and invokes that callback for `n` number of times.
 *     returns an array of any length
 */

// ---------> forEach <----------
// let ans = [4, 2, 5, 9];
// let callme = function (element, index, list) {
//   // 1st time element: 4, index: 0, list:[4, 2, 5, 9]
//   // 2nd time element: 2, index: 1, list:[4, 2, 5, 9]
//   console.log(element, index, list);
// };

// console.log(callme);
// let myfun = ans.forEach(callme);
// forEach is higher order function
// callme - is callback function

// ---------> map <----------
// let myArr = [4, 8, 2, 3, 5, 9];
// // [4+0,8+1,2+2,3+3,5+4,9+5]
// // [4,9,4,6,9,14]
// let myResult = myArr.map(function (element, index, list) {
//   console.log(element, index, list);
//   return element+index
// });

// console.log(myResult);

/*
 Given an array , create another array which will have double values of even numbers and triple values of odd numbers.
*/
// let test = [4, 2, 3, 6, 9];

// let ad = test.map(function(e,i, l){
// return e % 2 == 0 ? 2 * e : 3 * e;
// });
// console.log(ad);

// ---------> filter <----------

// "prakash" => true
// "a" => true
// "" => false
// " " => true
// undefined => false
// null => false

// let s = [4, 2, 3, 6, 7, 8];

// let result = s.filter(function (e, i, l) {
//   // return (e % 2 == 0);
//   return 5;
// });
// console.log(result);

// console.log("hello");
// console.error("hello");
// console.warn("hello");
// console.info("hello");
// console.table("hello");

// let b = [5, 2, 7, 10];

// let arrow = (b) => {
//   for (let i = 0; i < b.length; i++) {
//     if (b[i] % 2 == 0) {
//       console.log(i, b[i]);
//     }
//   }
// };

// console.log(arrow);

// let text;
// if (confirm("Do you want to proceed?") == true) {
//   text = "You clicked OK. Proceeding...";
// } else {
//   text = "You clicked Cancel. Exiting...";
// }
// window.alert(text);

// ----------> reduce method <---------------

// let arr = [4, 3, 5, 1];
// let cb = function (prev, current, index) {
//     // first iteration: prev =4,  current = 3, index = 1
//     // second iteration: prev = 7, current = 5, index = 2
//     // third iteration: prev = 12 , current = 1, index = 3
//     console.log(prev, current, index);
//     /**
//      * 4 3 1 => 7
//      * 7 5 2 => 12
//      * 12 1 3 => 13
//      */
//     return prev + current;  //
// };

// let result = arr.reduce(cb);
// // when second argument is not present `cb` will be executed only for n-1 times where `n` is the length of the array.
// console.log(result); // 13

// let test = [5, 2, 9, 3, 11];
/*
prev = 1, current = 5 =>5+1=6
prev = 6, current = 2 =>6+2=8
prev = 8, current = 9 =>8+9=17
prev = 17, current = 3 =>17+3=20
prev = 20, current = 11 =>20+11=31
*/
// let fianl_val = test.reduce(function(prev, current){
//   return prev + current;
// },0);

// console.log(fianl_val);

// given an array multiply even numbers with 2 and odd numbers with 3. then filter out numbers which are between [5 - 25] , finally find the sum of all those elements.

// let test = [5, 2, 9, 3, 11];
// let a1 = test
//   .map(function (ele) {
//     return ele % 2 == 0 ? 2 * ele : 3 * ele;
//   })
//   .filter(function (e) {
//     return e >= 5 && e <= 25;
//   })
//   .reduce(function (prev, current) {
//     return prev + current;
//   }, 0);
// [15, 4, 27, 9, 33]
// [15, 9]
// console.log(a1);

// ------------> Array Reverse < ------------
// let s = [1, 2, 4, 3];
// let first = s[0];
// let NA = [];
// for (let i = 1; i < s.length; i++) {
//   if (s[i] > first) {
//     NA.push(s[i]);
//   } else if (s[i] < first) {
//     NA.unshift(s[i]);
//   } else {
//     NA.unshift(s[i]);
//   }
// }

// console.log(NA);
// console.log(s.sort());

// -----------> number reverse <----------------
// let nums = 123335;
// let rev = 0;
// while (nums > 0) {
//   let last = nums % 10;
//   rev = rev * 10 + last;
//   nums = Math.floor(nums / 10);
// }
// console.log(rev);

// console.log(Math.floor(f));

// function sumMaxMin(n1, n2, n3) {
//   let hight = Math.max(n1, Math.max(n2, MAth.max(n3, Math.max(n4, n5))));
//     let low = Math.min(n1, Math.min(n2, MAth.min(n3, Math.min(n4, n5))));
//   return max;
// }
// let pr = sumMaxMin(1,2,3);
// console.log(pr);

// console.log("Hello");

// -------------------------------------------------
// This and Arrow function
// console.log("welcome");
// let abz = () => {
//   const m = 10;
//   const n = 20;
//   return m+n;
// };
// console.log(abz);

// let resume = {
//   name : "prakash",
//   email : "prakash@gmail.com",
//   phoen : 1234567890,
//   isDisability : false,
//   test : function() {
//     return() =>{
//       console.log(this.name,"   ",this.email);
//     }
//   }
// }
// resume.test()();

// let ax = [10,20,60,70];
// let av = [...ax,30,40,50];
// console.log(av);

// let myName = [..."prakash"];
// console.log(myName);

// let leet = ["call", "call", "call"];
// console.log(leet);
// var createCounter = function (n) {
//   return function () {
//     let ok = [];
//     for(let x in leet){
//       console.log(x, leet[x]);
//       ok.push(n+x);
//     }
//     return ok;
//   };
// };
// console.log(createCounter(10));
