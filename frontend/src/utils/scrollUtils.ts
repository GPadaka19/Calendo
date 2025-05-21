// Default offsets for different sections
const sectionOffsets = {
  'features-section': -5,
  'pricing-section': -110,
  'contact-section': -100,
  'privacy-section': -80,
  'terms-section': -80,
} as const;

export const scrollToSection = (sectionId: string, customOffset?: number) => {
  const section = document.getElementById(sectionId);
  if (section) {
    // Gunakan customOffset jika disediakan, jika tidak gunakan offset dari sectionOffsets
    const offset = customOffset ?? sectionOffsets[sectionId as keyof typeof sectionOffsets] ?? -80;
    
    const elementPosition = section.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};