function btn() {
  let updatePtag = document.querySelector("#status");
  console.log(updatePtag);
  let head = document.createElement("h1");
  head.innerHTML = updatePtag.innerHTML;
  head.id = updatePtag.id;
  head.innerText = "Entered Metaverse";
  updatePtag.appendChild(head);
  console.log(head);
}

// ------> Browser Information <------

// let browserName = navigator.appName;
// let version = navigator.appVersion;
// const newElement = document.getElementById("browser-info");
// newElement.innerText = "You are using " + browserName + " version " + version;

// ------------> 3.Form Login <------------

function getFormvalue() {
  // let form = document.getElementById("form1");
  // const fname = form.elements["fname"].value;
  // const lname = form.elements["lname"].value;
  // alert(fname+" "+lname);

  let fn = document.querySelector('input[name="First Name"]').value;
  let ln = document.querySelector('input[name="Last Name"]').value;
  let number = document.querySelector('input[name="Phone Number"]').value;
  let email = document.querySelector('input[name="Email ID"]').value;
  // alert("First Name: "+fn+"\nLast Name : "+ln+"\nPhone Number: "+number+"\nEmail ID: "+email);
  alert(`First Name: ${fn} 
Last Name: ${ln}
Phone Number: ${number}
Email ID: ${email}`);
}

// ----------> 4.Increment Counter <---------------

function btnClick() {
  let number = document.getElementById("counter");
  let value = parseInt(number.innerText);
  alert(value);
  number.innerText = ++value;
}

function btnPSWD() {
  let getpswd = document.getElementById("pswd");
  let updateBTN = document.querySelector("button");
  if (getpswd.type === "password") {
    getpswd.type = "text";
    updateBTN.innerText = "Hide";
  } else {
    getpswd.type = "password";
    updateBTN.innerText = "Show";
  }
}

function captailWord() {
  // let text = document.getElementById('txt');
  // // let word = text.innerText;
  // text.innerText = text.innerText.toLowerCase();
  // // console.log(typeof word, word.toLowerCase());

  let txt = document.getElementById("name");
  let out = document.getElementById("output");

  out.value = txt.value.toUpperCase();
  // console.log(typeof wr, wr);
}

// function volume_sphere() {
//   //Write your code here
//   let radius = document.getElementById("radius").value;
//   // volume of sphere formula ==> 4/3 * Math.PI * r^3
//   let volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
//   volume = volume.toFixed(4);
//   document.getElementById("volume").value = volume;
// }
// window.onload = document.getElementById("MyForm").onsubmit = volume_sphere;

let userList = ["prakash", "alpha", "ganesh", "jagadessh", "prabhu"];
const usertag = document.querySelector(".users");
function showUsers() {
  usertag.innerText = "";
  userList.forEach((user) => {
    const createTag = document.createElement("div");
    createTag.innerText = user;
    createTag.className = "user-item";
    usertag.appendChild(createTag);
  });
}
/* ----------> Infinite Scroll
const scrollContainer = document.getElementById("infi-list");
let i = 1;
for (; i <= 10; i++) {
  const cretaElemet = document.createElement("div");
  cretaElemet.innerText = `item ${i}`;
  cretaElemet.className = "item";
  scrollContainer.appendChild(cretaElemet);
}

scrollContainer.addEventListener("scroll", () => {
  let scrolledHeight = scrollContainer.scrollTop;
  // console.log(scrolledHeight);
  let maxScrollableHeight =
    scrollContainer.scrollHeight - scrollContainer.clientHeight;
  if (maxScrollableHeight - scrolledHeight <= 5) {
    addTwoMoreItem();
  }
});

function addTwoMoreItem() {
  const div1 = document.createElement("div");
  div1.innerText = `item ${i++}`;
  div1.className = "item";
  const div2 = document.createElement("div");
  div2.innerText = `item ${i++}`;
  div2.className = "item";
  scrollContainer.append(div1, div2);
}
*/

// for (let i = 1; i < Infinity; i++) {
//   // console.log(i);
//   scroll.appendChild("Item "+i);
// }

let addHeading = false;
function insertBeforeSpan() {
  if (addHeading) return;

  const h1 = document.createElement("h1");
  h1.innerText = "Prakash";

  const parent = document.getElementById("container");
  const nxtSibling = document.querySelector("#container > span");
  parent.insertBefore(h1, nxtSibling);
  addHeading = true;
}

