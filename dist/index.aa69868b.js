/* ------------------------------------------- button toggle for second list ---------------------------------------------------- */ const agent = document.querySelector(".arrow");
const secondList = document.querySelector(".secondList");
const openSecond = function() {
    secondList.classList.toggle("hidden");
};
agent.addEventListener("click", openSecond);
/* ------------------------------------------- button toggle for hamburger menu in mobile and tablet ---------------------------------------------------- */ const list = document.querySelector(".list");
const x = document.querySelector(".x");
const hamburger = document.querySelector(".hamburger");
const hamButton = document.querySelector("#hamburgerMenu");
const openList = function() {
    // remove the 'hidden' class from the HTML divider and you will see the list
    list.classList.toggle("hidden");
    x.classList.toggle("hidden");
    hamburger.classList.toggle("hidden");
};
hamButton.addEventListener("click", openList);
/* -------------------------------------------- image slider ---------------------------------------------------------------------------------------------- */ new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    speed: 2000,
    loop: true,
    autoplay: {
        delay: 5000
    },
    // If we need pagination
    pagination: {
        el: ".swiper-pagination"
    }
});

//# sourceMappingURL=index.aa69868b.js.map
