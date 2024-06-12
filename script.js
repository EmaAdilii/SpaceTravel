document.addEventListener("DOMContentLoaded", () => {
    // Login and Register Form
    const loginBtn = document.querySelector("#login"); 
    const registerBtn = document.querySelector("#register"); 
    const loginForm = document.querySelector(".login-form"); 
    const registerForm = document.querySelector(".register-form"); 

    if (loginBtn && registerBtn && loginForm && registerForm) {
        loginBtn.addEventListener('click', () => { 
            loginBtn.style.backgroundColor = "#56d3a3"; 
            registerBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; 

            loginForm.style.left = "50%"; 
            registerForm.style.left = "150%"; 

            loginForm.style.opacity = 1; 
            registerForm.style.opacity = 0; 

            document.querySelector(".col-1").style.borderRadius = "0 30% 20% 0"; 
        }); 

        registerBtn.addEventListener('click', () => { 
            loginBtn.style.backgroundColor = "rgba(255, 255, 255, 0.2)"; 
            registerBtn.style.backgroundColor = "#56d3a3"; 

            loginForm.style.left = "-50%"; 
            registerForm.style.left = "50%"; 

            loginForm.style.opacity = 0; 
            registerForm.style.opacity = 1; 

            document.querySelector(".col-1").style.borderRadius = "0 20% 30% 0"; 
        }); 
    }

    // Active Header Sticky
    const header = document.querySelector("header"); 
    if (header) {
        window.addEventListener("scroll", () => { 
            header.classList.toggle("sticky", window.scrollY > 50); 
        });
    }

    // Active Scroll Menu
    const liLinks = document.querySelectorAll("header ul li a");
    const sections = document.querySelectorAll("section");

    function activeMenu() {
        let secLength = sections.length;
        while (--secLength >= 0 && window.scrollY + 50 < sections[secLength].offsetTop) {}
        liLinks.forEach(sec => sec.classList.remove("active"));
        if (secLength >= 0 && liLinks[secLength]) {
            liLinks[secLength].classList.add("active");
        }
    }

    if (liLinks.length > 0 && sections.length > 0) {
        activeMenu();
        window.addEventListener("scroll", activeMenu);
    }

    // Active Menu Icon
    const menuIcon = document.querySelector("#menu-icon");
    const navlist = document.querySelector(".navlist");

    if (menuIcon && navlist) {
        menuIcon.onclick = () => {
            menuIcon.classList.toggle("bx-x");
            navlist.classList.toggle("open");
        }

        window.addEventListener("scroll", () => {
            menuIcon.classList.remove("bx-x");
            navlist.classList.remove("open");
        });
    }
});
