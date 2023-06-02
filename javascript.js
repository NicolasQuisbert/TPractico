document.getElementById("Resumen").addEventListener("click", function () {
    let cantEnt = document.getElementById("cantEntradas").value;
    console.log("cantEnt: " + cantEnt);
    
    let porcDesc = document.getElementById("porDescuento").value;
    console.log("porcDesc: " + porcDesc);

    let descuento = (cantEnt * 200) * porcDesc / 100;
    console.log("descuento: " + descuento);

    let precioTotal = (cantEnt * 200) - descuento;
    console.log("precioFin: " + precioTotal);

    document.getElementById("totalPagar2").value = precioTotal;
    
});

function Borrar() {
    alert("El formulario se a Reseteado!");
}