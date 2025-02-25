function calcularExplicacion(precio, tamanio, distancia) {
    let mensaje = "";

    if (precio > 1075) {
        mensaje += `<div class="bad">El precio de ${precio} está por encima de la media (1075).</div>`;
    } else {
        mensaje += `<div class="good">El precio de ${precio} está por debajo de la media (1075).</div>`;
    }

    if (tamanio > 63) {
        mensaje += `<br><div class="good">El tamaño de ${tamanio} m² está por encima de la media (63 m²).</div>`;
    } else {
        mensaje += `<br><div class="bad">El tamaño de ${tamanio} m² está por debajo de la media (63 m²).</div>`;
    }

    if (distancia > 26.5) {
        mensaje += `<br><div class="bad">La distancia de ${distancia} min está por encima de la media (26.5 min).</div>`;
    } else {
        mensaje += `<br><div class="good">La distancia de ${distancia} min está por debajo de la media (26.5 min).</div>`;
    }

    return mensaje;
}

function calcularValor(precio, tamanio, distancia){
    // Normalizar valores usando min-max
    const precio_norm = (precio-780)/(1200-780)
    const tamanio_norm = (tamanio-23)/(128-23)
    const distancia_norm = (distancia-10)/(40-10)
    // Escalar valores
    const precio_escalado = precio_norm * (-0.6)
    const tamanio_escalado = tamanio_norm * 1.2
    const distancia_escalado = distancia_norm * (-1.4)
    // Concatenar
    const result = precio_escalado + tamanio_escalado + distancia_escalado;

    return result;
}

function calcularPercentil(valor){
    percentiles=[
        [0.28,"2%"],
        [0.05,"8%"],
        [-0.18,"16%"],
        [-0.4,"35%"],
        [-0.63,"51%"],
        [-0.85,"66%"],
        [-1.08,"85%"]
    ];
    for (let percentil of percentiles) {
        if (valor > percentil[0]) {
            return percentil[1]; // devolver el percentil como %
        }
    }
    return "99.9%"; // Devolver el 100% es decir la peor casa
}

function performOperation() {
    // Get data from the dom
    const distancia = parseFloat(document.getElementById('distancia').value);
    const precio = parseFloat(document.getElementById('precio').value);
    const tamanio = parseFloat(document.getElementById('tamanio').value);

    // Perform calculations
    const result = calcularValor(precio,tamanio,distancia);
    const explicacion = calcularExplicacion(precio,tamanio,distancia);
    const percentil = calcularPercentil(result);

    // Represent data in the dom
    document.getElementById('percentil').innerHTML = percentil;
    document.getElementById('result').innerText = `Result: ${result}`;
    document.getElementById('explicacion').innerHTML = explicacion;

    document.getElementById('percentil').className = "bad"
    if(result > -0.4){
        document.getElementById('percentil').className = "mid"
    }
    if(result > -0.18){
        document.getElementById('percentil').className = "good"
    }

}
