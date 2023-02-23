// import React, {Component} from "react";
// import { Chart as ChartJS}  from "chart.js/auto";
// import ReactDOM from 'react-dom/client';

// type MyProps = {

// }

// type MyState = {
//   type: string;
//   data: Data;
//   options: Option;
// }

// type Data = {
//   labels: string[];
//   datasets: Sets[]
// }

// type Sets = {
//   label: string;
//   data: any;
//   backgroundColor: string[];
//   borderColor: string[];
//   borderWidth: number;
// }

// type Option = {
//   indexAxis: string;
//   scales: Scale;
// }
//  type Scale = {
//   x: Start
//  }

//  type Start = {
//   beginAtZero: boolean
//  }

// class Chart extends Component <MyProps, MyState> {
//   state: MyState = {
//     type: "bar",
//     data: {
//       labels: ["Cost of Living", "Environmental Quality", "Safety", "Economy", "Commute", "Housing", "Education", "Healthcare"],
//       datasets: [
//         {
//           label: "Rating out of 10",
//           data: waterData,
//           backgroundColor: [
//             "rgba(113, 223, 255, 0.2)",
//             "rgba(171, 217, 255, 0.2)",
//             "rgba(113, 223, 231, 0.2)",
//             "rgba(75, 192, 192, 0.2)",
//             "rgba(54, 162, 235, 0.2)",
//             "rgba(113, 223, 255, 0.2)",
//             "rgba(171, 217, 255, 0.2)",
//           ],
//           borderColor: [
//             "rgb(113, 223, 255)",
//             "rgb(171, 217, 255)",
//             "rgb(113, 223, 231)",
//             "rgb(75, 192, 192)",
//             "rgb(54, 162, 235)",
//             "rgb(113, 223, 255)",
//             "rgb(171, 217, 2255)",
//           ],
//           borderWidth: 1,
//         },
//       ],
//     },
//     options: {
//       indexAxis: 'y',
//       scales: {
//         x: {
//           beginAtZero: true,
//         },
//       },
//     },
//   };

//   scoreGraph = () => {
//     const graph = ReactDOM.createRoot(
//       document.getElementById('chart-container') as HTMLElement
//     )

//     const something = new Chart(graph, this.state)
//     return something
    
//   }

//   render() {
//     return(
//       <div>
//         {this.scoreGraph()}
//       </div>
//     )
//   }

// }


import { Bar } from "react-chartjs-2";
export const BarChart = ({ chartData }) => {
  return (
    <div className="chart-container">
      <h2 style={{ textAlign: "center" }}>Bar Chart</h2>
      <Bar
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Users Gained between 2016-2020"
            },
            legend: {
              display: false
            }
          }
        }}
      />
    </div>
  );
};

export default BarChart