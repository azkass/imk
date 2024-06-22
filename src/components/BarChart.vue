<template>
    <div>
      <canvas ref="chartCanvas"></canvas>
    </div>
  </template>
  
  <script>
  import { onMounted, onBeforeUnmount, ref } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  Chart.register(...registerables);
  
  export default {
    name: 'BarChart',
    props: {
      chartData: {
        type: Object,
        required: true
      },
      chartConfig: {
        type: Object,
        required: true
      }
    },
    setup(props) {
      const chartCanvas = ref(null);
      let chartInstance = null;
  
      const renderChart = () => {
        if (chartInstance) {
          chartInstance.destroy();
        }
        chartInstance = new Chart(chartCanvas.value, {
          type: props.chartConfig.type,
          data: props.chartData,
          options: props.chartConfig.options
        });
      };
  
      onMounted(() => {
        renderChart();
      });
  
      onBeforeUnmount(() => {
        if (chartInstance) {
          chartInstance.destroy();
          chartInstance = null;
        }
      });
  
      return {
        chartCanvas
      };
    }
  };
  </script>
  
  <style scoped>
  /* Tambahkan style jika diperlukan */
  </style>
  