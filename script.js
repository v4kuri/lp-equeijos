// Substitua pela URL definitiva do WhatsApp ou formulário do cliente.
const contactUrl = "#contato";

document.querySelectorAll("[data-contact-link]").forEach((link) => {
  link.setAttribute("href", contactUrl);
});
