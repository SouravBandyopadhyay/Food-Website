import navbar from "./navbar.js";
let navv = document.getElementById("navbar");
navv.innerHTML = navbar();

let bag = Boolean(localStorage.getItem("bool")) || false;
if (bag === false) {
  alert("Your are not loggedin");
  window.location.href = "signup.html";
}
//random
let random = document.getElementById("random");
random.addEventListener("click", (el) => {
  document.getElementById("l1").innerHTML = "";
  document.getElementById("head").innerHTML = "";
  fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((res) => res.json())
    .then((data) => {
      // console.log(data))
      cards.innerHTML = data.meals.map(
        (meal) =>
          `<div class = '1meal'>
                <h1>${meal.strMeal}</h1>
                <img src = "${meal.strMealThumb}">
                <div class="details">
                    <p>Name:${meal.strCategory}<p>
                    <p>Area:${meal.strArea}<p>
                    <p>FoodID:${meal.idMeal}<p>
                </div>
                <div class="des">
                    <p>${meal.strInstructions}<p>
                </div>
            </div>`
      );
    });
});

let cards = document.getElementById("meal");
let search = document.getElementById("search");
search.addEventListener("click", (el) => {
    document.getElementById("l1").innerHTML = "";
    document.getElementById("head").innerHTML = "";
  let term = document.getElementById("bar").value;
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        // -> console data of array
        if (data.meals === null) {
          alert("Oops Not Found");
        } else {
          cards.innerHTML = data.meals.map(
            (meal) =>
              `<div class = 'meals'>
                <img src = "${meal.strMealThumb}">
                <div class="details">
                <p>Name:${meal.strMeal}<p>
                <p>Category:${meal.strCategory}<p>
                <p>Area:${meal.strArea}<p>
                <p>FoodID:${meal.idMeal}<p>
                </div>
                </div>`
          );
        }
      });
  }
});
