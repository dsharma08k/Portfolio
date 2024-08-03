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

document.addEventListener('DOMContentLoaded', function() {
  const text = "Aspiring Data Analyst";
  let index = 0;

  function typeWriter() {
      if (index < text.length) {
          document.getElementById("typingText").textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100); // Adjust the speed of typing here
      }
  }

  typeWriter();
});

//It will directly open Gmail Compose in case someone click on the my email.

document.addEventListener('DOMContentLoaded', function() {
  const emailLink = document.getElementById('emailLink');
  emailLink.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      window.open('https://mail.google.com/mail/?view=cm&fs=1&to=dsharma08k@gmail.com', '_blank');
  });
});

// Effect on profile pic when website load

document.addEventListener('DOMContentLoaded', function() {
  const profilePic = document.querySelector('.section__pic-container img');
  profilePic.classList.add('loaded');
});


