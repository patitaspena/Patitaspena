document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    
    // Mensaje de éxito personalizado
    alert(`Estimado ${nombre}, su mensaje ha sido enviado con éxito a Peña Brothers.`);
    
    // Reiniciar el formulario
    this.reset();
});
