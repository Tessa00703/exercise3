const choose = document.getElementById("choose");
const categoryMenu = document.getElementById("categoryMenu");

let categories = ["category1", "category2", "category3"];
let meals = ["Potatoes", "Fries", "Fish", "Steak"];

choose.onclick = () => {
  for (category of categories) {
    var newDiv = document.createElement("li");
    newDiv.setAttribute("id", category);
    var newContent = document.createTextNode(category);
    newDiv.appendChild(newContent);
    categoryMenu.append(newDiv);
    console.log("Here");
  }
};

//  form here on its testing to get the category list items

document.getElementById("category1").onclick.style.color = "blue";

for (category of categories) {
  var activeCategory = document.getElementById(category);
  activeCategory.onclick = () => {
    activeCategory.style.color = "blue";
    console.log("There");
  };
}
