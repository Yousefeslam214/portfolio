// SHOW LINKS
const showLinks = (icon, listLinks) => {
  const toggle = document.querySelector(icon);
  const nav = document.querySelector(listLinks);

  toggle.addEventListener("click", () => nav.classList.toggle("show"));

  document.addEventListener("click", (e) => {
    e.target.className !== "icon" && e.target.className !== "icon-shape"
      ? nav.classList.remove("show")
      : false;
  });
};

showLinks(".icon", ".list-links");

// SHOW LINKS ACTIONS
function showActions() {
  const links = document.querySelectorAll(".list-links a");
  links.forEach((link) => link.classList.remove("active"));
  this.classList.add("active");

  const nav = document.querySelector(".list-links");
  nav.classList.remove("show");
}

const links = document.querySelectorAll(".list-links a");
links.forEach((link) => link.addEventListener("click", showActions));

// DARK MODE SETTINGS
let modeToggle = document.getElementById("dark-mode-toggle");
let dark_on = localStorage.getItem("dark_on")
  ? JSON.parse(localStorage.getItem("dark_on"))
  : false;

let dark = "#051e34";
let light = "#f6f7f9";

const setMode = (colorLight, colorDark, darkOn) => {
  document.documentElement.style.setProperty("--second-color", colorLight);
  document.documentElement.style.setProperty("--light-color", colorDark);
  dark_on = darkOn;
  localStorage.setItem("dark_on", JSON.stringify(dark_on));
};

modeToggle.addEventListener("click", (e) => {
  dark_on ? setMode(dark, light, false) : setMode(light, dark, true);
  e.target.classList.toggle("bxs-sun");
});

// SET MODE AFTER RELOAD PAGE FROM LOCAL STORAGE
if (dark_on) {
  setMode(light, dark, true);
  modeToggle.classList.toggle("bxs-sun");
}

// DISPLAY SKILLS
let skills = [
  { name: "Redux", icon: "tabler:brand-redux" },
  { name: "Material UI", icon: "devicon:materialui" },
  { name: "REACT", icon: "logos:react" },
  { name: "JAVASCRIPT", icon: "logos:javascript" },
  { name: "HTML", icon: "vscode-icons:file-type-html" },
  { name: "CSS", icon: "vscode-icons:file-type-css" },
  { name: "GIT & GITHUB", icon: "akar-icons:github-fill" },
  // { name: "TYPESCRIPT", icon: "logos:typescript-icon" },
  // { name: "Next  ", icon: "cib:next-js" },
  // { name: "Node", icon: "vscode-icons:file-type-node" },
  // { name: "MongoDb", icon: "simple-icons:mongodb" },
  // { name: "Express", icon: "simple-icons:express" },
  // { name: "SASS", icon: "logos:sass" },

  // { name: "JQUERY", icon: "mdi:jquery" },
  // { name: "BOOTSTRAP", icon: "logos:bootstrap" },
  // { name: "JSON & AJAX & AXIOS", icon: "bx:bxs-file-json" },
];

let skillsContentDOM = document.querySelector(".skills-content");

const displaySkills = () => {
  const display = skills.map((skill) => {
    return `
        <div class="skills-box line-swaping">
        <span class="iconify" data-icon="${skill.icon}" data-width="30"></span>
          <span>${skill.name}</span>
        </div>
        `;
  });

  skillsContentDOM.innerHTML = display.join("");
};

displaySkills();

// DISPLAY PORTFOLIO PROJECTS
let projects = [
  {
    name: "Yous Academy",
    img: "images/new/YousAcademy.webp",
    link: "https://fir-frontend-7d4bd.web.app/",
  },
  {
    name: "Admin app",
    img: "images/new/Dashboard.webp",
    link: "https://react-admin-dashboard-214.netlify.app/",
  },
  {
    name: "Trippy",
    img: "images/new/Trippy.webp",
    link: "https://trippy-214.netlify.app/",
  },
  {
    name: "Grocery Bud",
    img: "images/new/groceryBud.webp",
    link: "https://grocery-bud-214.netlify.app/",
  },
  {
    name: "Color Generator",
    img: "images/new/colorGenerator.webp",
    link: "https://color-generator-214.netlify.app/",
  },
  {
    name: "Store(React)",
    img: "images/Store.png",
    link: "https://speedstore.netlify.app/",
  },
  {
    name: "Diagram(React)",
    img: "images/Diagram.png",
    link: "https://diagramo.netlify.app/",
  },
];

let projectsContentDOM = document.querySelector(".portfolio-content");

const displayProjects = () => {
  const display = projects.map((project) => {
    return `
            <div class="project-box">
              <div class="project-image">
                <img src="${project.img}" alt="project-image" />
                <div class="project-overlay">
                  <div class="project-details">
                    <a href="${project.link}" class="button" target="_blank"> preview </a>
                    <p>${project.name}</p>
                  </div>
                </div>
              </div>
          </div>
      `;
  });

  projectsContentDOM.innerHTML = display.join("");
};

displayProjects();
let cert = [
  {
    name: "REACT",
    img: "images/new/reactBasic.webp",
    link: "https://www.hackerrank.com/certificates/5606e07540a6",
  },
  // {
  //   name: "PROBLEM SOLVING",
  //   img: "images/P-S-I.png",
  //   link: "https://www.hackerrank.com/certificates/e30a2b3c60bd",
  // },
  // {
  //   name: "Angular",
  //   img: "images/angularInter.png",
  //   link: "https://www.hackerrank.com/certificates/1b32676ad931",
  // },
  // {
  //   name: "Angular",
  //   img: "images/angular.png",
  //   link: "https://www.hackerrank.com/certificates/d821bcf92140",
  // },
  // {
  //   name: "PROBLEM SOLVING",
  //   img: "images/problem-basic.png",
  //   link: "https://www.hackerrank.com/certificates/685bc23afa5e",
  // },
  {
    name: "FrontEnd",
    img: "images/new/testDome.webp",
    link: "https://www.testdome.com/certificates/63a421aca4fc4ec291015c9673eacc62",
  },
];

let certContentDOM = document.querySelector(".cert-content");

const displaycert = () => {
  const display = cert.map((project) => {
    return `
            <div class="project-box">
              <div class="project-image">
                <img src="${project.img}" alt="project-image" />
                <div class="project-overlay">
                  <div class="project-details">
                    <a href="${project.link}" class="button" target="_blank"> preview </a>
                    <p>${project.name}</p>
                  </div>
                </div>
              </div>
          </div>
      `;
  });

  certContentDOM.innerHTML = display.join("");
};

displaycert();

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
  origin: "top",
  distance: "100px",
  duration: 2000,
  // reset: true,
});

// HOME SCROLL REVEAL
sr.reveal(".home-desc", {});
sr.reveal(".home-social li", { interval: 200 });
sr.reveal(".home-img", { delay: 300 });

// SKILLS SCROLL REVEAL
sr.reveal(".skills", { origin: "left" });
sr.reveal("#exp", { origin: "left" });

// PORTFOLIO SCROLL REVEAL
sr.reveal(".portfolio", {});
sr.reveal(".cert", {});
