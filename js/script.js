// =========================
// JS UNIVERSITY SCRIPT
// =========================

// Mobile Menu
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn && navLinks){

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });
}

// =========================
// Scroll Animation
// =========================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.2
});

document
.querySelectorAll(
".card, .about-content, .contact-container"
)
.forEach(el => {

    el.classList.add("fade-in");
    observer.observe(el);

});

// =========================
// Contact Form
// =========================

const contactForm =
document.getElementById("contactForm");

if(contactForm){

    contactForm.addEventListener("submit", function(e){

        e.preventDefault();

        const name =
            this.querySelector('input[type="text"]').value;

        const email =
            this.querySelector('input[type="email"]').value;

        const message =
            this.querySelector("textarea").value;

        // Save message
        let messages =
            JSON.parse(localStorage.getItem("jsu_messages")) || [];

        messages.push({
            name,
            email,
            message,
            date: new Date().toLocaleString()
        });

        localStorage.setItem(
            "jsu_messages",
            JSON.stringify(messages)
        );

        // WhatsApp
        const text =
`New Contact Message

Name: ${name}
Email: ${email}

Message:
${message}`;

        const whatsapp =
`https://wa.me/2207597080?text=${encodeURIComponent(text)}`;

        window.open(whatsapp, "_blank");

        alert("Message sent successfully!");

        this.reset();

    });

}

// =========================
// Admission Form
// admissions.html support
// =========================

const admissionForm =
document.getElementById("admissionForm");

if(admissionForm){

    admissionForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const application = {
            name: document.getElementById("fullName").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            nationality: document.getElementById("nationality").value,
            program: document.getElementById("program").value,
            reason: document.getElementById("reason").value,
            date: new Date().toLocaleString()
        };

        let applications =
        JSON.parse(localStorage.getItem("jsu_applications")) || [];

        applications.push(application);

        localStorage.setItem(
            "jsu_applications",
            JSON.stringify(applications)
        );

        alert("Application submitted successfully!");

        this.reset();

    });

}

        form.addEventListener("submit", function (event) {
    event.preventDefault();

    let application = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value
    };

    let applications =
        JSON.parse(localStorage.getItem("jsu_applications")) || [];

    applications.push(application);

    localStorage.setItem(
        "jsu_applications",
        JSON.stringify(applications)
    );

    alert("Application submitted successfully!");

    this.reset();
});

// =========================
// Student Portal Login
// portal.html support
// =========================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Get stored users
        let students =
            JSON.parse(localStorage.getItem("jsu_students")) || [];

        // Default demo student
        const defaultUsers = [
            {
                username: "student",
                password: "1234",
                name: "Demo Student",
                gpa: "3.8"
            }
        ];

        let allUsers = defaultUsers.concat(students);

        const user = allUsers.find(
            u => u.username === username &&
                 u.password === password
        );

        if (user) {

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("dashboard").style.display = "block";

    document.getElementById("studentId").textContent =
        user.studentId || "JSU-DEMO";

    document.getElementById("studentProgram").textContent =
        user.program || "Computer Science";

    document.getElementById("studentLevel").textContent =
        user.level || "Year 1";
        
        document.getElementById("admissionStatus").textContent =
    user.admissionStatus || "Pending";

document.getElementById("applicationDate").textContent =
    user.applicationDate || "-";

document.getElementById("approvalDate").textContent =
    user.approvalDate || "-";

    document.getElementById("studentStatus").textContent =
        user.status || "Active";

} else {
            alert("Invalid login details");
        }
    });

}

// =========================
// Gallery Lightbox
// gallery.html support
// =========================

const galleryImages =
document.querySelectorAll(".gallery img");

const lightbox =
document.getElementById("lightbox");

const lightboxImg =
document.getElementById("lightbox-img");

if(
    galleryImages.length > 0 &&
    lightbox &&
    lightboxImg
){

    galleryImages.forEach(img => {

        img.addEventListener("click", () => {

            lightbox.style.display = "flex";
            lightboxImg.src = img.src;

        });

    });

    lightbox.addEventListener("click", () => {

        lightbox.style.display = "none";

    });

}

// =========================
// Current Year Footer
// =========================

const footerYear =
document.getElementById("year");

if(footerYear){

    footerYear.textContent =
    new Date().getFullYear();

}

// =========================
// Welcome Message
// =========================

window.addEventListener(
"load",
() => {

    console.log(
    "JS University website loaded successfully."
    );

});
