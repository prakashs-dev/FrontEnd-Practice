// function test(){
//     console.log("Log A");
//     function b(){
//         console.log("Log B");
//     }
// }
// b();

// var myStr = "";
// function sam(){
//     myStr = "Hello";
//     function samp(){
//         myStr = myStr + " Welcome";
//     }
//     samp();
// }
// sam();
// console.log(myStr);

// var rectArea = function(w, h){
//     return w*h;
// }
// console.log(rectArea(5,4));

// var h = 10;
// function admin() {
//   h = 20;
// }
// admin();
// console.log(h);

// ------ > it will print the function
// function user(a,b){
//     return a*b;

// }
// console.log(10,20);

// x = 5;
// console.log(x);
// var x;

// let furite = ["apple","orange","kiwi","Stwarberry"];
// let temp = furite.splice(4,1,"banana");
// console.log(furite);
// console.log(temp);

// let furite = ["apple","orange","kiwi","Stwarberry"];
// let temp = furite.slice(1,1,"banana");
// console.log(furite);
// console.log(temp);

// let numbers = [-23,12, -17, 19, -20, 0, 1,-12, -5, 5, 20];
// let mcq = numbers.filter(function(e, i, l){
//     return (e % 2 == 0);
// })
// console.log(mcq);

// var words = ["one", "two", "three", "four"];
// let sentance = function () {
//   console.log(words);
//   if (words == "two") {
//     words.shift();
//   }
// };
// words.forEach(sentance);

// words.forEach(function (words) {
//   console.log(words);
//   if (words === "two") {
//     words.shift();
//   }
// });

// console.log(words);

// var students = ["Simran", "Sakshi", "Komal", "Ishita", "Manya"];
// var selected = students.slice(-4, -2);
// console.log(selected);

// var arr1 = [0, 100, 200, 30];
// var fn = 10;
// let answer = arr1.filter(function (e, fn) {
//     return e > fn;
// });
// console.log(answer);

// ----------->  fibonacci  <----------------
// function fibonacci(num) {
//     // if(num == 0 || num == 1) return true;
//     let a = 0, b = 1;
//     for (let i = 0; i < num; i++) {
//         let c = a + b;
//         if(num == c) return true;
//         a = b;
//         b = c;
//     }
//   return false;
// }
// let abc = fibonacci(15);
// console.log("Assingment");
// console.log(abc);

// 0 1 1 2 3 5 8 13 21 34

// let byte = '';
// let size = new Blob([byte]).size;
// console.log(size);

// let abc = [-1, -2 , 3, 4 ];

// function mySort(s){
//     s.sort(function(a, b){
//         return a - b;
//     });
//     s.sort(function(a, b){
//         return b - a;
//     });
// }

// let abcd = mySort(abc);

// console.log(abcd);

// ---- > Array Sort <--------
// var nums = [-1, -2 , 3, 4 ];
// let as = nums.sort(function(a, b){
//     return a - b;
// });
// console.log(as);

// function calculateGrade(mark) {
//   if (mark >= 90 && mark <= 100) {
//     return "A";
//   } else if (mark >= 80 && mark <= 89) {
//     return "B";
//   } else if (mark >= 70 && mark <= 79) {
//     return "C";
//   } else if (mark >= 60 && mark <= 69) {
//     return "D";
//   } else {
//     return "F";
//   }
// }
// let grade = calculateGrade(-50);
// console.log(grade);

// ---------- > Average Grades <------------------

// let avg = [5, 10, 15, 20];
// let len = avg.length;
// let gra = avg.reduce(function(prev, ele){
//     return prev + ele;
// },0);
// console.log(gra/len);

// -------> Odd Sum <----------
// let odd = [1, 3, 5, 4];
// let sum = 0;
//     for (let i = 0; i < odd.length; i++) {
//         if(odd[i] % 2 != 0){
//             sum += odd[i];
//         }
//     }
//     console.log(sum);

// ------> large number of index <------------

// let idx = [1,, 3, 4, 5, 10,40,17,5,7,8,];
// console.log(idx);

// let high = idx.map(function(element) {
//    console.log(element);
// //    console.log(index);
// return element;
// });

