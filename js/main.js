const elem = document.querySelector(".mainList");
const secondElem = document.querySelectorAll(".link");
secondElem[1].dataset.text = "TWOOO";
console.log(secondElem[1]);


elem.addEventListener("click", event => {
    event.preventDefault();

    console.log(event.target.textContent);

    
})

elem.addEventListener("keydown", event => {

    console.log(event);

    
})


// we can use querySelectorAll, and use forEach for array
/*
const links = document.querySelectorAll(".link");

links.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    console.log(event.target.href);
  });
});
*/