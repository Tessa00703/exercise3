const search = document.getElementById("search");

const meals = {
  pizzamargherita: "./pizzamargherita.html",
  pizzasalami: ".pizzamargherita.html",
  pizzatonno: "./pizzatonno.html",
  pizzahawaii: "./pizzahawaii.html",
  pizzanewyork: "./pizzanewyork.html",
  spaghettinapoli: "./spaghettinapoli.html",
  lasagnabolognese: "./lasagnabolognese.html",
  tagliatellespinachmushrooms: "./tagliatellesm.html",
  sweetleekcarbonara: "./sweetleekcarbonara.html",
  dannydevitospasta: "./dannydevitospasta.html",
  horiatikisalad: "./horiatikisalad.html",
  waldorfsalad: "./waldorfsalad.html",
  chickensalad: "./chickensalad.html",
  bananapuddingpie: "./bananapuddingpie.html",
  carrotcake: "./carrotcake.html",
  applepie: "./applepie.html",
  lemonbuttercake: "./lemonbuttercake.html"
};

console.log(search);
search.onkeyup = event => {
  if (event.keyCode === 13) {
    try {
      let meal = search.value;
      let searchItem = meal.toLowerCase().replace(" ", "");
      console.log(searchItem);
      console.log(meals[searchItem]);
      console.log(meals[searchItem].url);
      document.location = meals[searchItem];
    } catch (err) {
      alert("Oooops, the meal you are looking for doesn't exist!");
    }
  }
};
