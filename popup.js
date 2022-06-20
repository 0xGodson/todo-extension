function addUIItem(txt) {
    txt = txt.replaceAll('<','&lt;').replaceAll('>','&gt;')
    let li = document.createElement("li");
    li.innerHTML = txt;
    list.insertBefore(li, list.childNodes[0]);
    const delBtn = document.createElement("button");
    delBtn.textContent = "x";
    delBtn.classList.add("fas", "fa-trash-alt");
    li.appendChild(delBtn);
    delBtn.addEventListener("click", (e) => {
      li.parentNode.removeChild(li);
      savedTasks = savedTasks.filter((e) => e !== txt);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
    });
  }
  let input = document.querySelector("#todo");
  let btn = document.querySelector("#btn");
  let list = document.querySelector("#list");

  let savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(addUIItem);
  
  btn.addEventListener("click", () => {
    let txt = input.value;
    if (txt === "") {
      alert("Please write something to do!");
    } else {
      savedTasks.push(txt);
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
      input.value = "";
      addUIItem(txt);
    }
  });
  
  list.addEventListener("click", (e) => {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
    }
  });
  