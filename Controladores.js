function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value / 100;
    const resultadoDiv = document.getElementById('resultado');

    if (peso > 0 && altura > 0) {
        const imc = (peso / (altura * altura)).toFixed(1);
        let categoria = "";

        if (imc < 18.5) categoria = "Bajo peso";
        else if (imc < 24.9) categoria = "Peso normal";
        else if (imc < 29.9) categoria = "Sobrepeso";
        else categoria = "Obesidad";

        resultadoDiv.innerHTML = `Tu IMC es <strong>${imc}</strong> - Clasificación: <strong>${categoria}</strong>`;
        resultadoDiv.style.color = "#1d3557";
    } else {
        resultadoDiv.innerHTML = "Por favor, ingresa valores válidos.";
    }
}
