document.addEventListener("DOMContentLoaded", () => {
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
    } else {
        console.error('One or more elements are not found:', {
            loginBtn,
            registerBtn,
            loginForm,
            registerForm
        });
    }

    // Active header sticky
    const header = document.querySelector("header");
    if (header) {
        window.addEventListener("scroll", () => {
            header.classList.toggle("sticky", window.scrollY > 50);
        });
    } else {
        console.error('Header element not found.');
    }
});