function insertBeforeTop() {
  // const rowCreate = document.createElement("tr");
  // for (let i = 1; i <= 2; i++) {
  //   const cellCreate = document.createElement("td");
  //   cellCreate.innerText = "New Cell"+i;
  //   rowCreate.appendChild(cellCreate);
  // }
  // // console.log(rowCreate);
  // const parent = document.getElementById("sampleTable");
  // const nxtSibling = document.querySelector("#sampleTable > tbody");
  // parent.insert(rowCreate, nxtSibling);
  // // parent.appendChild(rowCreate);
  // // parent.ap
  // console.log(parent);

  let table = document.getElementById("sampleTable");
  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  cell1.innerHTML = "New Cell1";
  cell2.innerHTML = "New Cell2";
  console.log(table);
}

// time.innerText = date.toLocaleDateString() + ", " + date.toLocaleTimeString();
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleTimeString());
// console.log(date.getHours());
// let min = date.getMinutes();
// console.log(date.getSeconds());
// setTimeout(min, 1000);

(function getTimeDate() {
  const time = document.getElementById("timer");
  let date = new Date();
  // time.innerText = date.toLocaleDateString() + ", " + date.toLocaleTimeString();
  setTimeout(getTimeDate, 1000);
})();

// const button = document.getElementById("btn");
// let count = 0;
// const listnner = () => {
//   count++;
//   console.log("Click " + count);
//   if (count == 2) {
//     button.removeEventListener("click", listnner);
//     console.log("listener removed");
//   }
// };

// button.addEventListener("click", listnner);

// const formElements = document.getElementById("form");
// const button = document.querySelector("#btn");

// formElements.addEventListener("submit", (event) => {
//   event.preventDefault();
//   const data = {
//     title: formElements.title.value,
//     description: formElements.description.value.trim(),
//     isPublic: formElements.isPublic.checked,
//     isCommentsDisabled: formElements.isCommentsDisabled.checked,
//   };
//   console.log(data);
// });

let students = [
  {
    name: "prakash",
    age: 24,
  },
  {
    name: "ganesh",
    age: 23,
  },
  {
    name: "user",
    age: 20,
  },
  {
    name: "black",
    age: 28,
  },
];

// const inputSeach = document.querySelector("#search");
// inputSeach.addEventListener("input", () => {
//   let searchQuery = inputSeach.value;
//   // console.log(searchQuery);
//   filterStudents(searchQuery);
// });

function filterStudents(searchQuery) {
  const filteredStudent = students.filter((student) => {
    return student.name.toLowerCase().includes(searchQuery.toLowerCase());
  });
  console.log(filteredStudent);
}
// Shift +, -
// const txt = document.querySelector("#keybord");
// let fontSize = 16;
// txt.addEventListener("keydown", (event) => {
//   console.log(event);
//   if (event.key == "+" && event.shiftKey) {
//     fontSize += 2;
//     txt.style.fontSize = `${fontSize}px`;
//   }
//   if (event.key == "_" && event.shiftKey) {
//     fontSize -= 2;
//     txt.style.fontSize = `${fontSize}px`;
//   }
// });

// let color = prompt("Enter Color Name");
// window.addEventListener("load", () => {
//   document.body.style.backgroundColor = `${color}`;
// });

// function isDateValid(dateStr) {
//   return !isNaN(new Date(dateStr));
// }
// console.log(isDateValid("not a date")); // true
// console.log(isDateValid("2019/05/15")); // true
// console.log(isDateValid(new Date()));

// Element.querySelectorAll()

let allPrice = document.querySelectorAll(".prices");
let tbl = document.getElementById("table");
// console.log(allPrice.length);
// console.log(allPrice[0].innerText);
// console.log(allPrice[1].innerText);
// console.log(allPrice[2].innerText);
let sum = 0;
for (let i = 0; i < allPrice.length; i++) {
  sum += parseInt(allPrice[i].innerText);
}
// console.log(sum);
// // let row = tbl.insertRow(allPrice.length);
// let cell1 = row.insertCell(0);
// let cell2 = row.insertCell(1);
// cell1.innerText = "Total";
// cell2.innerText = sum;
// console.log(row);

// row.append(col1, col2);

// allPrice.appendChild(row);

// let row = table.insertRow(0);
// let cell1 = row.insertCell(0);
// let cell2 = row.insertCell(1);
// cell1.innerHTML = "New Cell1";
// cell2.innerHTML = "New Cell2";
// console.log(table);

function firstNonRepeatedChar(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(i) == str.lastIndexOf(i)) {
      return str.charAt(i);
    }
  }
  return null;
}
let ans = firstNonRepeatedChar("aabbcd");
console.log(ans);

// let text = "test";
// let res = text.toLowerCase().indexOf("Ple".toLowerCase());
// console.log(res);
