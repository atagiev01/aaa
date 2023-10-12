

// const cars = [
//     { brand: "Mitsubishi", model: "Lancer Evo", year: 2010 },
//     { brand: "Ford", model: "Mustang", year: 2022 },
//     { brand: "Toyota", model: "Mark II", year: 2021 },
//     { brand: "Chevrolet", model: "Camaro", year: 1970 },
// ];

// function displayCars(carList) {
//     const carListDiv = document.getElementById("carList");
//     carListDiv.innerHTML = ""; 

//     carList.forEach((car) => {
//         const carCard = document.createElement("div");
//         carCard.classList.add("card");
//         carCard.innerHTML = `
//             <h2>${car.brand}</h2>
//             <p>Model: ${car.model}</p>
//             <p>Il: ${car.year}</p>
//         `;
//         carListDiv.appendChild(carCard);
//     });
// }

// function sortCars() {
//     const sortedCars = cars.slice().sort((a, b) => a.year - b.year);
//     displayCars(sortedCars);
// }

// displayCars(cars);





// const searchInput = document.getElementById("searchInput");
// searchInput.addEventListener("input", filterCars);


// function filterByProperty(array, property, searchTerm) {
//     return array.filter(item => {
//         if (typeof item[property] === 'string') {
//             return item[property].toLowerCase().includes(searchTerm);
//         } else if (typeof item[property] === 'number') {
//             return item[property].toString().toLowerCase().includes(searchTerm);
//         }
//     });
// }

// function filterCars() {
//     const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();

//     if (!searchTerm) {
//         displayCars(cars);
//         return;
//     }

//     const filteredCars = [];
//     const propertiesToSearch = ["brand", "model","year"]; 

//     for (const property of propertiesToSearch) {
//         const filteredByProperty = filterByProperty(cars, property, searchTerm);
//         filteredCars.push(...filteredByProperty);
//     }

//     displayCars(filteredCars);
// }

// displayCars(cars);

// document.getElementById("searchInput").addEventListener("input", filterCars);







// const slider = document.querySelector('.slider');
// const slides = document.querySelector('.slides');
// const slideWidth = slider.clientWidth;
// let currentİ = 0;

// function animateSlide(İ) {
//     const offset = -İ * slideWidth;
//     slides.style.transform = `translateX(${offset}px)`;
//     currentİ = İ;
// }

// function nextSlide() {
//     if (currentİ < slides.children.length - 1) {
//         animateSlide(currentİ + 1);
//     }
// }

// function previousSlide() {
//     if (currentİ > 0) {
//         animateSlide(currentİ - 1);
//     }
// }

// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');

// prevButton.addEventListener('click', previousSlide);
// nextButton.addEventListener('click', nextSlide);


// // Renk seçenekleri
// const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'cyan', 'teal', 'magenta', 'lime', 'gray'];

// function getRandomColor() {
//     const randomIndex = Math.floor(Math.random() * colors.length);
//     return colors[randomIndex];
// }

// // Slaytların arka plan renklerini rastgele ayarla
// const slideElements = document.querySelectorAll('.slide');

// slideElements.forEach(slide => {
//     slide.style.backgroundColor = getRandomColor();
// });



const slider = document.querySelector('.slider');
const slides = document.querySelector('.slides');
let currentIndex = 0;

function animateToSlide(index) {
    const offset = -index * slider.clientWidth;
    slides.style.transform = `translateX(${offset}px)`;
    currentIndex = index;
    slides.children[currentIndex].style.backgroundColor = getRandomColor();
}

function nextSlide() {
    if (currentIndex < slides.children.length - 1) {
        animateToSlide(currentIndex + 1);
    }
}

function previousSlide() {
    if (currentIndex > 0) {
        animateToSlide(currentIndex - 1);
    }
}

// Renk seçenekleri
const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'purple', 'pink', 'brown', 'cyan', 'teal', 'magenta', 'lime', 'gray'];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// İlk slaytın arka plan rengini rastgele ayarla
slides.children[currentIndex].style.backgroundColor = getRandomColor();

function handleScroll(event) {
    if (event.deltaY > 0) {
        nextSlide();
    } else if (event.deltaY < 0) {
        previousSlide();
    }
}

// Scroll işlemi dinleme
slider.addEventListener('wheel', handleScroll);
