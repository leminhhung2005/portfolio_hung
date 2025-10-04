/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

// Thêm JS cho phần Homework (tab filtering)
const tabs = document.querySelectorAll('.tab-item');
const cards = document.querySelectorAll('.homework-card');

if (tabs.length > 0 && cards.length > 0) {
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const tabText = tab.textContent.toLowerCase().replace(' tuần', '');
            cards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.toLowerCase();
                if (tabText === 'tất cả' || title.includes(tabText)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Thêm ScrollReveal cho phần Homework
sr.reveal('.homework-title', { delay: 200 });
sr.reveal('.tab-filters', { delay: 400 });
sr.reveal('.homework-grid', { delay: 600, interval: 200 });

// Thêm event listener cho nút "Xem" để chuyển hướng đến link OnRender đã deploy
const xemButtons = document.querySelectorAll('.xem-btn');

xemButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault(); // Ngăn hành vi mặc định nếu là <a> tag
        const link = 'https://web-servlet-9-ch07-1.onrender.com/'; // Thay thế bằng link OnRender thực tế của bạn
        window.open(link, '_blank'); // Mở tab mới, hoặc dùng window.location.href = link; để chuyển trang hiện tại
    });
});