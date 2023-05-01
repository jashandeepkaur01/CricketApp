import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

function Worm({ match }) {
    let team1 = match.teams[0];
    let team2 = match.teams[1];
    let totalRuns1 = match.innings[0].bowlingTeam.totalOvers.map((over, idx) => over.totalRuns);
    let totalRuns2 = match.innings[1].bowlingTeam.totalOvers.map((over, idx) => over.totalRuns);
    let overs = [1, 2, 3, 5, 7, 9, 11, 13, 15, 17, 19, 20];
    console.log(totalRuns1);
    console.log(totalRuns2)
    const runRateData = overs.map((element, idx) => {
        return {
            name: 'Run Rate',
            [team1]: totalRuns1[idx],
            [team2]: totalRuns2[idx],
            over: element,
        }
    })
    return (
        <div className="w-75 mx-auto mt-4">
            <h5 className="ms-3">Worm</h5>
            <LineChart
                width={500}
                height={300}
                data={runRateData}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                className='mx-auto'
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="over" />
                <YAxis dataKey={team1} tickCount={75} interval={14} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={team1} stroke="#8884d8" activeDot={{ r: 4 }} />
                <Line type="monotone" dataKey={team2} stroke="#82ca9d" />
            </LineChart>
        </div>
    );
}

export default Worm



