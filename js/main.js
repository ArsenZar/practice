const elem = document.querySelector(".mainList");

elem.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(event.target.getAttribute("data-text"));

    
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