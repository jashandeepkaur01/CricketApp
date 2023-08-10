import axios from "axios";
let a = [
    {
        Name: "Virat Kohli",
        Age: "33",
        JerseyNo: "1",
        PhoneNo: "6127963022",
        Country: "India",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Ravindra Jadeja",
        Age: "33",
        JerseyNo: "1",
        PhoneNo: "8006965813",
        Country: "India",
        TypeofPlayer: "Bowler",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Manish Pandey",
        Age: "34",
        JerseyNo: "4",
        PhoneNo: "6127917252",
        Country: "India",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Jasprit Bumrah",
        Age: "6",
        JerseyNo: "6",
        PhoneNo: "7979742050",
        Country: "India",
        TypeofPlayer: "AllRounder",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Mayank Agarwal",
        Age: "36",
        JerseyNo: "12",
        PhoneNo: "7931370731",
        Country: "India",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Shreyas Iyer",
        Age: "26",
        JerseyNo: "13",
        PhoneNo: "6127921744",
        Country: "India",
        TypeofPlayer: "Bowler",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Yuzvendra Chahal",
        Age: "37",
        JerseyNo: "14",
        PhoneNo: "8847540227",
        Country: "India",
        TypeofPlayer: "AllRounder",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "KL Rahul",
        Age: "38",
        JerseyNo: "15",
        PhoneNo: "6219816682",
        Country: "India",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Hardik Pandya",
        Age: "32",
        JerseyNo: "16",
        PhoneNo: "8076813470",
        Country: "India",
        TypeofPlayer: "Bowler",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Kuldee Yadav",
        Age: "33",
        JerseyNo: "21",
        PhoneNo: "8247210654",
        Country: "India",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "ShardulThakur",
        Age: "34",
        JerseyNo: "25",
        PhoneNo: "917311560719",
        Country: "India",
        TypeofPlayer: "AllRounder",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Navdeep Saini",
        Age: "37",
        JerseyNo: "27",
        PhoneNo: "7979831984",
        Country: "India",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Navdeep Saini",
        Age: "37",
        JerseyNo: "27",
        PhoneNo: "7979831984",
        Country: "India",
        TypeofPlayer: "Bowler",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Usman Khawaja",
        Age: "34",
        JerseyNo: "21",
        PhoneNo: "6127962440",
        Country: "Australia",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Marnus Labuschagne",
        Age: "24",
        JerseyNo: "31",
        PhoneNo: "8249815672",
        Country: "Australia",
        TypeofPlayer: "AllRounder",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Steve Smith",
        Age: "29",
        JerseyNo: "12",
        PhoneNo: "8917230773",
        Country: "Australia",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Nuwan Thushara",
        Age: "23",
        JerseyNo: "12",
        PhoneNo: "6127938029",
        Country: "Srilanka",
        TypeofPlayer: "Bowler",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Dhanan jayaSilva",
        Age: "35",
        JerseyNo: "23",
        PhoneNo: "6127990737",
        Country: "Srilanka",
        TypeofPlayer: "AllRounder",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Wanindu Hasaranga",
        Age: "35",
        JerseyNo: "43",
        PhoneNo: "6127901284",
        Country: "Srilanka",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Ashen Bandara",
        Age: "35",
        JerseyNo: "13",
        PhoneNo: "6195168707",
        Country: "Srilanka",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Avishka Fernando",
        Age: "34",
        JerseyNo: "23",
        PhoneNo: "6127981465",
        Country: "Srilanka",
        TypeofPlayer: "Bowler",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Bhanuka Rajapaksa",
        Age: "44",
        JerseyNo: "13",
        PhoneNo: "8079099586",
        Country: "Srilanka",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Dasun Shanaka",
        Age: "45",
        JerseyNo: "3",
        PhoneNo: "7327024895",
        Country: "Srilanka",
        TypeofPlayer: "Bowler",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Charith Asalanka",
        Age: "35",
        JerseyNo: "4",
        PhoneNo: "7327024895",
        Country: "Srilanka",
        TypeofPlayer: "Bowler",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Pathum Nissanka",
        Age: "45",
        JerseyNo: "5",
        PhoneNo: "6127906619",
        Country: "Srilanka",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Sadeera Samarawickrama",
        Age: "35",
        JerseyNo: "6",
        PhoneNo: "6128554750",
        Country: "Srilanka",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Kusal Mendis",
        Age: "25",
        JerseyNo: "7",
        PhoneNo: "8917481691",
        Country: "Srilanka",
        TypeofPlayer: "AllRounder",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Travis Head",
        Age: "25",
        JerseyNo: "17",
        PhoneNo: "6060477761",
        Country: "Australia",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Scott Boland",
        Age: "28",
        JerseyNo: "17",
        PhoneNo: "6908038425",
        Country: "Australia",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Nathan Lyon",
        Age: "28",
        JerseyNo: "27",
        PhoneNo: "6127925279",
        Country: "Australia",
        TypeofPlayer: "Bowler",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Todd Murphy",
        Age: "28",
        JerseyNo: "29",
        PhoneNo: "7477645790",
        Country: "Australia",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Pat Cummins",
        Age: "28",
        JerseyNo: "39",
        PhoneNo: "8701626438",
        Country: "Australia",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Alex Carey",
        Age: "28",
        JerseyNo: "9",
        PhoneNo: "6127922243",
        Country: "Australia",
        TypeofPlayer: "AllRounder",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Peter Handscomb",
        Age: "28",
        JerseyNo: "9",
        PhoneNo: "6419243888",
        Country: "Australia",
        TypeofPlayer: "Batsman",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    },
    {
        Name: "Matt Renshaw",
        Age: "28",
        JerseyNo: "10",
        PhoneNo: "8180614197",
        Country: "Australia",
        TypeofPlayer: "Bowler",
        Team: "",
        MatchesPlayed: 0,
        BattingCareer: {
            inningsBatted: 0,
            runsScored: 0,
            highestScore: 0,
            avgScore: 0,
            ballsFaced: 0,
            battingStrikeRate: 0,
            centuries: 0,
            doubleCenturies: 0,
            halfCenturies: 0,
            fours: 0,
            sixes: 0,
        },
        BowlingCareer: {
            inningsBowled: 0,
            ballsBowled: 0,
            runsConceded: 0,
            wkts: 0,
            econ: 0,
            bowlingAvg: 0,
            bowlingStrikeRate: 0,
        }
    }
];

export default function Temp() {
    // let user = ["-NQdCmWDlLPOfrt7ZXMJ", "-NQdCmG5iOXuuQhs0VyT"];
    const func = () => {
        a.map((e) => {
            axios.post(
                // `https://customcricketmatch-default-rtdb.firebaseio.com/Vplayers.json`,
                `https://cricheroes-312bd-default-rtdb.firebaseio.com/players`,
                e
            );
        });
    };
    return (
        <div className="App">
            <h1>Hello CodeSandbox</h1>
            <button className="btn btn-danger" onClick={func}>CLockckck</button>
            <h2>Start editing to see some magic happen!</h2>
        </div>
    );
}
