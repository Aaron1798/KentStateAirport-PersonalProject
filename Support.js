function scrollToSection(sectionId, offset = 350) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        const topPosition = targetSection.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: topPosition, behavior: 'smooth' });
    }
}