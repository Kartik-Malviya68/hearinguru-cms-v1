import { ApexOptions } from "apexcharts";

export const DonutChartDataSeries = [35.1, 23.5, 2.4];

export const DonutChartDataOptions: ApexOptions = {
  // fill: {
  //   colors: ["red", "blue"],
  //   // Other properties...
  // },
  colors: ["#1C64F2", "#16BDCA", "#FDBA8C"],

  chart: {
    height: 320,
    width: "100%",
    type: "donut",
  },

  stroke: {
    colors: ["transparent"],
    lineCap: "butt",
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          name: {
            show: true,
            fontFamily: "Inter, sans-serif",
            offsetY: 20,
          },
          total: {
            showAlways: true,
            show: true,
            label: "Consultancies",
            fontFamily: "Inter, sans-serif",
            formatter: function (w: { globals: { seriesTotals: any[] } }) {
              const sum = w.globals.seriesTotals.reduce((a: any, b: any) => {
                return a + b;
              }, 0);
              return `${sum}k`;
            },
          },
          value: {
            show: true,
            fontFamily: "Inter, sans-serif",
            offsetY: -20,
            formatter: function (value: string) {
              return value + "k";
            },
          },
        },
        size: "80%",
      },
    },
  },
  grid: {
    padding: {
      top: -2,
    },
  },
  labels: ["Appointment", "Warranty & Exchange", "Repaie & Maintenance"],
  dataLabels: {
    enabled: false,
  },
  legend: {
    position: "bottom",
    horizontalAlign: "left",
    customLegendItems: ["Appointment", "Warranty & Exchange", "Repaie & Maintenance"],
    itemMargin:{
      horizontal: 10,
      vertical: 5
    }


  },
  yaxis: {
    labels: {
      
    },
  },
  xaxis: {
    labels: {
      formatter: function (value: string) {
        return value + "k";
      },
    },
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
  },
};
