document.addEventListener('DOMContentLoaded', function() {
    var menuToggle = document.getElementById('toggle-menu');
    menuToggle.addEventListener('click', function() {
        var menu = document.getElementById('menu');
        var logo = document.getElementById('logo');
        var link = document.getElementById('link');

        if (menu.style.display === 'flex') {
            menu.style.display = 'none';
        
        } else {
            menu.style.display = 'flex';
           
        }
    });
});


let currentSlide = 0;
const slides = document.querySelectorAll(".slides div");

function showSlide(index) {
  // Скрыть текущий слайд
  slides[currentSlide].style.display = "none";
  currentSlide = (index + slides.length) % slides.length;
  
  // Показать новый слайд
  slides[currentSlide].style.display = "block";
}

function changeSlide(direction) {
  showSlide(currentSlide + direction);
}

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide); 
});


const accButtons = document.querySelectorAll('.accordion-button');
function toggleAccordion() {
    this.classList.toggle('active');
  
    const content = this.nextElementSibling;
  
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  }
  
  accButtons.forEach(button => button.addEventListener('click', toggleAccordion));




  
const filterButtons = document.querySelectorAll('.filter-button');

const filterItems = document.querySelectorAll('.filter-item');

// Функция фильтрации
function filterItemsByCategory() {
    const filter = this.getAttribute('data-filter'); 
    filterItems.forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
}

filterButtons.forEach(button => button.addEventListener('click', filterItemsByCategory));


function openTab(evt, tabName) {
    var tabContent, tabButtons;
    tabContent = document.getElementsByClassName("tab-content");
    for (var i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabButtons = document.getElementsByClassName("tab-button");
    for (var i = 0; i < tabButtons.length; i++) {
        tabButtons[i].className = tabButtons[i].className.replace(" active-tab-button", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active-tab-button";
}

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("defaultOpen").click();
});





//модальное окно
var modal = document.getElementById('myModal');

var btn = document.getElementById('modalBtn');

var span = document.getElementsByClassName('close')[0];

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

  