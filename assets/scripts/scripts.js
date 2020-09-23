"use strict";

//Get the target element
const man = document.getElementById("man");
const wizard = document.getElementById("wizard");
const beast = document.getElementById("beast");
const toTop = document.querySelector(".to-top");

// Create element and stored in variables
const div = document.createElement("div");
const title = document.createElement("h1");
const description = document.createElement("p");

function removeElement() {
  //delete the created element after the mouse out event
  const deleteElement = document.getElementById("image_overlay");
  deleteElement.remove();
}

man.addEventListener("mouseenter", function () {
  // get data from app js / set the attrubute for div
  div.setAttribute("id", "image_overlay");
  title.innerHTML = images.man.heading;
  description.innerHTML = images.man.description;

  //Append created element
  man.appendChild(div);
  div.appendChild(title);
  div.appendChild(description);
});

man.addEventListener("mouseleave", function () {
  removeElement();
});

wizard.addEventListener("mouseenter", function () {
  // get data from app js / set the attrubute for div
  div.setAttribute("id", "image_overlay");
  title.innerHTML = images.wizard.heading;
  description.innerHTML = images.wizard.description;

  wizard.appendChild(div);
  div.appendChild(title);
  div.appendChild(description);
});

wizard.addEventListener("mouseleave", function () {
  removeElement();
});

beast.addEventListener("mouseenter", function () {
  // get data from app js / set the attrubute for div
  div.setAttribute("id", "image_overlay");
  title.innerHTML = images.beast.heading;
  description.innerHTML = images.beast.description;

  beast.appendChild(div);
  div.appendChild(title);
  div.appendChild(description);
});

beast.addEventListener("mouseleave", function () {
  removeElement();
});

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
});
