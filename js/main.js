'use strict';

const elem = document.querySelector(".mainList");
const secondElem = document.querySelectorAll(".link");
console.log(secondElem[1]);




elem.addEventListener("click", function (event) {
	event.preventDefault();

	if (event.target.nodeName !== "A") {
		return;
	}

	basicLightbox.create(`
		<img width="1400" height="900" src="https://ireland.apollo.olxcdn.com/v1/files/tqlxwjrycp5t2-UA/image;s=1440x960">
	`).show();
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