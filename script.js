function enviarWhatsApp() {
    // REEMPLAZA LAS X CON TU NÚMERO (Código de país + número)
    const telefono = "5215636151629"; 
    const mensaje = encodeURIComponent("Hola Peña Brothers Mechanics, me gustaría agendar una cita para mi moto.");
    const url = "https://wa.me/" + telefono + "?text=" + mensaje;
    
    window.open(url, "_blank");
}
function abrirMapa() {
    // Pega aquí el enlace que copiaste de Google Maps
    const urlMapa = "TU_LINK_DE_GOOGLE_MAPS_AQUI";
    window.open(urlMapa, "_blank");
}
