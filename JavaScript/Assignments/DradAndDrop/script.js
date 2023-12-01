const box = document.getElementById("box");
const box1 = document.getElementById("box1");
const container = document.getElementById("container");

// drag event
box.addEventListener("dragstart", () => {
  console.log("drag starting");
});
box.addEventListener("dragend", () => {
  console.log("drag end");
});

// drag container event
/*
1.dragenter
2.dragover
3.dragleave
*/

container.addEventListener("dragenter", () => {
  container.className = "focus";
  console.log("drag enterd");
});
container.addEventListener("dragover", (event) => {
  event.preventDefault();
});
container.addEventListener("dragleave", () => {
  container.className = "";
  console.log("drag leave");
});

container.addEventListener("drop", () => {
  container.className = "";
  container.appendChild(box);
  console.log("drop some item");
});
