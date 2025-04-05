const elem = document.querySelector(".mainList");

console.log(elem);

elem.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(event.target.classList.toggle("itsWork"));
    
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