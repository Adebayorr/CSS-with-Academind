let packageBtn = document.querySelectorAll(".package-btn");
let yesBtn = document.querySelector( "#yes");
let noBtn = document.querySelector("#no");
let hamburger = document.querySelector('.hamburger')
let modal = document.querySelector(".modal")
let mobileNav = document.querySelector(".navlinks")

// console.log(packageBtn, noBtn, hamburger)

let showModal = function () {
    modal.style.display = "block"
}

let removeModal = function () {
    modal.style.display = "none"
}

let i = 0
do {
    packageBtn.addEventlistener('onClick', showModal)
    i++

} while (i <= packageBtn.length)



