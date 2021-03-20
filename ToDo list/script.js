let add = document.getElementById("add");
let title;
let desc;
var count = 0;

function reset() {
    if(confirm("do you really want to clear?"))
  {localStorage.clear();
  update();}
}

function getAndUpdate() {
  title = document.getElementById("listElement");
  desc = document.getElementById("description");
  console.log("updating list");
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    itemJsonArray.push([title.value, desc.value]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArraystr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.push([title.value, desc.value]);
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  }
  update();
}

function update() {
  if (localStorage.getItem("itemsJson") == null) {
    itemJsonArray = [];
    localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArraystr = localStorage.getItem("itemsJson");
    itemJsonArray = JSON.parse(itemJsonArraystr);
  }
  var tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += ` <tr>
    <th>${index + 1}</th>
    <td>${element[0]}</td>
    <td>${element[1]}</td>
    <td><button  class="btn deleted" onClick = "deleted(${index})">Delete</button></td>
    </tr>`;
  });
  tableBody.innerHTML = str;
}

add.addEventListener("click", getAndUpdate);
update();

function deleted(itemIndex) {
  itemJsonArraystr = localStorage.getItem("itemsJson");
  itemJsonArray = JSON.parse(itemJsonArraystr);
  itemJsonArray.splice(itemIndex, 1);
  localStorage.setItem("itemsJson", JSON.stringify(itemJsonArray));
  update();
}
