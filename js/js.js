
$('.slider_block').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
   arrows: false,
    autoplaySpeed: 8000,
    
    
});  

const body = document.querySelector('html');
const burgerButton = document.querySelector('.burger');
const header = document.querySelector('.header');

burgerButton.addEventListener('click', () => {
    header.classList.toggle('showMenu');
    body.scrollIntoView();

    if (header.classList.contains('showMenu')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});

const burgerIcon = document.getElementById("burger");

burgerIcon.addEventListener("click", () => {
  burgerIcon.classList.toggle("active");
});
document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".section_tab_btn");
    const tabContents = document.querySelectorAll(".examples_contenttt");
  
    tabButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Удалить класс "active" у всех кнопок
        tabButtons.forEach((btn) => btn.classList.remove("active"));
        // Удалить класс "active" у всех контентных элементов
        tabContents.forEach((content) => content.classList.remove("active"));
  
        // Добавить класс "active" только к выбранной кнопке
        button.classList.add("active");
  
        // Получить значение data-target атрибута выбранной кнопки
        const target = button.getAttribute("data-target");
  
        // Найти соответствующий контент и добавить ему класс "active"
        const matchingContent = document.getElementById(target);
        matchingContent.classList.add("active");
      });
    });
  });
  