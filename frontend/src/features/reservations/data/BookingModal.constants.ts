export const HOURS = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
];



 export const COVERAGES = [
    {
      id: "ligero",
      name: "Viaja Ligero",
      stars: "★☆☆",
      tag: "Con Cobertura",
      price_per_day: 624.93,
      deposit: 10000,
      features: [
        {
          text: "Protección parcial contra daños por colisión con deducible del 10%",
          included: true,
        },
        {
          text: "Cobertura contra Robo Total con 20% de Deducible",
          included: true,
        },
        { text: "Cobertura en llantas y cristales", included: false },
        { text: "Asistencia en el camino", included: false },
        { text: "Gastos médicos para pasajeros", included: false },
      ],
    },
    {
      id: "seguro",
      name: "Maneja Seguro",
      stars: "★★☆",
      tag: "Cobertura Complementaria",
      price_per_day: 925.97,
      deposit: 10000,
      features: [
        {
          text: "Protección parcial contra daños por colisión con deducible del 10%",
          included: true,
        },
        {
          text: "Cobertura contra Robo Total con 20% de Deducible",
          included: true,
        },
        { text: "Cobertura en llantas y cristales", included: true },
        { text: "Asistencia en el camino", included: true },
        { text: "Gastos médicos para pasajeros", included: true },
      ],
    },
    {
      id: "maximo",
      name: "Disfruta al máximo",
      stars: "★★★",
      tag: "Protección Total",
      price_per_day: 1478.34,
      deposit: 1600,
      features: [
        {
          text: "Cobertura contra Daños al Vehículo con 0% de Deducible",
          included: true,
        },
        {
          text: "Cobertura contra Robo Total del vehículo con 0% de Deducible",
          included: true,
        },
        { text: "Cobertura en llantas y cristales", included: true },
        {
          text: "Daños a terceros ampliados hasta por $3,000,000.00 MXN",
          included: true,
        },
        { text: "Asistencia en el camino", included: true },
        { text: "Gastos médicos para pasajeros", included: true },
      ],
    },
  ];