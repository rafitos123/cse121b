/* LESSON 3 - Programming Tasks */

/* Profile Object  */


let myProfile = {
    name: "Rafael Henrique Antunes",
    favoritFodd: [
        "Soup","orange","grape","milk"
    ],
    hobbies: [
        "paint", "play videogame","movies"
    ],
    placeslived: []
    
};
let photo = "images/me.jpg";



/* Populate Profile Object with placesLive objects */

myProfile.placeslived.push(
    {
        place: "Curitiba, PR",
        length: "2 years"
    },   
    {
        place: "Mogi Mirim, SP",
        length: "20 years"
    }   
    );

/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;
/* Photo with attributes */
const imageElement = document.querySelector("#photo");
imageElement.setAttribute("src", photo);
imageElement.setAttribute("alt", photo);

/* Favorite Foods List*/
myProfile.favoritFodd.forEach(food => {
    let li = document.createElement("li");
    li.textContent = food;
    document.querySelector("#favorite-foods").appendChild(li);
})
/* Hobbies List */
myProfile.hobbies.forEach(hobbie => {
    let li = document.createElement("li");
    li.textContent = hobbie;
    document.querySelector("#hobbies").appendChild(li);
})
/* Places Lived DataList */
myProfile.placeslived.forEach(place,length => {
    let dt = document.createElement("dt");
    dt.textContent = place;
    let dd = document.createElement("dd");
    dd.textContent = length;
    let dl = document.createElement("dl");
    dl.textContent = document.querySelector("#places-lived").appendChild(dt,dd);
})


