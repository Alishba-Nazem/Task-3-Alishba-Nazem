const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {

    document.body.classList.toggle('dark-theme');

    if(document.body.classList.contains('dark-theme')){

        themeToggle.textContent = '☀️ Light Mode';

    }

    else{

        themeToggle.textContent = '🌙 Dark Mode';

    }

});

const filterButtons = document.querySelectorAll('.filter-btn');

const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach((button) => {

    button.addEventListener('click', () => {

        filterButtons.forEach((btn) => {

            btn.classList.remove('active');

        });

        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectItems.forEach((item) => {

            if(filterValue === 'all'){

                item.style.display = 'block';

            }

            else if(item.getAttribute('data-category') === filterValue){

                item.style.display = 'block';

            }

            else{

                item.style.display = 'none';

            }

        });

    });

});

const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {

    if(window.scrollY > 200){

        scrollTopBtn.style.display = 'block';

    }

    else{

        scrollTopBtn.style.display = 'none';

    }

});

scrollTopBtn.addEventListener('click', () => {

    window.scrollTo({

        top: 0,
        behavior: 'smooth'

    });

});