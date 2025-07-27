document.querySelectorAll(".project-source__header").forEach((header) => {
  header.addEventListener("click", () => {
    // Finds the parent container project-source
    const sourceContainer = header.closest(".project-source");
    if (!sourceContainer) return;

    // Finds the project container inside that block
    const projectsContainer = sourceContainer.querySelector(
      ".project-source__content"
    );
    if (!projectsContainer) return;

    // Alternates the state
    const isExpanded = header.getAttribute("aria-expanded") === "true";
    header.setAttribute("aria-expanded", String(!isExpanded));
    projectsContainer.classList.toggle("project-source__content_show");
    projectsContainer.setAttribute("aria-hidden", String(isExpanded));
  });
});

// Updates Copyright Year
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear;
yearSpan.textContent = currentYear;
