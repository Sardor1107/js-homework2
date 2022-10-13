let btnone = document.querySelector(".box__btn1");
let btntwo = document.querySelector(".box__btn2");
let btnthree = document.querySelector(".box__btn3");
let img1 = document.querySelector(".imghtml");
let img2 = document.querySelector(".imgcss");
let img3 = document.querySelector(".imgjs");
btnone.addEventListener("click", function() {
    alert("HTML");
    console.log(prompt("HTML kengaytmasi qandiy yoziladi"));
    console.log(prompt("1ta saytda h1 ni necha marotaba yozish mumkin"));
    console.log(prompt("inputning ichiga required deb yozsak nima vazifani bajaradi"));
    img1.classList.add("open");
    img3.classList.remove("openjs");
    img2.classList.remove("opencss");
})
btntwo.addEventListener("click", function() {
    alert("CSS");
    console.log(prompt("letter-spacing nima vazifani bajaradi"));
    console.log(prompt("pseudo elementlariga nimalar kiradi"));
    console.log(prompt("width bilan max-widthni nima farqi"));
    img1.classList.remove("open");
    img3.classList.remove("openjs");
    img2.classList.add("opencss");
})
btnthree.addEventListener("click", function() {
    alert("JAVASCRIPT");
    console.log(prompt("javascriptda qanaqa o'zgaruvchilarni bilasiz"));
    console.log(prompt("var bilan letni qanaqa farqlari bor"));
    console.log(prompt("javascriptda block nima"));
    console.log(prompt("letni reassign qilsak bo'ladimi"));
    img2.classList.remove("opencss");
    img3.classList.add("openjs");
    img1.classList.remove("open");
})
