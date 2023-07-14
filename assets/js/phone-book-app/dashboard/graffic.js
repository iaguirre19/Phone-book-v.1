// Obtener el contexto del canvas
var ctx = document.getElementById("miGrafico").getContext("2d");

// Crear los datos del gráfico
var data = {
  labels: ["Rojo", "Azul", "Amarillo"], // Las etiquetas de cada sector
  datasets: [
    {
      data: [100, 120, 100], // Los valores de cada sector
      backgroundColor: ["red", "blue", "yellow"], // Los colores de cada sector
    },
  ],
};

// Crear el gráfico
var miGrafico = new Chart(ctx, {
  type: "pie", // Tipo de gráfico circular
  data: data, // Los datos del gráfico
  options: {
    // Las opciones del gráfico (ver documentación para más detalles)
    responsive: true, // El gráfico se adapta al tamaño del contenedor
    plugins: {
      legend: {
        position: "top", // La leyenda se muestra en la parte superior
      },
      title: {
        display: true, // Se muestra el título del gráfico
        text: "Ejemplo de gráfico circular", // El texto del título
      },
    },
  },
});
