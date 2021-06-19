let index = document.getElementById("index");

let typewriter = new Typewriter(index, {
  loop: true,
  cursor: " -/-",
});

typewriter
  .typeString("ПОЧЕМУ")
  .pauseFor(5000)
  .deleteAll()
  .typeString("КАКОГО ЧЁРТА")
  .pauseFor(5000)
  .deleteAll()
  .typeString("ИЗ-ЗА ЧЕГО")
  .pauseFor(5000)
  .deleteAll()
  .typeString("С КАКИХ ХЕРОВ")
  .pauseFor(5000)
  .deleteAll()
  .typeString("РАДИ ЧЕГО")
  .pauseFor(5000)
  .deleteAll()
  .typeString("С КАКОЙ СТАТИ")
  .pauseFor(5000)
  .deleteAll()
  .typeString("С ХРЕНА ЛИ")
  .pauseFor(5000)
  .deleteAll()

  .start();

let buttons = document.querySelectorAll("button");
let elements = document.querySelectorAll(".col");
console.log(elements);

if (buttons != 0) {
  buttons.forEach(function (item) {
    item.addEventListener("click", function (event) {
      let active = document.querySelector(".js-active-button");
      active.classList.remove("js-active-button");
      item.classList.add("js-active-button");
      
    });
    
    let type = item.dataset.type;
    item.addEventListener("click", function (event) {
      if (type == "life") {
        elements.forEach(function (item) {
          if (item.classList.contains("life")) {
            item.classList.remove("js-display-none");
          } else {
            item.classList.add("js-display-none");
          }
        });
      }

      if (type == "culture") {
        elements.forEach(function (item) {
          if (item.classList.contains("culture")) {
            item.classList.remove("js-display-none");
          } else {
            item.classList.add("js-display-none");
          }
        });
      }

      if (type == "love") {
        elements.forEach(function (item) {
          if (item.classList.contains("love")) {
            item.classList.remove("js-display-none");
          } else {
            item.classList.add("js-display-none");
          }
        });
      }

      if (type == "All") {
        elements.forEach(function(item) {
            item.classList.remove('js-display-none')
        });
      }
    });
  });
}