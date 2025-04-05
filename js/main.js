const elem = document.querySelector(".link");

console.log(elem);

elem.addEventListener("click", (event) => {
    event.preventDefault();

    console.log(event.target.href);
})