// console.log(high);
// var maxVal = 0, index = -1;
// for (let x in idx) {
//     if(idx[x] > maxVal){
//         maxVal = idx[x];
//         index = x;
//     }
//   console.log(x, idx[x]);
// }
// console.log("Large index ", index);

// var obj1 = {
//     key1:"sp",
//     key2:123
// }
// Object.seal(obj1);
// obj1.key1 = "rk";
// console.log(obj1.key1);
// delete obj1.key1;

// const abc = {
//     first : 20,
//     second : 30,
//     first : 50
// };
// console.log(abc);

// function f(a,b = 1) {
//     console.log(a*b);
//     console.log(a, b);
// }
// var x;
// f(5, x);

// function getInfo(memb, year) {
//     memb.name = 'juno';
//     year = '1998';
// }

// const per = { name : 'sarah'};
// const dob = '1997';
// getInfo(per,dob);
// console.log(per,dob);

// var stu ={
//     fname : 'Good',
//     lname : 'bad'
// };

// delete stu.fname;
// console.log(stu.fname+" "+stu.lname);

//  var word = ['one','two','three','fiour'];

//  let val = word.forEach(function (words) {
//     console.log(word);
//     if(word == 'two'){
//         words.shift();
//     }

//  })

//  console.log(val);

// hoisted();
// var hoisted = function(){
//     console.log('Good');
// }

// let array = [ 60, 70, 20, 10, 40, 90 ];
// const bag = function(x) {
//     return x > 5;
// }
// console.log(bag);
// if(!array.every(bag)) {
//     console.log("statement 1");
// }else {
//     console.log("statement 2");
// }

// var color = ["red","ornage","blue","yellow"];
// var remove = color.splice(2);
// console.log(color);
// console.log(remove);

// function makeArmy(){
//     let shooters = [];
//     let i = 0;
//     while(i < 10){
//         let shooter = function(){
//             console.log(i);
//         }
//         shooters.push(shooter)
//         i++;
//     }
//     return shooters;
// }
// let army = makeArmy();
// army[0]();//10
// army[5]();//10

// let user ={
//     fname : 'john',
//     lname : 'doe',
//     getFull : function(){
//         return()=>{
//             console.log(`Full Name of user ${this.fname} ${this.lname}`);
//         }
//     }
// }
// user.getFull()();

// function sqSum(a, b){
//     function square(x){
//         return x*x;
//     };
//     return square(a)+ square(b);
// }
// let sq = sqSum(5,5);
// console.log(sq);

// var az = 1;
// function b() {
//     az = 10;
//     return;
//     function az(){};
// }
// b();
// console.log(az);

// function ab() {
//     console.log('ind a');
//     function b() {
//         console.log(' ind b');
//     }
// }
// a()b();

// function exam(a, b, c, d) {
//     const result1 = a * c;
//     const result2 = b / d;
//     return result1 % result2;
// }
// console.log(exam(2, 3, 4, 0));

// {
//   let msg = "hello";
//   console.log(msg);
// }
// console.log(msg);

// var scope ="Hello js";
// function chkscope() {
//   var scope ="welcome js";
//   function f(){
//     return scope;
//   }
//   return f;
// }
// console.log(scope);

// function outer() {
//   var a = 10;
//   function inner() {
//     var b = 10;
//     return a + b;
//   }
//   return inner();
// }
// console.log(outer());//20 check 'a' value on lexical parent

// function getVal() {
//   throw "Hello world";
// }
// function sayHai() {
//   try{
//     const da = getVal();
//     console.log('Its working',da);
//   }catch(e){
//     console.error('oh no an error', e);
//   }
// }
// sayHai();
// function greet(hum) {
//   var hum = 'Dear '+ hum;
//   return function(gre='Hello! '){
//     console.log(gre+hum);
//   }
// }
// let sayHello = greet('peter')
// console.log(sayHello);

// function foo(){
//   var a = 8;
//   function bar() {
//     console.log(a);
//   }
//   var a = a+ 2;
//   return bar;
// }
// var fun = foo()
// fun();

// var sequan =(function iife(){
//   var cur = 0;
//   return{
//     getcurVal : function(){
//       return cur;
//     },
//     getNxtVal : function(){
//       cur = cur + 1;
//       return cur;
//     }
//   }
// }());
// console.log(sequan.getNxtVal());
// console.log(sequan.getNxtVal());
// console.log(sequan.getcurVal());

