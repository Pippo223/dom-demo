const addMovieBtn = document.querySelector("#addBtn")
const modal1 = document.getElementById("add-modal")
const backdrop = document.getElementById("backdrop")
const addMovie = document.querySelector(".btn--success")
const cancel = document.querySelector(".btn--passive")
const movieArray = []
const section = document.getElementById("entry-text")

function OpenModal() {
    modal1.style.display = "block"
    displayBackdrop()
} 

function displayBackdrop() {
    if (modal1.style.display === "block")
    backdrop.style.display = "block"
}

function cancelMovies() {
    backdrop.style.display = "none"
    modal1.style.display = "none"
}


 function modalAndBackdropOff() {

    if( backdrop.style.display === "block")
       { 
           backdrop.style.display = "none"
            modal1.style.display = "none"
        }
}

function addMovies() {
    const title1 = document.getElementById("title").value
    const imageURL1 = document.getElementById("image-url").value
    const rating1 = document.getElementById("rating").value

    if (title1.trim()==="" || imageURL1.trim()==="" || rating1.trim()==="" || rating1 < 1 || rating1 > 5)
    {
        alert("Enter valid values")
        return;
    }
        
            let movie = {
                title:title1,
                imageURL:imageURL1,
                rating:rating1
            }

            console.log(storeMovie(movie));
            toggleSection()
            appendMovie(movie.title)
            clearInput()
            modalAndBackdropOff()   
}



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
addMovieBtn.addEventListener("click",OpenModal)
cancel.addEventListener("click", cancelMovies)
addMovie.addEventListener ("click", addMovies)


 