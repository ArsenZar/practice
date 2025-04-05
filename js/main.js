const elem = document.querySelector(".mainList");
const secondElem = document.querySelectorAll(".link");
console.log(secondElem[1]);


elem.addEventListener("click", event => {
    event.preventDefault();

    console.log(event);

    if (event.target.dataset.text === "two") {
      instance.show();  
    }else{
        instance.close();  
    };

});

elem.addEventListener("keydown", event => {

    console.log(event);

});

const instance = basicLightbox.create(`
    <img src="https://ireland.apollo.olxcdn.com/v1/files/tqlxwjrycp5t2-UA/image;s=1440x960" alt="Description">
`, {
    className: "myCustomClass"
});






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