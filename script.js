document.addEventListener('DOMContentLoaded', function () {
    const palabraClaveInput = document.getElementById('palabraClave');
    const resultadosDiv = document.getElementById('resultados');
    const parrafo = 'Este es un ejemplo de texto donde puedes buscar palabras clave. Puedes probar buscando palabras como "ejemplo", "buscar" o "palabras" en este párrafo.';

    palabraClaveInput.addEventListener('input', function () {
        const palabraClave = palabraClaveInput.value.toLowerCase();
        const palabras = parrafo.split(' ');

        const coincidencias = palabras.filter(palabra => palabra.toLowerCase().includes(palabraClave));

        const resultadosHTML = coincidencias.map(palabra => `<span class="resaltado">${palabra}</span>`).join(' ');

        resultadosDiv.innerHTML = `Resultados: ${resultadosHTML}`;
    });
});
