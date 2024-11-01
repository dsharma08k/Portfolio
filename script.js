function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Dark / light mode

const btn = document.getElementById("modeToggle");
const btn2 = document.getElementById("modeToggle2");
const themeIcons = document.querySelectorAll(".icon");
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  setDarkMode();
}

btn.addEventListener("click", function () {
  setTheme();
});

btn2.addEventListener("click", function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute("theme");

  if (currentTheme === "dark") {
    setLightMode();
  } else {
    setDarkMode();
  }
}

function setDarkMode() {
  document.body.setAttribute("theme", "dark");
  localStorage.setItem("theme", "dark");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-dark");
  });
}

function setLightMode() {
  document.body.removeAttribute("theme");
  localStorage.setItem("theme", "light");

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute("src-light");
  });
}

//Typewritter Effect

document.addEventListener("DOMContentLoaded", function () {
  const text = "Aspiring Data Analyst";
  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      document.getElementById("typingText").textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // Adjust the speed of typing here
    }
  }

  typeWriter();
});

// Directly open Gmail Compose by Clicking on mail

document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.getElementById("emailLink");
  emailLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default link behavior
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=dsharma08k@gmail.com",
      "_blank"
    );
  });
});

// Project Slider

const projectSlider = new Swiper(".project-slider", {
  loop: true,
  spaceBetween: 20,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Fetch project data from JSON and initialize Swiper slider

document.addEventListener("DOMContentLoaded", () => {
  fetch("./projects.json")
    .then((response) => response.json())
    .then((data) => loadProjects(data))
    .catch((error) => console.error("Error loading project data:", error));
});

function loadProjects(projects) {
  const swiperWrapper = document.querySelector(
    ".project-slider .swiper-wrapper"
  );

  projects.forEach((project) => {
    const projectSlide = document.createElement("div");
    projectSlide.classList.add(
      "swiper-slide",
      "details-container",
      "color-container"
    );

    projectSlide.innerHTML = `
      <div class="article-container">
        <img src="${project.image_url}" alt="${project.project_name}" class="project-img" />
      </div>
      <h2 class="experience-sub-title project-title">${project.project_name}</h2>
      <div class="btn-container">
        <button class="btn btn-color-2 project-btn" onclick="window.open('${project.github_link}', '_blank')">Github</button>
        <button class="btn btn-color-2 project-btn" onclick="window.open('${project.linkedin_link}', '_blank')">LinkedIn</button>
      </div>
    `;

    swiperWrapper.appendChild(projectSlide);
  });

// Initialize Swiper after loading projects

  new Swiper(".project-slider", {
    loop: true,
    spaceBetween: 20,
    slidesPerView: 1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });
}
