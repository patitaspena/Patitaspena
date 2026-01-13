document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    
    // Mensaje de éxito personalizado
    alert(`Estimado ${nombre}, su mensaje ha sido enviado con éxito a Peña Brothers.`);
    
    // Reiniciar el formulario
    this.reset();
});
// Cambiar el mensaje de WhatsApp dinámicamente
const numeroTelefono = "5215636151629"; // Cambia esto por tu número real
const mensaje = "Hola Peña Brothers, vengo de su sitio web y me interesa una cotización.";
const whatsappLink = document.querySelector('.whatsapp-float');

whatsappLink.href = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;
