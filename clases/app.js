// 20 números aleatorios entre 1 y 100 por ejemplo para una loteria
function generarNumerosAleatorios() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
        numeros.push(Math.floor(Math.random() * 100) + 1);//el +1 es por que se comienza contando desde el 0
    }
    return numeros;
}

// declaramos la constante numerosAleatorios
const numerosAleatorios = generarNumerosAleatorios();

// Función para obtener el horóscopo basado en el mes y día de nacimiento

/*
Aries. Del 21 de marzo al 19 de abril  (marzo es el mes 3 y aries es desde el 21/03 osea debe ser igual o mayor que 21)

**Quedando de la siguiente manera:

            marzo        21             abril        19
if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {

    *************informacion de los siguientes signos****************************
Tauro. Del 20 de abril al 20 de mayo
Géminis. Del 21 de mayo al 20 de junio
Cáncer. Del 21 de junio al 22 de julio
Leo. Del 23 de julio al 22 de agosto
Virgo. Del 23 de agosto al 22 de septiembre
Libra. Del 23 de septiembre al 22 de octubre
Escorpio. Del 23 de octubre al 21 de noviembre
Sagitario. Del 22 de noviembre al 21 de diciembre
Capricornio. Del 22 de diciembre al 19 de enero
Acuario. Del 20 de enero al 18 de febrero
Piscis. Del 19 de febrero al 20 de marzo
*/


