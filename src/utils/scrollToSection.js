export function scrollToSection(event, sectionId, onComplete) {
  event.preventDefault();

  const targetSection = document.getElementById(sectionId);

  if (onComplete) onComplete();

  if (!targetSection) return;

  targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
  window.history.pushState(null, "", `#${sectionId}`);
}
