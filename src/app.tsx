import './app.css'
import { useState } from 'preact/hooks';

const winningOptions: {[key: string]: string[]} = {
    '🪨':['🗞'],
    '🗞': ['✂️'],
    '✂️': ['🪨'],
}

const useRand = (options: string[]) => (Math.round(Math.random()*1000)) % options.length

const playRockPaper = (rand: number, optionSelected: string, options: string[], setResult: Function) => {
  const winConditions = winningOptions[options[rand]];
  console.log(winConditions);
  if (winConditions.includes(optionSelected)) {
    setResult("You win!");
  } else if (optionSelected == options[rand]) {
    setResult("TIE");
  } else {
    setResult("You Lose :(");
  }
}

export function App() {

  const options = Object.keys(winningOptions);

  const [humanAns, setHumanAns]: [string, Function] = useState("❓");
  const [computerAns, setComputerAns]: [string, Function] = useState("❓");
  const [result, setResult]: [string, Function] = useState("PICK TO BEGIN");

  const buttonClickHandler = (optionSelected: string) => {
    setHumanAns(optionSelected);

    const rand = useRand(options);
    setComputerAns(options[rand]);

    playRockPaper(rand, optionSelected, options, setResult)
  }


  return (
  <>
    <div class="flexy">
        {options.map(opt => <button onClick={() => buttonClickHandler(opt)} class='button'>{opt}</button>)}
    </div>

    <h1 class="result">{result}</h1>

    <div class="flexy" >
        <span style={{margin:"0.5em"}}>
            <h1>🖥 </h1>
            <div class='button'>{computerAns}</div>
        </span>

        <span >
            <h1>  🙋‍♀️</h1>
            <div class='button'>{humanAns}</div>
        </span>
    </div>
  </>
  )
}

