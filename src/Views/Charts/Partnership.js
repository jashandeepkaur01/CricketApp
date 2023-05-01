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
        var firstSeriesData = dataSet.mapAs({ x: 0, value: 1 });

        // map data for the second series, take x from the zero column and value from the second column of data set
        var secondSeriesData = dataSet.mapAs({ x: 0, value: 2 });

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
        chart.yAxis(0).title('Revenue in Dollars');

        // allow labels to overlap
        chart.xAxis(0).overlapMode('allow-overlap');

        // turn on extra axis for the symmetry
        chart
            .xAxis(1)
            .enabled(true)
            .orientation('right')
            .overlapMode('allow-overlap');

        // set chart title text
        chart.title('Cosmetic Sales by Gender');

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
            .format(function () {
                return (
                    '<span style="color: #D9D9D9">$</span>' +
                    Math.abs(this.value).toLocaleString()
                );
            });

        // temp variable to store series instance
        var series;

        // create first series with mapped data
        series = chart.bar(firstSeriesData);
        series.name('Females').color('HotPink');
        series.tooltip().position('right').anchor('left-center');

        // create second series with mapped data
        series = chart.bar(secondSeriesData);
        series.name('Males');
        series.tooltip().position('left').anchor('right-center');

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
            ['Nail polish', 5376, -229],
            ['Eyebrow pencil', 10987, -932],
            ['Rouge', 7624, -5221],
            ['Lipstick', 8814, -256],
        ];
    }
    return (
        <div id='containerr'>

        </div>
    )
}

export default Partnership
