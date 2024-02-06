var socket = io();
let username = "";
const btn = document.getElementById("join-chat");
const chatroomContainer = document.querySelector(".chatroom-container");
const form = document.getElementById("form");
const usernameInput = document.getElementById("username-input");
const sendButton = document.getElementById("send-button");
const exitButton = document.querySelector(".exit-button");
const msgContainer = document.querySelector(".messages-container");
const msgInput = document.getElementById("message-input");
let myTime = new Date();

btn.addEventListener("click", (event) => {
  event.preventDefault();
  username = usernameInput.value;
  if (username) {
    //I need to show my chatroom and hide form
    form.style.display = "none";
    chatroomContainer.style.display = "block";
  } else {
    alert("Please Enter the user name");
  }
});

// Exit the chat room
exitButton.addEventListener("click", () => {
  form.style.display = "block";
  chatroomContainer.style.display = "none";
  form.reset();
});

sendButton.addEventListener("click", (event) => {
  event.preventDefault();
  let data = {
    id: socket.id,
    username: usernameInput.value,
    time: `${myTime.getHours()}:${myTime.getMinutes()}`,
    message: msgInput.value,
  };
  socket.emit("secret message", data);
  renderMessage(data, "SEND");
});

function renderMessage(data, messageType) {
  if (`${data.message}`.length === 0) {
    return;
  } else {
    const msgDiv = document.createElement("div");
    if (messageType === "SEND") {
      msgDiv.setAttribute("class", "message sent");
      msgDiv.innerHTML = `<span class="username">You</span>
      <span class="time">${data.time}</span>
      <p>${data.message}</p>`;
      msgContainer.append(msgDiv);
    } else if (messageType === "RECEIVED") {
      // const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      // msgDiv.style.color = "#" + randomColor;
      msgDiv.setAttribute("class", "message incoming");
      msgDiv.innerHTML = `<span class="username">${data.username}</span>
      <span class="time">${data.time}</span>
      <p>${data.message}</p>`;
      msgContainer.append(msgDiv);
    }
    msgInput.value = "";
  }
}

socket.on("io secret message", (data) => {
  // this data has socket id
  console.log(data.id);
  if (data.id !== socket.id) {
    console.log(data.id);
    renderMessage(data, "RECEIVED");
  }
});
