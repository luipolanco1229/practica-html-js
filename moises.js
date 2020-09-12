const persona = {
    nombre: "Moises Herrera Gallego",
    edad: 17,
    genero: "M",
    esUnaPersonaDeMayorEdad: function() {
        return this.edad >=18;
    }
};



console.log(persona.esUnaPersonaDeMayorEdad());

function cuantasPersonasMujeres(personas);