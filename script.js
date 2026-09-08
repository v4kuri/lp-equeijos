const contactUrl = "https://api.whatsapp.com/send?phone=5516981616664&text=Ol%C3%A1%2C%20vim%20da%20LP%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20E-queijo!";

document.querySelectorAll("a.button").forEach((link) => {
  link.setAttribute("href", contactUrl);
  link.setAttribute("target", "_blank");
  link.setAttribute("rel", "noopener");
});
