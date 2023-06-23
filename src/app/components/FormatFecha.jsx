export const FormatFecha = (fecha)=> {
    const nuevaFecha = new Date(fecha);
    const format =
      nuevaFecha.getMonth() +
      1 +
      "-" +
      (nuevaFecha.getDate() + 1) +
      "-" +
      nuevaFecha.getFullYear();
    const fechaFormateada = new Date(format);
    return fechaFormateada.toLocaleDateString("es-CL");
}
