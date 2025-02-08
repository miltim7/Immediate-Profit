document.addEventListener("DOMContentLoaded", () => {
    const defaultPlaces = 43; 
    let remainingPlaces = parseInt(localStorage.getItem("remainingPlaces"));
    if (isNaN(remainingPlaces)) {
        remainingPlaces = defaultPlaces;
    }
    if (remainingPlaces <= 1) {
        remainingPlaces = defaultPlaces;
    } else {
        remainingPlaces--;
    }
    localStorage.setItem("remainingPlaces", remainingPlaces);
    const counterBtn = document.querySelector(".remaining-counter");
    if (counterBtn) {
        counterBtn.innerText = "Осталось " + remainingPlaces + " мест";
    }
});
