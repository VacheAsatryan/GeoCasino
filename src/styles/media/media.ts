// Брекпоинты и размеры для адаптивного Hero
export const breakpoints = {
    desktop1920: 1920,
    desktop1440: 1440,
    desktop1200: 1200,
    tablet768: 768,
    mobile480: 480,
    mobile375: 375,
  };
  
  export const heroHeights: Record<string, number> = {
    desktop1920: 944,
    desktop1440: 910,
    desktop1200: 854,
    tablet768: 854,
    mobile480: 854,
    mobile375: 854,
  };
  
  export const heroFontSizes = {
    title: {
      default: '3rem',
      tablet: '2.2rem',
      mobile: '1.8rem',
    },
    description: {
      default: '1.5rem',
      tablet: '1.2rem',
      mobile: '1rem',
    },
    button: {
      default: '1rem',
      tablet: '0.9rem',
      mobile: '0.8rem',
    },
  };