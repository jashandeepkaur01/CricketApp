import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
export default function TypesOfRuns({ match }) {
    console.log(match);
    let team1 = match.teams[0];
    let team2 = match.teams[1];
    const teamData = [
        {
            name: '6s',
            [team1]: match.innings[0].battingTeam.sixes,
            [team2]: match.innings[1].battingTeam.sixes
        },
        {
            name: '4s',
            [team1]: match.innings[0].battingTeam.fours,
            [team2]: match.innings[1].battingTeam.fours
        },
        {
            name: '3s',
            [team1]: match.innings[0].battingTeam.threes,
            [team2]: match.innings[1].battingTeam.threes
        },
        {
            name: '2s',
            [team1]: match.innings[0].battingTeam.twos,
            [team2]: match.innings[1].battingTeam.twos
        },
    ]
    return (
        <div className="w-75 mx-auto">
            <h5 className="ms-3">Types of Runs</h5>
            <BarChart
                width={500}
                height={300}
                data={teamData}
                layout='vertical'
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="1 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" />
                <Tooltip />
                <Legend />
                <Bar dataKey={team1} fill="#8884d8" />
                <Bar dataKey={team2} fill="#82ca9d" />
            </BarChart>
        </div>
    );
}
