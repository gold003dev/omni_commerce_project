<template>
  <apexchart height="380" :options="options" :series="series"></apexchart>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: "Desktops",
          data: [30, 41, 35, 51, 49, 62, 69, 91, 126],
        },
      ],
      options: {
        chart: {
          height: 380,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        colors: ["#ffbc00"],
        stroke: {
          width: [4],
          curve: "straight",
        },

        title: {
          text: "Product Trends by Month",
          align: "center",
        },
        grid: {
          row: {
            colors: ["transparent", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.2,
          },
          borderColor: "#f1f3fa",
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        },
        responsive: [
          {
            breakpoint: 600,
            options: {
              chart: {
                toolbar: {
                  show: false,
                },
              },
              legend: {
                show: false,
              },
            },
          },
        ],
      },
    };
  },
};
</script>