function obtenerHoroscopo(mes, dia) {
    // Transforma el mes y día a números enteros
/*aqui igual podría, pudo escribirse pero es mas sencillo con numeros, en html hubiera hecho un listado o un 
<input type="text"></input> describiendo "ingresa la fecha de nacimiento en formato dd/mm/aaaa*/
    mes = parseInt(mes);
    dia = parseInt(dia);

    // Determina el signo del zodíaco basado en el mes y día
    if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
        const aries = [
            "Aries: Aventurero y enérgico, te esperan grandes desafíos este mes.",
            "Aries: Este mes es el momento perfecto para tomar decisiones audaces.",
            "Aries: Tu determinación te llevará lejos en los próximos días.",
            "Aries: Es un buen mes para empezar a aprender Javascrit."
            //separados con coma "," podrías agregar mas frases
        ];
        /*aqui llamamos a la funcion para que nos entregue de manera aleatorea uno de los mensajes antes escritos
        
        indicando tambien numeros de la suerta recordando lo que dijo el profesor que a la hora de usar las comillas
        
        `` permite llamar a funciones con $
        
        */
        return `${aries[Math.floor(Math.random() * aries.length)]}\nNúmeros de la suerte: ${numerosAleatorios.join(", ")}`;

        //desde aqui agregamos mas signos respetando lo anterior descrito

    } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
        const tauro = [
            "Tauro: Persistente y confiable, este mes será de consolidación para ti.",
            "Tauro: Es hora de concentrarte en tus objetivos a largo plazo.",
            "Tauro: Tu paciencia será recompensada con grandes logros en el futuro cercano.",
            "Tauro: Es un buen mes para empezar a aprender Javascrit."
        ];
        return `${tauro[Math.floor(Math.random() * tauro.length)]}\nNúmeros de la suerte: ${numerosAleatorios.join(", ")}`;
    } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
        const geminis = [
            "Géminis: Tu mente estará más clara y enfocada este mes.",
            "Géminis: La comunicación será clave para resolver cualquier conflicto en tu vida.",
            "Géminis: Prepárate para nuevas aventuras y experiencias emocionantes.",
            "Géminis: Es un buen mes para empezar a aprender Javascrit."
        ];
        return `${geminis[Math.floor(Math.random() * geminis.length)]}\nNúmeros de la suerte: ${numerosAleatorios.join(", ")}`;
    } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
        const cancer = [
            "Cáncer: Sensible y protector, este mes te encontrarás más conectado con tus emociones.",
            "Cáncer: Confía en tu intuición para tomar decisiones importantes este mes.",
            "Cáncer: Dedica tiempo a cuidar tu bienestar emocional y mental.",
            "Cáncer: Es un buen mes para empezar a aprender Javascrit."
        ];
        return `${cancer[Math.floor(Math.random() * cancer.length)]}\nNúmeros de la suerte: ${numerosAleatorios.join(", ")}`;
    } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
        const leo = [
            "Leo: Es tu momento de brillar y destacarte en todo lo que hagas este mes.",
            "Leo: Confía en tu creatividad para superar cualquier obstáculo que se presente.",
            "Leo: No temas expresar tus ideas y opiniones, serán bien recibidas por los demás.",
            "Leo: Es un buen mes para empezar a aprender Javascrit."
        ];
        return `${leo[Math.floor(Math.random() * leo.length)]}\nNúmeros de la suerte: ${numerosAleatorios.join(", ")}`;
    } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
        const virgo = [
            "Virgo: Organizado y metódico, este mes será perfecto para establecer nuevas rutinas.",
            "Virgo: Presta atención a los detalles, te ayudarán a alcanzar tus objetivos con éxito.",
            "Virgo: Sé paciente contigo mismo y con los demás, grandes cosas están por venir.",
            "Virgo: Es un buen mes para empezar a aprender Javascrit."
        ];
        return `${virgo[Math.floor(Math.random() * virgo.length)]}\nNúmeros de la suerte: ${numerosAleatorios.join(", ")}`;
    } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
        const libra = [
            "Libra: Equilibrado y sociable, tu mes estará lleno de armonía y conexiones.",
            "Libra: Este mes es perfecto para resolver conflictos y fortalecer relaciones.",
            "Libra: Mantén tu mente abierta a nuevas ideas y oportunidades.",
            "Libra: Es un buen mes para empezar a aprender Javascrit."
        ];
        return `${libra[Math.floor(Math.random() * libra.length)]}\nNúmeros de la suerte: ${numerosAleatorios.join(", ")}`;
    } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
        const escorpio = [
            "Escorpio: Intenso y apasionado, este mes te encontrarás más conectado con tus emociones.",
            "Escorpio: Aprovecha tu intuición para tomar decisiones importantes en tu vida.",
            "Escorpio: No temas los cambios, son oportunidades para crecer y transformarte.",
            "Escorpio: Es un buen mes para empezar a aprender Javascrit."
        ];
        return `${escorpio[Math.floor(Math.random() * escorpio.length)]}\nNúmeros de la suerte: ${numerosAleatorios.join(", ")}`;
    } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
        const sagitario = [
            "Sagitario: Optimista y aventurero, este mes te espera una gran cantidad de energía positiva.",
            "Sagitario: Confía en tus instintos para tomar decisiones audaces y alcanzar tus metas.",
            "Sagitario: Mantén una mente abierta y explora nuevas posibilidades este mes.",
            "Sagitario: Es un buen mes para empezar a aprender Javascrit."
        ];
        return `${sagitario[Math.floor(Math.random() * sagitario.length)]}\nNúmeros de la suerte: ${numerosAleatorios.join(", ")}`;
    } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
        const capricornio = [
            "Capricornio: Disciplinado y ambicioso, este mes es perfecto para establecer metas claras y alcanzables.",
            "Capricornio: Organiza tu tiempo y recursos de manera eficiente para maximizar tu productividad.",
            "Capricornio: La perseverancia será clave para superar cualquier desafío que se presente.",
            "Capricornio: Es un buen mes para empezar a aprender Javascrit."
        ];
        return `${capricornio[Math.floor(Math.random() * capricornio.length)]}\nNúmeros de la suerte: ${numerosAleatorios.join(", ")}`;
    } else if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
        const acuario = [
            "Acuario: Innovador y visionario, este mes será ideal para pensar en grande y buscar soluciones creativas.",
            "Acuario: No temas destacarte por tus ideas únicas, pueden llevarte muy lejos este mes.",
            "Acuario: Mantén una mentalidad abierta y dispuesta a aprender de nuevas experiencias.",
            "Acuario: Es un buen mes para empezar a aprender Javascrit."
        ];
        return `${acuario[Math.floor(Math.random() * acuario.length)]}\nNúmeros de la suerte: ${numerosAleatorios.join(", ")}`;
    } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
        const piscis = [
            "Piscis: Sensible y compasivo, este mes te encontrarás más conectado con tu intuición y empatía.",
            "Piscis: Dedica tiempo a cuidar tu bienestar emocional y espiritual este mes.",
            "Piscis: Confía en tu creatividad para superar cualquier desafío que se presente.",
            "Piscis: Es un buen mes para empezar a aprender Javascrit."
        ];
        return `${piscis[Math.floor(Math.random() * piscis.length)]}\nNúmeros de la suerte: ${numerosAleatorios.join(", ")}`;
    }
    /* Agrega más signos y frases aquí según sea necesario recuerda siempre abrir y cerrar llaves, parentesis,() [] {}*/

    // Si no se encuentra ningún signo, devuelve un mensaje por defecto
    return "Lo siento, no se pudo determinar tu horóscopo para este mes.";
}

// Función para obtener y mostrar el horóscopo
function mostrarHoroscopo() {
    const nombre = prompt("Ingresa tu nombre:");
    const mesNacimiento = prompt("Ingresa el número de tu mes de nacimiento (1-12):");
    const diaNacimiento = prompt("Ingresa el número de tu día de nacimiento:");

    const horoscopo = obtenerHoroscopo(mesNacimiento, diaNacimiento);
    alert(`Hola ${nombre}, tu signo es ${horoscopo}`);
}

function reintentar(){
    const volver = mostrarHoroscopo();
    return volver
}
// Función para dejar un mensaje en la consola
function dejarMensaje() {
    console.log(`Hola ${nombre}, tu signo es ${horoscopo}`);
}

// Llama a la función para mostrar el horóscopo al cargar la página
//mostrarHoroscopo(); //esto lo comenté por que en principio iba a cargar todo de una vez, ya luego le hice un pequeño css

// Llama a la función para dejar un mensaje en la consola
dejarMensaje();

function modoNoche(){
    var body= document.body;
    body.classList.toggle("noche");
}
