const change = document.querySelector(".text3");
let call;
let typeSpeed = 150;
let removeSpeed = 150;
let id = 0;
const words = [
    "mind",
    "body",
    "spirit",
];
let charCount = 0;
const pauseTime = 5;
let time = setInterval(type, typeSpeed);
const output = document.getElementById("output"); // Assuming you have an element with id "output"

function type() {
    call = words[id].substring(0, charCount);

    if (charCount >= words[id].length + pauseTime) {
        clearInterval(time);
        charCount = 1;
        time = setInterval(remove, removeSpeed);
    }
    output.innerHTML = call;
    charCount++;
}

function remove() {
    call = words[id].substring(0, words[id].length - charCount);
    if (call.length <= 0) {
        if (id >= words.length - 1) {
            id = 0;
        } else {
            id++;
        }
        clearInterval(time);
        charCount = 0;

        time = setInterval(type, typeSpeed);
    }
    output.innerHTML = call;
    charCount++;
}
let loginBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('#login-form');
let formClose = document.querySelector('#form-close');

loginBtn.addEventListener('click', () => {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', () => {
    loginForm.classList.remove('active');
});


let menuBtn= document.querySelector('#menu-bar');
let navList= document.querySelector('.navbar');

menuBtn.addEventListener('click',()=>{
    menuBtn.classList.toggle('fa-times');
    navList.classList.toggle('active');
});




function toggleForm() {
    const userTypeSelect = document.getElementById("user_type");
    const registrationForm = document.getElementById("registrationForm");
    const experienceField = document.getElementById("experienceField");
    const certificationField = document.getElementById("certificationField");
    const genderField = document.getElementById("genderField");
    const ageField = document.getElementById("ageField");
    const contactField = document.getElementById("contactField");

    if (userTypeSelect.value === "trainer") {
        experienceField.style.display = "block";
        certificationField.style.display = "block";
        genderField.style.display = "block";
        ageField.style.display = "block";
        contactField.style.display = "block";
    } else if (userTypeSelect.value === "trainee") {
        experienceField.style.display = "none";
        certificationField.style.display = "none";
        genderField.style.display = "block";
        ageField.style.display = "block";
        contactField.style.display = "block";
    } else {
        experienceField.style.display = "none";
        certificationField.style.display = "none";
        genderField.style.display = "none";
        ageField.style.display = "block";
        contactField.style.display = "block";
    }
}