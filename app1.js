const addBtn = document.getElementById("add");
const delBtn = document.getElementById("del");
const formBox = document.getElementById("textInput");
// const taskArea = document.getElementById("tasks");

// ADD e basınca
addBtn.addEventListener("click", () => {
  const taskDiv = document.querySelector(".tasks");

  let task = document.createElement("div");
  task.className = "task";
  task.innerHTML = `
    
    <p>
    
    ${formBox.value}
    </p>
    
    <div class=buttons>
    
    <i  class="remov fa-regular xBtn fa-circle-xmark"></i>
    </div>
        
    `;

  if (!formBox.value) {
    alert("Giriş Yapmalısın");
  } else {
    taskDiv.appendChild(task);
  }

  formBox.value = "";

  // const delItem = document.querySelectorAll(".xBtn");
  // xBtn.forEach((x) => {
  //   x.addEventListener("click", () => {
  //     x.parentElement.classList.add("d-none")
  // });
});

// DELETE e basınca

delBtn.addEventListener("click", () => {
  if (
    document
      .querySelector(".container")
      .nextElementSibling.classList.contains("tasks")
  ) {
    let tasks = document.querySelector(".tasks");
    tasks.remove();
  } else {
    alert("There is no one to erased!");
  }
});

const todoArea = document.querySelector(".tasks");

todoArea.addEventListener("click", (e) => {
  if (e.target.className === "remov fa-regular xBtn fa-circle-xmark") {
    e.target.parentElement.parentElement.remove();
  }
});

// todoArea.addEventListener("click", (e) => {
//   if (e.target.className === "done fa-regular fa-circle-check") {
//     e.target.parentElement.nextSibling;

//   }
// });
