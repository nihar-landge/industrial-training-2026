const portfolioData = {
  profile: {
    name: "NIHAR LANDGE",
    title: "Engineering Student | DevOps Enthusiast",
    bio: "Final-year Computer Science Engineering student focused on CI/CD, cloud-native automation, and reliable infrastructure delivery.",
    summary:
      "Hands-on with GitHub Actions, Docker, Kubernetes, and cloud tooling across AWS and Azure. I build deployment pipelines, improve observability, and automate repeatable engineering workflows.",
    email: "niharlandge.engr@gmail.com",
    location: "Amravati, Maharashtra",
    avatar:
      "https://media.licdn.com/dms/image/v2/D5603AQGZwLFaABYfyg/profile-displayphoto-shrink_400_400/B56ZZYLBM0GoAg-/0/1745236007196?e=1772668800&v=beta&t=lhu0-ntstaWovAzAOBEYfPDyD9a62fU46ADmFlRhbdM",
    socials: {
      github: "https://github.com/nihar-landge",
      linkedin: "https://www.linkedin.com/in/nihar-landge/",
      twitter: "https://x.com/landge_nihar"
    }
  },
  metrics: [
    { label: "Expected Graduation", value: "May 2026" },
    { label: "Current Domain", value: "DevOps / Cloud" },
    { label: "Primary Stack", value: "AWS + Kubernetes" }
  ],
  education: [
    {
      institution: "Sipna College of Engineering and Technology, Amravati",
      degree: "B.Tech - Computer Science and Engineering",
      period: "Expected May 2026",
      notes: "Pursuing CSE with strong alignment to DevOps internship roles."
    },
    {
      institution: "Dr. Babasaheb Ambedkar College",
      degree: "HSC - Science",
      period: "Dec 2020 - Jun 2022",
      notes: "Scored 89.33% and built foundation for engineering studies."
    }
  ],
  focusAreas: [
    "CI/CD pipeline design and automation",
    "Containerized application delivery",
    "Kubernetes deployment and operations",
    "Cloud infrastructure fundamentals",
    "Monitoring, alerting, and reliability"
  ],
  toolchain: [
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "AWS EKS",
    "Azure DevOps",
    "Helm",
    "Argo CD",
    "Prometheus",
    "Grafana",
    "Linux / Bash"
  ],
  skills: [
    { id: "1", name: "CI/CD Pipelines", level: 86, category: "devops" },
    { id: "2", name: "Docker", level: 84, category: "devops" },
    { id: "3", name: "Kubernetes", level: 81, category: "devops" },
    { id: "4", name: "GitHub Actions", level: 84, category: "devops" },
    { id: "5", name: "AWS", level: 80, category: "cloud" },
    { id: "6", name: "Azure DevOps", level: 78, category: "cloud" },
    { id: "7", name: "Linux / Bash", level: 85, category: "tools" },
    { id: "8", name: "Python Scripting", level: 74, category: "tools" }
  ],
  projects: [
    {
      id: "1",
      title: "DevOpsified: End-to-End Cloud-Native Automation",
      description:
        "Built an end-to-end CI/CD and GitOps workflow on AWS EKS with secure container delivery.",
      outcome: "Automated build-to-deploy cycle for faster, consistent Kubernetes releases.",
      highlights: [
        "Implemented GitHub Actions pipelines for build, test, and deployment stages",
        "Configured Argo CD and Helm for GitOps-driven environment releases",
        "Used NGINX Ingress with host-based routing for service exposure"
      ],
      category: "DevOps | AWS EKS",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=800&fit=crop",
      technologies: ["AWS EKS", "GitHub Actions", "Argo CD", "Docker", "Helm"],
      link: "",
      github: "https://github.com/nihar-landge/go-web-app",
      featured: true,
      createdAt: "2026-02-16"
    },
    {
      id: "2",
      title: "Azure-Native DevOps: End-to-End Microservices Automation",
      description:
        "Automated multi-stack microservices delivery using Azure Repos, Azure Pipelines, and AKS.",
      outcome: "Improved deployment consistency and release readiness across services.",
      highlights: [
        "Designed CI/CD pipelines in Azure DevOps for multi-service workflows",
        "Deployed containerized workloads to AKS with secure registry integration",
        "Configured self-hosted build agents and network security controls"
      ],
      category: "DevOps | Azure",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=800&fit=crop",
      technologies: ["Azure Repos", "Azure Pipelines", "AKS", "Container Security"],
      link: "",
      github: "",
      featured: true,
      createdAt: "2026-02-14"
    },
    {
      id: "3",
      title: "AWS EKS Observability Project",
      description:
        "Implemented observability stack with Prometheus, Grafana, and Alertmanager for Kubernetes health tracking.",
      outcome: "Enabled proactive failure detection and faster troubleshooting.",
      highlights: [
        "Configured Prometheus and Alertmanager for cluster-level visibility",
        "Built dashboards and investigated restart failures with PromQL",
        "Included vulnerability checks with Trivy for container security awareness"
      ],
      category: "Observability | Kubernetes",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
      technologies: ["Prometheus", "Grafana", "Alertmanager", "PromQL", "Trivy"],
      link: "",
      github: "https://github.com/nihar-landge/observability-opentelemetry-demo",
      featured: false,
      createdAt: "2026-02-12"
    }
  ]
};

