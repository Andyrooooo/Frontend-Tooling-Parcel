spinbtn = document.querySelector(".spinbtn")
squarey = document.querySelector(".squarey")
bigbtn = document.querySelector(".bigbtn")
smallbtn = document.querySelector(".smallbtn")
squishbtn = document.querySelector(".squishbtn")


const spinSquarey = function () {
    squarey.classList.toggle('spin')
}

const bigSquarey = function () {
    squarey.classList.toggle('big')
}

const smallSquarey = function () {
    squarey.classList.toggle('small')
}

const squishSquarey = function () {
    squarey.classList.toggle('squish')
}

spinbtn.addEventListener('click', spinSquarey)

bigbtn.addEventListener('click', bigSquarey)

smallbtn.addEventListener('click', smallSquarey)

squishbtn.addEventListener('click', squishSquarey)