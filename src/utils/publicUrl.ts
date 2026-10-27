// GitHub Pages serves the site under /portfolio, Vercel serves it from the root
const base = window.location.pathname.startsWith("/portfolio") ? "/portfolio" : "";

export const cvUrl = `${base}/gadjimurad-sultanmagomedov-cv.pdf`;
