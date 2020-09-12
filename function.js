

function calc(signo) {
    const math = {
        '+': (a, b) => a + b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
        '-': (a, b) => a - b
    };
    if (math[signo]) {
        return math[signo];
    }
    return () => "No valido";
}
             
const list = [
    calc('+'), calc('*'), calc('/'), calc('-')
];
console.log("Calculos => "+list.length);
const listRes = [];
let num = 0;
list.forEach(func => {
    num++;
    listRes.push(func(3, 9));
});

console.log("Elementos => "+num)
console.log(listRes.join(','));
console.log(listRes.some(val => val < 0));
console.log(listRes.filter(val => val < 0));

const persona = {
    nombre: "Raul Alzate",
    edad: 15,
    genero: "M",
    esUnaPersonaDeMayorEdad: function(){
        return this.edad >= 18;
    }
};

const nuevaPersona = (nombre, edad, genero) => {
    return {
        nombre: nombre,
        edad: edad,
        genero: genero,
        esUnaPersonaDeMayorEdad: function(){
            return this.edad >= 18;
        }
    };
}

const listaDePersonas = [
    nuevaPersona("Raul Alzate", 30, "M"),
    nuevaPersona("Andres Camilo", 17, "M"),
    nuevaPersona("Camila", 28, "F"),
];

const cuantasPersonasMujeres = (listaDePersonas) => {
    return listaDePersonas.filter(persona => persona.genero === 'F').length;
};
console.log(listaDePersonas[1].esUnaPersonaDeMayorEdad());
console.log(cuantasPersonasMujeres(listaDePersonas));

/*
const persona = {
    nombre: "Raul Alzate",
    edad: 30,
    genero: "M"
};

persona.nombre;
persona.edad;
persona.genero;


function esUnaPersonaDeMayorEdad(persona);
function cuantasPersonasMujeres(personas);
*/


