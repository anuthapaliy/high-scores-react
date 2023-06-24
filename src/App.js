import React, { useState } from "react";
import HighScoreTable from "./HighScoreTable";
import allCountryScores from "./scores";
import "./App.css";

function App() {
  const [sortOrder, setSortOrder] = useState("ascending");

  const handleToggleSortOrder = () => {
    if (sortOrder === "ascending"){
      setSortOrder("descending");
    } else {
      setSortOrder("ascending");
    }
  }
  //sort the allCountryScores array based on country name in alphabetical order
  // const sortedCountryScores = allCountryScores.sort((a,b) => {
  //   const countryA = a.name.toUpperCase();
  //   const countryB = b.name.toUpperCase();

  //   if(countryA < countryB) {
  //     return -1;
  //   }
  //   if (countryA > countryB) {
  //     return 1;
  //   }

  //   return 0;
  // });
  return (
    <div className="App">
      <header className="App-header">
        <h1>High Scores per Country</h1>
        <button onClick={handleToggleSortOrder}>
          Toggle Sort Order: {sortOrder === "ascending" ? "Ascending" : "Descending"}
        </button>
        {allCountryScores.map((countryScore, index) => (
          <HighScoreTable
            key={index}
            country={countryScore.name}
            scores={sortOrder === "ascending" ? countryScore.scores : [...countryScore.scores].reverse()}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
