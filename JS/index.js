const choose = document.getElementById("choose");
const categoryMenu = document.getElementById("categoryMenu");

const categories = ["category1", "category2", "category3"];
const meals = ["Potatoes", "Fries", "Fish", "Steak"];

const data = {
    Pizza: ["Pizza Margherita", "Pizza Salami", "Pizza Tonno", "Pizza Quattro Formaggi", "Pizza New York", "Pizza Manhattan"],
    Pasta: ["Spaghetti Napoli", "SPaghetti Bolognese", "Spaghetti Carbonara", "Lasagne"],
    Salads: ["Ceasar's Salad", "Chicken Salad", "Salad X"]
}

const alertMe = () => {
  alert("Yup, this is working :)");
};

choose.onclick = () => {
  for (category of categories) {
    var newListItem = document.createElement("li");
    newListItem.id = category;
    newListItem.innerHTML = category;

    categoryMenu.append(newListItem);

    newListItem.onclick = () => {
      for (meal of meals) {
        var newListItem = document.createElement("li");
        newListItem.id = meal;
        newListItem.innerHTML = meal;

        categoryMenu.append(newListItem);
      }
    };
  }
};
