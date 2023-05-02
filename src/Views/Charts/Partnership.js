// // import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

// // export default function Partnership({ match }) {

// //     const data = [
// //         {
// //             name: 'Page A',
// //             uv: 4000,
// //             pv: 2400,
// //             amt: 2400,
// //         },
// //         {
// //             name: 'Page B',
// //             uv: 3000,
// //             pv: 1398,
// //             amt: 2210,
// //         },
// //         {
// //             name: 'Page C',
// //             uv: 2000,
// //             pv: 9800,
// //             amt: 2290,
// //         },
// //         {
// //             name: 'Page D',
// //             uv: 2780,
// //             pv: 3908,
// //             amt: 2000,
// //         },
// //         {
// //             name: 'Page E',
// //             uv: 1890,
// //             pv: 4800,
// //             amt: 2181,
// //         },
// //         {
// //             name: 'Page F',
// //             uv: 2390,
// //             pv: 3800,
// //             amt: 2500,
// //         },
// //         {
// //             name: 'Page G',
// //             uv: 3490,
// //             pv: 4300,
// //             amt: 2100,
// //         },
// //     ];
// //     return (
// //         <div className="w-75 mx-auto mt-4">
// //             <h5 className="ms-3">Partnership</h5>
// //             <BarChart
// //                 width={500}
// //                 height={300}
// //                 data={data}
// //                 margin={{
// //                     top: 20,
// //                     right: 30,
// //                     left: 20,
// //                     bottom: 5,
// //                 }}
// //                 className='mx-auto'
// //             >
// //                 <CartesianGrid strokeDasharray="3 3" />
// //                 <XAxis dataKey="name" />
// //                 <YAxis />
// //                 <Tooltip />
// //                 <Legend />
// //                 <Bar dataKey="pv" stackId="a" fill="#8884d8" />
// //                 <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
// //             </BarChart>
// //         </div>
// //     );
// // }
// import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

// export default function Partnership() {

//     const data = [
//         {
//             name: 'Page A',
//             uv: 40,
//             pv: -24,
//             amt: 2400,
//         },
//         {
//             name: 'Page B',
//             uv: 30,
//             pv: -13,
//             amt: 2210,
//         },
//         {
//             name: 'Page C',
//             uv: 20,
//             pv: -98,
//             amt: 2290,
//         },
//         {
//             name: 'Page D',
//             uv: 27,
//             pv: -39,
//             amt: 2000,
//         },
//         {
//             name: 'Page E',
//             uv: 18,
//             pv: -48,
//             amt: 2181,
//         },
//         {
//             name: 'Page F',
//             uv: 23,
//             pv: -38,
//             amt: 2500,
//         },
//         {
//             name: 'Page G',
//             uv: 34,
//             pv: -43,
//             amt: 2100,
//         },
//     ];

//     return (
//         <div className="w-75 mx-auto mt-4">
//             <h5 className="ms-3">Partnership</h5>
//             <BarChart
//                 layout='vertical'
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                     top: 20,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//                 className='mx-auto'
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis type='number' tickCount={12} />
//                 <YAxis dataKey="name" type='category' />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="pv" stackId="a" fill="#8884d8" />
//                 <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
//             </BarChart>
//         </div>
//     );
// }

import anychart from 'anychart';

function Partnership() {
    anychart.onDocumentReady(function () {
        // create data set
        var dataSet = anychart.data.set(getData());

        // map data for the first series, take x from the zero column and value from the first column of data set
        var firstSeriesData = dataSet.mapAs({ x: [0, 'name'], value: [0, 'value'], balls: 2 });

        // map data for the second series, take x from the zero column and value from the second column of data set
        var secondSeriesData = dataSet.mapAs({ x: [1, 'name'], value: [1, 'value'], balls: 2 });

        // create bar chart
        var chart = anychart.bar();

        // turn on chart animation
        chart.animation(true);

        // set padding
        chart.padding([10, 20, 5, 20]);

        // force chart to stack values by Y scale.
        chart.yScale().stackMode('value');

        // format y axis labels so they are always positive
        chart
            .yAxis()
            .labels()
            .format(function () {
                return Math.abs(this.value).toLocaleString();
            });

        // set title for Y-axis
        chart.yAxis(0).title('Runs in partnership');

        // allow labels to overlap
        chart.xAxis(0).overlapMode('allow-overlap');

        // turn on extra axis for the symmetry
        chart
            .xAxis(1)
            .enabled(true)
            .orientation('right')
            .overlapMode('allow-overlap');

        // set chart title text
        chart.title('Partnership of Players');

        chart.interactivity().hoverMode('by-x');

        chart
            .tooltip()
            .title(false)
            .separator(false)
            .displayMode('separated')
            .positionMode('point')
            .useHtml(true)
            .fontSize(12)
            .offsetX(5)
            .offsetY(0)
            .format(function (data) {

                console.log(data);
                return (
                    '<span style="color: #D9D9D9">(</span>' +
                    Math.abs(this.value).toLocaleString() + '<span>/</span>' + this.balls + '<span>)</span>'
                );
            });

        // temp variable to store series instance
        var series;

        // create first series with mapped data
        series = chart.bar(firstSeriesData);
        series.name('Player 2').color('darkOrange');
        series.tooltip().position('right-center').anchor('left-center');

        // create second series with mapped data
        series = chart.bar(secondSeriesData);
        series.name('Player 1');
        series.tooltip().position('left-center').anchor('right-center');

        // turn on legend
        chart
            .legend()
            .enabled(true)
            .inverted(true)
            .fontSize(13)
            .padding([0, 0, 20, 0]);

        // set container id for the chart
        chart.container('containerr');

        // initiate chart drawing
        chart.draw();
    });

    function getData() {
        return [
            // ['Player 11', 53, 20, 'Player 21', -22],
            // ['Player 12', 10, 8, 'Player 22', -93],
            // ['Player 13', 76, 40, 'Player 23', -52],
            // ['Player 14', 88, 30, 'Player 24', -25],
            // ['Player 15', 82, 45, 'Player 25', -30],
            [
                {
                    value: {
                        value: 10,
                        balls: 20,
                        toString: function () {
                            return this.value
                        }
                    }, name: 'Point 1'
                },
                {
                    value: {
                        value: 13,
                        balls: 34,
                        toString: function () {
                            return this.value
                        }
                    }, name: 'Point 2'
                },
            ]
        ];
    }
    return (
        <div id='containerr' style={{ height: '400px' }}>

        </div>
    )
}

export default Partnership
