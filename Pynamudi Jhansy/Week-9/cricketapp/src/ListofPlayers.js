import React from "react";

function ListofPlayers() {

    const players = [
        { name: "Virat Kohli", score: 90 },
        { name: "Rohit Sharma", score: 85 },
        { name: "Shubman Gill", score: 60 },
        { name: "KL Rahul", score: 75 },
        { name: "Hardik Pandya", score: 55 },
        { name: "Ravindra Jadeja", score: 65 },
        { name: "R Ashwin", score: 72 },
        { name: "Mohammed Shami", score: 40 },
        { name: "Jasprit Bumrah", score: 68 },
        { name: "Surya Kumar", score: 95 },
        { name: "Ishan Kishan", score: 58 }
    ];

    const lowScorePlayers = players.filter(player => player.score < 70);

    return (
        <div>
            <h2>List of Players</h2>

            <h3>All Players</h3>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>

            <h3>Players with Score below 70</h3>
            <ul>
                {lowScorePlayers.map((player, index) => (
                    <li key={index}>
                        {player.name} - {player.score}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ListofPlayers;