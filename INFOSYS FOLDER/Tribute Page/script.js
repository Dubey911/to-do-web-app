// Welcome Message
window.onload = function () {
    alert("Welcome! This tribute page is dedicated to Mahatma Gandhi.");
};

// ------------------ Dark Mode ------------------
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeBtn.innerHTML = "☀ Light Mode";
    } else {
        themeBtn.innerHTML = "🌙 Dark Mode";
    }
});

// ------------------ Quote Changer ------------------
const quotes = [
    "Be the change that you wish to see in the world.",
    "An eye for an eye makes the whole world blind.",
    "The best way to find yourself is to lose yourself in the service of others.",
    "Strength does not come from physical capacity. It comes from an indomitable will.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever."
];

const quoteBtn = document.getElementById("quoteBtn");
const quoteBox = document.getElementById("quoteBox");

quoteBtn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    quoteBox.innerHTML = '"' + quotes[random] + '"';
});

// ------------------ Scroll to Top ------------------
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
