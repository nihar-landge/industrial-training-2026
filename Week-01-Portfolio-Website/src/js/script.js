const portfolioData = {
  profile: {
    name: "NIHAR LANDGE",
    title: "ENGINEERING STUDENT | WEB DEVELOPMENT",
    bio: "Day 1 portfolio build for industrial training 2026. This version focuses on a clean introduction, selected projects, and contact access.",
    email: "niharlandge.engr@gmail.com",
    location: "Amravati",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
      dribbble: "https://dribbble.com"
    }
  },
  skills: [
    { id: "1", name: "HTML5", level: 85, category: "frontend" },
    { id: "2", name: "CSS3", level: 80, category: "frontend" },
    { id: "3", name: "JavaScript", level: 75, category: "frontend" },
    { id: "4", name: "Git / GitHub", level: 78, category: "tools" }
  ],
  projects: [
    {
      id: "1",
      title: "PORTFOLIO WEBSITE - DAY 1",
      description: "Initial structure and futuristic UI setup for training submission. Includes dashboard profile, project showcase, and contact section.",
      category: "Training Project",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "",
      github: "https://github.com",
      featured: true,
      createdAt: "2026-02-17"
    },
    {
      id: "2",
      title: "UI EXPERIMENTS",
      description: "Small component and layout experiments used while learning interaction and responsive design.",
      category: "Practice",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop",
      technologies: ["CSS", "Responsive UI"],
      link: "",
      github: "https://github.com",
      featured: false,
      createdAt: "2026-02-10"
    }
  ]
};

const bootLines = [
  { text: "NIHAR_PORTFOLIO v1.0", delay: 0 },
  { text: "WEEK-01 TRAINING BUILD", delay: 250 },
  { text: "INITIALIZING UI MODULES...", delay: 700 },
  { text: "LOADING PORTFOLIO DATA...", delay: 1200 },
  { text: "SYSTEM READY.", delay: 1700, success: true }
];

function initBootSequence() {
  const terminal = document.getElementById("terminal-content");
  const progressFill = document.getElementById("progress-fill");
  const progressText = document.getElementById("progress-text");
  const bootButton = document.getElementById("boot-button");

  bootLines.forEach((line, index) => {
    setTimeout(() => {
      const lineEl = document.createElement("div");
      lineEl.className = "terminal-line";
      lineEl.innerHTML = `
        <span class="terminal-prompt">></span>
        <span class="terminal-text ${line.success ? "success" : ""}">${line.text}</span>
        ${index === bootLines.length - 1 ? '<span class="terminal-cursor">_</span>' : ""}
      `;
      terminal.appendChild(lineEl);
      terminal.scrollTop = terminal.scrollHeight;
    }, line.delay);
  });

  setTimeout(() => {
    progressFill.style.width = "100%";
    let progress = 0;
    const interval = setInterval(() => {
      progress += 2;
      progressText.textContent = progress + "%";
      if (progress >= 100) {
        clearInterval(interval);
        bootButton.classList.add("visible");
      }
    }, 50);
  }, 400);
}

function enterSystem() {
  const bootSequence = document.getElementById("boot-sequence");
  const mainContent = document.getElementById("main-content");

  bootSequence.classList.add("exiting");
  setTimeout(() => {
    bootSequence.classList.add("hidden");
    mainContent.classList.remove("hidden");
    initApp();
  }, 700);
}

function initCustomCursor() {
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const cursor = document.getElementById("cursor");
  const cursorDot = document.getElementById("cursorDot");
  let mouseX = 0;
  let mouseY = 0;
  let cursorX = 0;
  let cursorY = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    cursorDot.style.left = mouseX + "px";
    cursorDot.style.top = mouseY + "px";
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";
    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  const interactiveElements = document.querySelectorAll("a, button, [data-cursor-hover]");
  interactiveElements.forEach((el) => {
    el.addEventListener("mouseenter", () => cursor.classList.add("hover"));
    el.addEventListener("mouseleave", () => cursor.classList.remove("hover"));
  });
}

function initNavigation() {
  const navbar = document.getElementById("navbar");
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = ["dashboard", "projects", "contact"];

  window.addEventListener(
    "scroll",
    () => {
      if (window.scrollY > 100) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.dataset.section === section) {
              link.classList.add("active");
            }
          });
        }
      });
    },
    { passive: true }
  );
}

function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.toggle("open");
}

function closeMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.classList.remove("open");
}

