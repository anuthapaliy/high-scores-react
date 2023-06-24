import React from "react";
import PlayerScore from "./PlayerScore";

const HighScoreTable = ({ country, scores }) => {
  // const sortedScores = scores.sort((a, b) => b.s - a.s);
  return (
    <div className="high-score-box">
      <h2>HIGH SCORES: {country}</h2>
      <table>
        <thead>
          <tr>
            <th>Player Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {scores.map((score, index) => (
            <PlayerScore key={index} name={score.n} score={score.s} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HighScoreTable;
