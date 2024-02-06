const test = document.getElementById("test");
const request = new XMLHttpRequest();
console.log(request);
request.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    const user = JSON.parse(this.responseText);
    let userHtml = "";
    user.forEach(({ thumbnailUrl }) => {
        userHtml = userHtml + `<img src="${thumbnailUrl}"></img>`;
        console.log(userHtml);
    });
    test.innerHTML = userHtml;
  }
};
request.open("GET", "https://jsonplaceholder.typicode.com/photos");
request.send();
