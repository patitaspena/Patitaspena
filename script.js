function enviarWhatsApp() {
    // Número ya configurado para Peña Brothers Mechanics
    const telefono = "5215636151629"; 
    const mensaje = encodeURIComponent("Hola Peña Brothers Mechanics, me gustaría agendar una cita para mi moto.");
    
    // Usamos api.whatsapp.com que tiene mejor compatibilidad en algunos navegadores
    const url = "https://api.whatsapp.com/send?phone=" + telefono + "&text=" + mensaje;
    
    window.open(url, "_blank");
}
