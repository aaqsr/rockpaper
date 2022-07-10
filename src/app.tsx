import './app.css'
import { useState } from 'preact/hooks';

const vanilla: {[key: string]: string[]} = {
    '🪨':['🗞'],
    '🗞': ['✂️'],
    '✂️': ['🪨'],
}

const bigBangTheory: { [key: string]: string[] } = {
    '🪨':['🗞', '🖖'],
    '🗞': ['✂️', '🦎'],
    '✂️': ['🪨', '🖖'],
    '🦎': ['🪨', '✂️'],
    '🖖': ['🗞', '🦎']
}

export const App = () => (
  <Game winningOptions={bigBangTheory} />
)

const useRand = (options: string[]) => (Math.round(Math.random()*1000)) % options.length

const playGame = (
  rand: number,
  optionSelected: string, options: string[],
  winningOptions: { [key: string]: string[] },
): string => {
  const winConditions = winningOptions[options[rand]];
  console.log(winConditions);
  if (winConditions.includes(optionSelected)) {
    return "You win!";
  } else if (optionSelected == options[rand]) {
    return "TIE";
  } else {
    return "You Lose :(";
  }
}

interface gameProps {
  winningOptions: {[key: string]: string[]}
}

export const Game = (props: gameProps) => {
  const winningOptions = props.winningOptions;
  const options = Object.keys(winningOptions);

  const [humanAns, setHumanAns]: [string, Function] = useState("❓");
  const [computerAns, setComputerAns]: [string, Function] = useState("❓");
  const [result, setResult]: [string, Function] = useState("PICK TO BEGIN");

  const buttonClickHandler = (optionSelected: string) => {
    setHumanAns(optionSelected);

    const rand = useRand(options);
    setComputerAns(options[rand]);

    setResult(playGame(rand, optionSelected, options, winningOptions));
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

