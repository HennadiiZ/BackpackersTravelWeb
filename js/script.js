        
        
        const header__burger = document.querySelector('.header__burger'),
              header__menu = document.querySelector('.header__menu');

        const header__menu_locations = document.querySelector('._locations'),
              header__menu_benefits = document.querySelector('._benefits'),
              header__menu_contact = document.querySelector('._contact');

        function burger(){
            header__burger.classList.toggle('active'); 
            header__menu.classList.toggle('active'); 
            document.body.classList.toggle('lock');
        };

        header__burger.addEventListener('click', ()=> burger());

        header__menu_locations.addEventListener('click', ()=> burger());
        header__menu_benefits.addEventListener('click', ()=> burger());
        header__menu_contact.addEventListener('click', ()=> burger());