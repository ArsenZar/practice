const elem = document.querySelector(".mainList");
const secondElem = document.querySelectorAll(".link");
secondElem[1].dataset.text = "TWOOO";
console.log(secondElem[1]);


elem.addEventListener("click", event => {
    event.preventDefault();

    console.log(event);

});

elem.addEventListener("keydown", event => {

    console.log(event);

});

const instance = basicLightbox.create(`
	<h1>Not closable</h1>
	<p>It's not possible to close this lightbox with a click.</p>
`, {
    closable: false
});

console.log(instance);



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