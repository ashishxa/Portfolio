/* =========================
   MOBILE MENU
========================= */

const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

if (navClose && navMenu) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}

document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu) {
            navMenu.classList.remove("show-menu");
        }
    });
});


/* =========================
   DARK / LIGHT MODE
========================= */

const themeBtn = document.getElementById("theme-btn");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {
    document.body.classList.add("light-theme");

    if (themeBtn) {
        themeBtn.innerHTML =
            '<i class="ri-sun-line"></i>';
    }
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        const isLight =
            document.body.classList.contains("light-theme");

        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );

        themeBtn.innerHTML = isLight
            ? '<i class="ri-sun-line"></i>'
            : '<i class="ri-moon-line"></i>';

    });
}


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");

function activeSection() {

    const scrollY = window.scrollY;

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        const sectionId =
            section.getAttribute("id");

        if (
            scrollY >= sectionTop &&
            scrollY < sectionTop + sectionHeight
        ) {

            navLinks.forEach(link => {
                link.classList.remove("active-link");
            });

            const active =
                document.querySelector(
                    `.nav-link[href="#${sectionId}"]`
                );

            if (active) {
                active.classList.add("active-link");
            }
        }
    });
}

window.addEventListener("scroll", activeSection);


/* =========================
   SCROLL TOP
========================= */

const scrollTop =
    document.getElementById("scroll-top");

if (scrollTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY >= 500) {
            scrollTop.classList.add("show-scroll");
        } else {
            scrollTop.classList.remove("show-scroll");
        }

    });
}


/* =========================
   CURRENT YEAR
========================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {
    yearElement.textContent =
        new Date().getFullYear();
}


/* =========================
   EMAILJS CONFIGURATION
========================= */

const EMAILJS_PUBLIC_KEY =
    "asdd89qjRDV5U8Xxe";

const EMAILJS_SERVICE_ID =
    "service_ak24dem";

const EMAILJS_TEMPLATE_ID =
    "template_wqtprqv";


/* =========================
   INITIALIZE EMAILJS
========================= */

if (typeof emailjs !== "undefined") {

    emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
    });

    console.log("EmailJS initialized successfully.");

} else {

    console.error(
        "EmailJS library is not loaded."
    );
}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contact-form");

const formMessage =
    document.getElementById("form-message");

const submitBtn =
    document.getElementById("submit-btn");


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        async (event) => {

            event.preventDefault();


            /* -------------------------
               CHECK EMAILJS
            ------------------------- */

            if (typeof emailjs === "undefined") {

                if (formMessage) {

                    formMessage.className =
                        "form-message error";

                    formMessage.innerHTML =
                        '<i class="ri-error-warning-line"></i> EmailJS is not loaded. Please refresh the page.';
                }

                return;
            }


            /* -------------------------
               GET FORM VALUES
            ------------------------- */

            const name =
                document.getElementById("name")?.value.trim();

            const email =
                document.getElementById("email")?.value.trim();

            const subject =
                document.getElementById("subject")?.value.trim();

            const message =
                document.getElementById("message")?.value.trim();


            /* -------------------------
               VALIDATION
            ------------------------- */

            if (!name || !email || !subject || !message) {

                if (formMessage) {

                    formMessage.className =
                        "form-message error";

                    formMessage.innerHTML =
                        '<i class="ri-error-warning-line"></i> Please fill in all fields.';
                }

                return;
            }


            /* -------------------------
               BUTTON LOADING
            ------------------------- */

            if (submitBtn) {

                submitBtn.disabled = true;

                submitBtn.innerHTML =
                    'Sending... <i class="ri-loader-4-line spin-icon"></i>';
            }


            if (formMessage) {

                formMessage.className =
                    "form-message info";

                formMessage.innerHTML =
                    '<i class="ri-mail-send-line"></i> Sending your message...';
            }


            /* -------------------------
               SEND EMAIL
            ------------------------- */

            try {

                const result =
                    await emailjs.sendForm(
                        EMAILJS_SERVICE_ID,
                        EMAILJS_TEMPLATE_ID,
                        contactForm
                    );


                console.log(
                    "EmailJS Response:",
                    result
                );


                /* -------------------------
                   SUCCESS
                ------------------------- */

                if (result.status === 200) {

                    if (formMessage) {

                        formMessage.className =
                            "form-message success";

                        formMessage.innerHTML =
                            '<i class="ri-checkbox-circle-line"></i> Message sent successfully! Thank you for contacting me.';
                    }

                    contactForm.reset();

                } else {

                    throw new Error(
                        "Email was not accepted by EmailJS."
                    );
                }


            } catch (error) {

                console.error(
                    "EmailJS Error:",
                    error
                );


                /* -------------------------
                   ERROR MESSAGE
                ------------------------- */

                if (formMessage) {

                    formMessage.className =
                        "form-message error";

                    formMessage.innerHTML =
                        '<i class="ri-error-warning-line"></i> Unable to send message. Please try again.';
                }

            } finally {

                /* -------------------------
                   RESET BUTTON
                ------------------------- */

                if (submitBtn) {

                    submitBtn.disabled = false;

                    submitBtn.innerHTML =
                        'Send Message <i class="ri-send-plane-line"></i>';
                }

            }

        }
    );
}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".about-card, .skill-box, .project-card, .timeline-item, .contact-container"
    );


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(element);

});