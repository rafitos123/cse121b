/* W05: Programming Tasks */


/* Declare and initialize global variables */
const templesElements = document.querySelector("#temples");
let templeList = [];

/* async displayTemples Function */
function displayTemples(templeList){

    let article = document.createElement('article')
    templesElements.appendChild(article);

    templeList.forEach(temple => {
    let h3 = document.createElement("h3");
    h3.textContent = temple.templeName;


  
    const image = document.createElement('img');
    image.src = `${temple.imageUrl}`;
    image.alt = `${temple.templeName}`;
 
    
    article.appendChild(image);
    article.appendChild(h3);
    })


}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json")
    templeList = await response.json();
    displayTemples(templeList);
    console.log(templeList);
}

getTemples()




/* reset Function */
function reset(){
document.querySelector('article').textContent = '';
}



/* sortBy Function */
const sortBy = function (temples) {
reset();
let sort = document.querySelector('#sortBy');
let value = sort.value;
switch(value){
    case 'utah':
     let search = templeList.filter((temples) => {
     return temples.location.includes('Utah')
     })
     displayTemples(search)
     console.log(search);
    break;
    case 'notutah':
     let search2 = templeList.filter((temples) => {
     return !temples.location.includes('Utah')
     })
     displayTemples(search2)
     console.log(search2);
     break;
    case 'older':
    let search3 = templeList.filter((temples) => {
    let text = temples.dedicated;
    let newData = text.substr(0, 3)
    let x = parseInt(newData);
    return temples.dedicated
     })
     displayTemples(search3)
     console.log(search3);
     break;
    case 'all': 
    displayTemples(temples)


}
}



/* Event Listener */
document.querySelector('#sortBy').addEventListener("change", () => { sortBy(templeList)})