// function maker(){
//   let cunt = 0;
//   return function(){
//     return cunt++;//1,2
//   };
// }
// let count1 = maker();
// let count2 = maker();
// console.log(count1);//0
// console.log(count1);//1
// console.log(count2);//2

// function cart() {
//   let iteam = 0;
//   return{
//     addItem : function(){
//       iteam++;
//     },
//     getItem : function(){
//       return iteam;
//     }
//   };
// }
// const closure = cart();
// closure.addItem();
// closure.addItem();
// closure.addItem();
// console.log(closure.getItem());

// var b = 20;
// console.log(b);
// var b = 30;
// console.log(b);

// var x = 10;
// function foo(){
//   var x = 20;
//   console.log(x);
//   console.log(window.x);
// }
// console.log(a);
// window.foo();

// let nums = 10;
// if(nums === "10"){
//   console.log(true);
// }else{
//   console.log(false);
// }

// const azz = [10,20,30,40,50];
// // azz[10]=40;
// azz.splice(1,3);
// console.log(azz);

// let aa = 1;
// let b = 2;
// if(aa < b){
//   if(aa === 1){
//     console.log("truthy");
//   }else if(b === 2){
//     console.log("falsy");
//   }
// }else{
//   console.log("fail");
// }

// let gg = "hello world";
// let rr = gg.slice(-5, -1);
// console.log(rr);

// var am = 3;
// var an = 8;
// let ans = Math.floor(an/am);
// console.log(ans);

// const arr = [1, 2, 3];
// arr[10] = 10;
// console.log(arr.length);

// function User(name) {
//   this.name = name;
//   this.admin = false;
// }

// var user = new User("prakash");
// console.log(user);

// let g = 2;
// function test(b) {
//   return g * b;
// }
// g = 3;
// let con = test(4);
// console.log(con);

// document.addEventListener('DOMContentLoaded', function(){
//     console.log('dom is ready');
// })
// console.log('script ready');

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.filter((num) => num % 2 === 0);
// console.log(newArr.length);

// const arr1 = [1,2,3];
// const arr2 = [4,5,6];
// const arr3 = arr1.concat(arr2);
// console.log(arr3.indexOf(4));

// let x = 7;
// if(x % 2 == 0){
//   console.log(1);
// }else if( x % 3 == 0){
//   console.log(2);
// }else{
//   console.log(3);
// }

// let x = 10;
// let y = 5;
// let zz = x % y ** 2;
// console.log(zz);

// let str = "hello world";
// let newStr = str.slice(-5, -1);
// console.log(newStr);

// const jj = {};
// const kk = { key: 'kk'}
// const mm = { key: 'mm'};
// jj[kk] = 123;
// jj[mm] = 456;
// console.log(jj[kk]);

// String.prototype.refName = () => {
//   return "just give up";
// };
// const name = "layz";
// console.log(name.refName());

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }
//   get area(){
//     return this.width * this.height;
//   }
// }
// const rect = new Rectangle(4, 5);
// console.log(rect.area);
// rect.width = 6;
// console.log(rect.area);

// const x = 12345678901234567890n;
// const y = BigInt("98745632109876543210");
// const t = x + y;
// console.log(t);

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }

// const obj5 = { 1: "a", 2: "b", 3: "c" };
// const set = new Set([1, 2, 3, 4, 5]);
// console.log(
//   obj5.hasOwnProperty("1"),
//   obj5.hasOwnProperty(1),
//   set.has("1"),
//   set.has(1)
// );

// const date1 = new Date("2023-03-31T23:59:59.999Z");
// const date2 = new Date("2023-04-01T00:00:00.000Z");
// const dif = date2 - date1;
// console.log(dif);

// class Animal {
//   constructor(name, type) {
//     this.name = name;
//     this.type = type;
//   }
//   makeSound() {
//     console.log("Animal sound");
//   }
// }

// class Dog extends Animal {
//   constructor(name) {
//     super(name, "Dog");
//   }
//   makeSound() {
//     console.log("woof");
//   }
// }
// const myDog = new Dog("fido");
// myDog.makeSound();

// const obj6 = { a: "one", b: "two", a: "three" };
// console.log(obj6);

// const name = "falsndkj";
// age = 21;
// console.log(delete name);
// console.log(delete age);


