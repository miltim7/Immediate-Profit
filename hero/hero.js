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
    const counterBtns = document.querySelectorAll(".remaining-counter");
    counterBtns.forEach(btn => {
        btn.innerText = remainingPlaces + " places left";
    });
});
