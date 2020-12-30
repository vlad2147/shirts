(function () {   //Делаем так чтобы этот скриптт не знал переменные других скриптов этого сайта

const openingBtn = document.querySelector(".sidebar__hamburger"); //Задаем переменные
const closingBtn = document.querySelector(".sidebar__close"); //Задаем переменные
const sidebar = document.querySelector(".sidebar"); //Задаем переменные



openingBtn.addEventListener("click", function() { //Если при наведении произойдет клик 
	sidebar.classList.add('sidebar--opened');       // то  добавиться класс
});

closingBtn.addEventListener("click", function() {
	sidebar.classList.remove("sidebar--opened");
});

}());
