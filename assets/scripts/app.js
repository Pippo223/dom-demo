const btn1 = document.querySelector("#addBtn")
const modal1 = document.getElementById("add-modal")
const backdrop = document.getElementById("backdrop")
const add = document.querySelector(".btn--success")
const cancel = document.querySelector(".btn--passive")
const movieArray = []
const section = document.getElementById("entry-text")

btn1.addEventListener("click", () => {
    
    modal1.style.display = "block"
    displayBackdrop()
}) 

function displayBackdrop() {
    if (modal1.style.display === "block")
    backdrop.style.display = "block"
}

cancel.addEventListener("click", () => {

    clearInput()
    backdrop.style.display = "none"
    modal1.style.display = "none"

})

 function backdropOff(){

    if( backdrop.style.display === "block")
       { 
        clearInput()
           backdrop.style.display = "none"
            modal1.style.display = "none"

        }
}

add.addEventListener ("click", () => {

    const title1 = document.getElementById("title").value
    const imageURL1 = document.getElementById("image-url").value
    const rating1 = document.getElementById("rating").value

    if (title1.trim()==="" || imageURL1.trim()==="" || rating1.trim()==="" || rating1 < 1 || rating1 > 5)
    {
        alert("Enter valid values")
        return false;
    }

    else {
        
            let movie = {
                title:title1,
                imageURL:imageURL1,
                rating:rating1
            }
            let store = storeMovie(movie)
            console.log(store);
            toggleSection()
            appendMovie(movie.title)
            clearInput()
            alert("Movie Added Successfully") 
            backdrop.style.display = "none"
            modal1.style.display = "none"
    }

})

function storeMovie(movie) {
    movieArray.push(movie)
    return movieArray
}

function clearInput() {
    document.getElementById("title").value = null
    document.getElementById("image-url").value = null
    document.getElementById("rating").value = null
}

function appendMovie(movie) {
    const ul = document.getElementById("movie-list")
    const newLi = document.createElement('li')
    newLi.style.paddingBottom="0.5rem"
    newLi.innerHTML = movie
    
    ul.appendChild(newLi)
}

 function toggleSection() {
    if (movieArray[0]!=null)
    {
        section.style.display = "none"
    } 
    else {
        section.style.display = "block"
    }
}

window.onload = toggleSection()


 