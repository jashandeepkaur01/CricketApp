import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

export default function Manhattan({ match }) {
    let team1 = match.teams[0];
    let team2 = match.teams[1];
    const runs1 = match.innings[0].bowlingTeam.totalOvers.map(over => over.runs);
    const runs2 = match.innings[1].bowlingTeam.totalOvers.map(over => over.runs);
    const biggerArr = runs1.length > runs2.length ? runs1 : runs2;
    const newData = match.innings[0].bowlingTeam.totalOvers.map((over, idx) => {
        return {
            runs: over.runs,
            over: idx + 1,
        }
    })
    const tempData = biggerArr.map((element, idx) => {
        if (runs1[idx] === undefined)
            runs1[idx] = 0;
        else if (runs2[idx] === undefined)
            runs2[idx] = 0;
        return {
            [team1]: runs1[idx],
            [team2]: runs2[idx],
            over: idx + 1
        }
    })
    console.log(tempData, 'temp');
    const data = [
        {
            name: 'Page A',
            runs1: 4000,
            runs2: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            runs1: 3000,
            runs2: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            runs1: 2000,
            runs2: 9800,
            amt: 2290,
        },
    ];
    return (
        <div className="w-75 mx-auto mt-4">
            <h5 className="ms-3">Manhattan</h5>
            <BarChart
                width={500}
                height={300}
                data={tempData}
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
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey={team1} fill="#8884d8" />
                <Bar dataKey={team2} fill="#82ca9d" />
            </BarChart>
        </div>
    );
}
