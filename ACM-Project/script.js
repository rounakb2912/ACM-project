// =========================
// HERO SCROLL ANIMATION
// =========================

const heroCar = document.getElementById("heroCar");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    heroCar.style.transform =
        `translateY(${scrollY * 0.12}px)`;
});


// =========================
// CAR CONFIGURATOR
// =========================

const configCar = document.getElementById("configCar");
const configName = document.getElementById("configName");


// Paint selection

const paintOptions = document.querySelectorAll(".option");

paintOptions.forEach((option) => {

    option.addEventListener("click", () => {

        paintOptions.forEach((item) => {
            item.classList.remove("active");
        });

        option.classList.add("active");

        const image = option.dataset.image;

        configCar.src = image;

        updateConfiguration();
    });

});


// =========================
// WHEEL SELECTION
// =========================

const wheelOptions =
    document.querySelectorAll(".wheel-option");

wheelOptions.forEach((option) => {

    option.addEventListener("click", () => {

        wheelOptions.forEach((item) => {
            item.classList.remove("active");
        });

        option.classList.add("active");

        updateConfiguration();
    });

});


// =========================
// INTERIOR SELECTION
// =========================

const interiorOptions =
    document.querySelectorAll(".interior-option");

interiorOptions.forEach((option) => {

    option.addEventListener("click", () => {

        interiorOptions.forEach((item) => {
            item.classList.remove("active");
        });

        option.classList.add("active");

        updateConfiguration();
    });

});


// =========================
// UPDATE CONFIGURATION TEXT
// =========================

function updateConfiguration() {

    const selectedPaint =
        document.querySelector(".option.active");

    const selectedInterior =
        document.querySelector(".interior-option.active");

    const paint =
        selectedPaint.textContent.trim();

    const interior =
        selectedInterior.textContent.trim();

    configName.textContent =
        `${interior} / ${paint}`;
}