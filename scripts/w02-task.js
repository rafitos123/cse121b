/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

//week 02
let fullName = "Rafael Henrique Antunes";
let currentYear = "2023";
let profilePicture = "images/me.jpg";

/* Step 3 - Element Variables */
const nameElement = document.getElementById("name");
const foodElement = document.getElementById("food");
const yearElement = document.querySelector("#year");
const imageElement = document.querySelector("img");

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear; 
imageElement.setAttribute("src", profilePicture);
//imageElement.setAttribute("alt") = `Profile image of ${profilePicture}`;

/* Step 5 - Array */
let MyFoods = ["Pasta", "MilkShake", "grape", "Milk", "Pear"];
let anotherFood = "Orange";
MyFoods.push(anotherFood);
foodElement.innerHTML += `<br>${MyFoods}`;
MyFoods.shift();
foodElement.innerHTML += `<br>${MyFoods}`;
MyFoods.pop();
foodElement.innerHTML += `<br>${MyFoods}`;






