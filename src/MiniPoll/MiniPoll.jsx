import React, { useState } from "react";

function MiniPoll() {
  const [options, setOptions] = useState(["React", "Vue", "Svelte"]);
  const [counters, setCounters] = useState({ React: 0, Vue: 0, Svelte: 0 });
  const [showResults, setShowResults] = useState(false);

  const getMaxVotes = () => {
    if (!Object.values(counters).find((v) => v > 0)) {
      return 0;
    }

    let maxVote = 0;
    let leader;

    for (let [option, counter] of Object.entries(counters)) {
      if (counter > maxVote) {
        maxVote = counter;
        leader = option;
      }
    }

    return { option: leader, counter: maxVote };
  };

  return (
    <div>
      <div>
        {/* {typeof leader == "string"
          ? leader
          : `The option with the highest votes is ${leader.option} ${leader.counter} votes`} */}
      </div>
      <section>
        <ul>
          {options.map((option) => (
            <li key={option}>
              <span>{option}</span>
              <button
                onClick={() => {
                  setCounters((prev) => ({
                    ...prev,
                    [option]: prev[option] + 1,
                  }));
                  console.log(getMaxVotes());
                  
                }}
              >
                Vote
              </button>
              {showResults && counters[option]}
            </li>
          ))}
        </ul>
      </section>
      <button
        onClick={() => {
          setShowResults(showResults ? false : true);
        }}
      >
        Toggle Results
      </button>

      <button
        onClick={() => {
          const newCounters = {};
          Object.keys(counters).forEach((c) => {
            newCounters[c] = 0;
          });
          setCounters(newCounters);
        }}
      >
        Reset Votes
      </button>
    </div>
  );
}

export default MiniPoll;
