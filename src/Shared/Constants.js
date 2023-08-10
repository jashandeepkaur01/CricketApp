export const STRINGS = {
  SOMETHING_WENT_WRONG: "Sorry, something went wrong.",
  OFFLINE_MESSAGE:
    "You appear to be offline. Please check your internet connection.",
};
export const Carousel_bg_img = '../Assets/Images/helmet.jpg';
export const BASE_URL = "https://cricheroes-312bd-default-rtdb.firebaseio.com/";
// export const BASE_URL = "https://customcricketmatch-default-rtdb.firebaseio.com/";
export const API = {
  PLAYER_DATA: "players.json",
  TEAM_DATA: "teams.json",
  MATCH_DATA: "match.json",
  UPDATE_PLAYER_DATA: "players/<key>.json",
  UPDATE_MATCH_DATA: "match/<key>.json",
  MATCHES: "matches.json"
}
export const TOTAL_OVERS = 6;
export const INNING_COMPLETED = "Inning 1 is Completed....!!!";
export const MATCH_COMPLETED = "Match is Completed...!!!";

export const validCharacters = /^[a-zA-Z]+$/;
export const validPhoneNumber = /^\d{10}$/;

export const error = "field is required";

export const playerTableHeading = [
  {
    label: "Name",
    key: "Name",
  },
  {
    label: "Age",
    key: "Age",
  },
  {
    label: "JerseyNo",
    key: "JerseyNo",
  },
  {
    label: "PhoneNo",
    key: "PhoneNo",
  },
  {
    label: "Country",
    key: "Country",
  },
  {
    label: "Matches Played",
    key: "MatchesPlayed",
  },
  {
    label: "Team",
    key: "Team",
  },
];

export const teamHeadings = [
  {
    label: "TeamName",
    key: "teamName",
  },
  {
    label: "TeamCaptain",
    key: "teamCaptain",
  },
  {
    label: "TeamType",
    key: "teamType",
  },
  {
    label: "TeamPlayers",
    key: "teamPlayers",
  },
];

export const battingSummaryHeading = [
  {
    label: "Innings Batted",
    key: "inningsBatted",
  },
  {
    label: "Runs Scored",
    key: "runsScored",
  },
  {
    label: "Highest Score",
    key: "highestScore",
  },
  {
    label: "Avg Score",
    key: "avgScore",
  },
  {
    label: "Balls Faced",
    key: "ballsFaced",
  },
  {
    label: "Batting Strike Rate",
    key: "battingStrikeRate",
  },
  {
    label: "100s",
    key: "centuries",
  },
  {
    label: "200s",
    key: "doubleCenturies",
  },
  {
    label: "50s",
    key: "halfCenturies",
  },
  {
    label: "4s",
    key: "fours",
  },
  {
    label: "6s",
    key: "sixes",
  },
]
export const bowlingSummaryHeading = [
  {
    label: "Innings Bowled",
    key: "inningsBowled",
  },
  {
    label: "Balls Bowled",
    key: "ballsBowled",
  },
  {
    label: "Runs Conceded",
    key: "runsConceded",
  },
  {
    label: "Wickets",
    key: "wkts",
  },
  {
    label: "Bowling Average",
    key: "bowlingAvg",
  },
  {
    label: "Bowling Strike Rate",
    key: "bowlingStrikeRate",
  },
  {
    label: "Econ",
    key: "econ",
  },
]
export const battingScoreCardHeading = ['Batter', '', 'R', 'B', '4s', '6s', 'SR'];
export const bowlingScoreCardHeading = ['Bowler', 'O', 'R', 'W', 'NB', 'WB', 'Eco'];
export const controlButtons = [0, 1, 2, 3, 4, 6, 'NB', 'WB', 'WC', 'DB'];

const currBatsmanData = {
  name: '',
  key: '',
  runs: 0,
  ballsPlayed: 0,
  sixes: 0,
  fours: 0,
  threes: 0,
  twos: 0,
  centuries: 0,
  doubleCenturies: 0,
  halfCenturies: 0,
  strikeRate: 0,
  out: {
    outStatus: false,
    outByBowler: '',
    outAtBall: 0,
  }
}
export const inningData = {
  battingTeam: {
    teamName: '',
    totalRuns: 0,
    doubleCenturies: 0,
    centuries: 0,
    halfCenturies: 0,
    sixes: 0,
    fours: 0,
    threes: 0,
    twos: 0,
    players: [],
    wkts: 0,
    yetToBat: [],
    fallOfWickets: [],
    currBatters: [currBatsmanData, currBatsmanData]
  },
  bowlingTeam: {
    teamName: '',
    currBowler: {
      wkts: 0,
      WB: 0,
      NB: 0,
      Econ: 0.00,
      runsConceded: 0,
      oversThrown: 0,
    },
    bowlers: [],
    overs: [],
    currOver: 0,
    currOverBalls: [],
  }
}