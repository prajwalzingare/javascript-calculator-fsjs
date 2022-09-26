string = "";
const btns = document.querySelectorAll(".button");
console.log(btns);

Array.from(btns).map((btn) => {
  btn.addEventListener("click", (x) => {
    console.log(x.target.innerHTML);

    if (x.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (x.target.innerHTML == "AC") {
      string = "";
      document.querySelector("input").value = string;
    } else if (x.target.innerHTML == "C") {
      string = string.slice(0, -1);
      document.querySelector("input").value = string;
    } else {
      string = string + x.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
