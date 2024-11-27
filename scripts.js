document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir envío por defecto
    const nombre = this.nombre.value;
    const apellido = this.apellido.value;
    const id = this.id.value;
    const correo = this.correo.value;

    // Validaciones simples
    if (!/^[a-zA-Z]+$/.test(nombre) || nombre.length > 25) {
        alert('Nombre inválido');
        return;
    }
    if (!/^[a-zA-Z]+$/.test(apellido) || apellido.length > 25) {
        alert('Apellido inválido');
        return;
    }

    // Emular el envío de correo de confirmación
    alert(`Registro exitoso! Se ha enviado un correo a ${correo} con la contraseña inicial.`);
    this.reset(); // Resetear el formulario
});