function renderDashboard() {
  const profile = portfolioData.profile;

  document.getElementById("profile-avatar").src = profile.avatar;
  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-title").textContent = profile.title;
  document.getElementById("profile-bio").textContent = profile.bio;
  document.getElementById("profile-location").textContent = profile.location;
  document.getElementById("profile-email").textContent = profile.email;

  const socialContainer = document.getElementById("social-links");
  socialContainer.innerHTML = Object.entries(profile.socials)
    .map(
      ([key, url]) => `
      <a href="${url}" target="_blank" class="social-link" data-cursor-hover>
        ${getSocialIcon(key)}
      </a>
    `
    )
    .join("");

  renderSkills();
}

function renderSkills() {
  const categories = ["frontend", "tools"];
  const skillsContent = document.getElementById("skills-content");

  skillsContent.innerHTML = categories
    .map((cat) => {
      const catSkills = portfolioData.skills.filter((s) => s.category === cat);
      if (catSkills.length === 0) return "";

      return `
      <div class="skills-category">
        <h4 class="category-title">${cat}</h4>
        <div class="skills-row">
          ${catSkills
            .map(
              (skill) => `
            <div class="skill-item">
              <div class="skill-header">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-level">${skill.level}%</span>
              </div>
              <div class="skill-bar">
                <div class="skill-fill" style="width: 0%" data-width="${skill.level}%"></div>
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      </div>
    `;
    })
    .join("");

  setTimeout(() => {
    document.querySelectorAll(".skill-fill").forEach((bar) => {
      bar.style.width = bar.dataset.width;
    });
  }, 250);
}

function renderProjects() {
  const featured = portfolioData.projects.filter((p) => p.featured);
  const others = portfolioData.projects.filter((p) => !p.featured);
  const featuredContainer = document.getElementById("featured-projects");

  featuredContainer.innerHTML = featured
    .map(
      (project) => `
    <div class="project-card" data-cursor-hover>
      <div class="project-image">
        <img src="${project.image}" alt="${project.title}">
        <div class="spotlight"></div>
      </div>
      <div class="corner-accent"></div>
      <div class="project-content">
        <div class="project-meta">
          <span class="project-category">${project.category}</span>
          <span class="project-year">${new Date(project.createdAt).getFullYear()}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="project-techs">
          ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" target="_blank" class="project-link secondary">${getGithubIcon()} SOURCE</a>` : ""}
        </div>
      </div>
    </div>
  `
    )
    .join("");

  const othersContainer = document.getElementById("other-projects");
  othersContainer.innerHTML =
    others.length > 0
      ? `
    <h3 class="projects-list-header">ADDITIONAL_ENTRIES</h3>
    ${others
      .map(
        (project, index) => `
      <div class="project-list-item" data-cursor-hover>
        <div class="project-list-info">
          <span class="project-list-index">${String(index + 1).padStart(2, "0")}</span>
          <div>
            <h4 class="project-list-title">${project.title}</h4>
            <p class="project-list-desc">${project.description}</p>
          </div>
        </div>
        <div class="project-list-actions">
          <span class="project-list-category">${project.category}</span>
          ${project.github ? `<a href="${project.github}" target="_blank" class="project-list-btn">${getGithubIcon()}</a>` : ""}
        </div>
      </div>
    `
      )
      .join("")}
  `
      : "";

  document.querySelectorAll(".project-card").forEach((card) => {
    const spotlight = card.querySelector(".spotlight");
    card.addEventListener("mousemove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      spotlight.style.background = `radial-gradient(circle 150px at ${x}px ${y}px, rgba(255,255,255,0.12), transparent)`;
    });
  });
}

function renderContact() {
  const profile = portfolioData.profile;
  document.getElementById("contact-email").textContent = profile.email;
  document.getElementById("contact-location").textContent = profile.location;
  document.getElementById("contact-email-link").href = `mailto:${profile.email}`;

  const networkIds = {
    github: "network-github",
    linkedin: "network-linkedin",
    twitter: "network-twitter",
    dribbble: "network-dribbble"
  };

  Object.entries(networkIds).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (el && profile.socials[key]) {
      el.href = profile.socials[key];
    }
  });

  const particlesContainer = document.getElementById("particles");
  for (let i = 0; i < 20; i += 1) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = Math.random() * 100 + "%";
    particle.style.top = Math.random() * 100 + "%";
    particle.style.animationDelay = Math.random() * 3 + "s";
    particlesContainer.appendChild(particle);
  }
}

function getSocialIcon(key) {
  const icons = {
    github:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>',
    linkedin:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>',
    twitter:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>',
    dribbble:
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path></svg>'
  };
  return icons[key] || "";
}

function getGithubIcon() {
  return '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>';
}

function initApp() {
  initCustomCursor();
  initNavigation();
  renderDashboard();
  renderProjects();
  renderContact();
}

document.addEventListener("DOMContentLoaded", initBootSequence);