const bootLines = [
  { text: "NIHAR_PORTFOLIO v1.2", delay: 0 },
  { text: "WEEK-01 FINAL BUILD", delay: 250 },
  { text: "INITIALIZING UI MODULES...", delay: 700 },
  { text: "LOADING PROJECT DATA...", delay: 1200 },
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
    cursorDot.style.left = `${mouseX}px`;
    cursorDot.style.top = `${mouseY}px`;
  });

  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = `${cursorX}px`;
    cursor.style.top = `${cursorY}px`;
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
  const sections = ["dashboard", "about", "projects", "contact"];

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
        if (rect.top <= 220 && rect.bottom >= 220) {
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
  const avatarEl = document.getElementById("profile-avatar");

  avatarEl.src = profile.avatar;
  avatarEl.onerror = () => {
    avatarEl.onerror = null;
    avatarEl.src = "https://ui-avatars.com/api/?name=Nihar+Landge&background=0b0b0b&color=00f58f&size=400";
  };

  document.getElementById("profile-name").textContent = profile.name;
  document.getElementById("profile-title").textContent = profile.title;
  document.getElementById("profile-bio").textContent = profile.bio;
  document.getElementById("profile-location").textContent = profile.location;
  document.getElementById("profile-email").textContent = profile.email;
  document.getElementById("summary-text").textContent = profile.summary;

  const metricsGrid = document.getElementById("metrics-grid");
  metricsGrid.innerHTML = portfolioData.metrics
    .map(
      (metric) => `
      <div class="metric-card">
        <span class="metric-label">${metric.label}</span>
        <span class="metric-value">${metric.value}</span>
      </div>
    `
    )
    .join("");

  const socialContainer = document.getElementById("social-links");
  socialContainer.innerHTML = Object.entries(profile.socials)
    .map(
      ([key, url]) => `
      <a href="${url}" target="_blank" rel="noopener noreferrer" class="social-link" data-cursor-hover aria-label="Open Nihar's ${key} profile">
        ${getSocialIcon(key)}
      </a>
    `
    )
    .join("");

  renderSkills();
}

function renderSkills() {
  const categories = ["devops", "cloud", "tools"];
  const skillsContent = document.getElementById("skills-content");

  skillsContent.innerHTML = categories
    .map((cat) => {
      const catSkills = portfolioData.skills.filter((skill) => skill.category === cat);
      if (catSkills.length === 0) return "";

      return `
      <div class="skills-category">
        <h3 class="category-title">${cat}</h3>
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

function renderAbout() {
  const educationList = document.getElementById("education-list");
  educationList.innerHTML = portfolioData.education
    .map(
      (item) => `
      <article class="education-item">
        <h3>${item.institution}</h3>
        <p class="education-degree">${item.degree}</p>
        <p class="education-period">${item.period}</p>
        <p class="education-notes">${item.notes}</p>
      </article>
    `
    )
    .join("");

  const focusList = document.getElementById("focus-list");
  focusList.innerHTML = portfolioData.focusAreas.map((item) => `<li>${item}</li>`).join("");

  const toolchainList = document.getElementById("toolchain-list");
  toolchainList.innerHTML = portfolioData.toolchain.map((tool) => `<span class="chip">${tool}</span>`).join("");
}

function renderProjects() {
  const featured = portfolioData.projects.filter((project) => project.featured);
  const others = portfolioData.projects.filter((project) => !project.featured);
  const featuredContainer = document.getElementById("featured-projects");

  featuredContainer.innerHTML = featured
    .map((project) => {
      const actionLink = project.github
        ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link secondary">${getGithubIcon()} SOURCE</a>`
        : "<span class=\"project-link disabled\">PLATFORM PROJECT</span>";

      return `
      <article class="project-card" data-cursor-hover>
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
          <p class="project-outcome">${project.outcome}</p>
          <ul class="project-highlights">
            ${project.highlights.map((point) => `<li>${point}</li>`).join("")}
          </ul>
          <div class="project-techs">
            ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
          </div>
          <div class="project-links">${actionLink}</div>
        </div>
      </article>
    `;
    })
    .join("");

  const othersContainer = document.getElementById("other-projects");
  othersContainer.innerHTML =
    others.length > 0
      ? `
      <h3 class="projects-list-header">ADDITIONAL_ENTRIES</h3>
      ${others
        .map(
          (project, index) => `
          <article class="project-list-item" data-cursor-hover>
            <div class="project-list-info">
              <span class="project-list-index">${String(index + 1).padStart(2, "0")}</span>
              <div>
                <h4 class="project-list-title">${project.title}</h4>
                <p class="project-list-desc">${project.description}</p>
              </div>
            </div>
            <div class="project-list-actions">
              <span class="project-list-category">${project.category}</span>
              ${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-list-btn" aria-label="Open project source">${getGithubIcon()}</a>` : '<span class="project-list-note">Azure DevOps</span>'}
            </div>
          </article>
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
    twitter: "network-twitter"
  };

  Object.entries(networkIds).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (el && profile.socials[key]) {
      el.href = profile.socials[key];
    }
  });

  const particlesContainer = document.getElementById("particles");
  particlesContainer.innerHTML = "";
  for (let i = 0; i < 20; i += 1) {
    const particle = document.createElement("div");
    particle.className = "particle";
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.top = `${Math.random() * 100}%`;
    particle.style.animationDelay = `${Math.random() * 3}s`;
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
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>'
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
  renderAbout();
  renderProjects();
  renderContact();
}

document.addEventListener("DOMContentLoaded", initBootSequence);
