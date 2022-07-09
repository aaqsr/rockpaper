import './app.css'
import { useState } from 'preact/hooks';

const winningOptions: {[key: string]: string} = {
    '🪨':'🗞',
    '🗞': '✂️',
    '✂️': '🪨',
}

const options = Object.keys(winningOptions);

const useRand = () => (Math.round(Math.random()*1000)) % options.length

const playRockPaper = (rand: number, opt: string, setResult: Function) => {
  if (opt == winningOptions[options[rand]]) {
    setResult("You win!");
  } else if (opt == options[rand]) {
    setResult("TIE");
  } else {
    setResult("You Lose :(");
  }
}

export function App() {

  const [humanAns, setHumanAns]: [string, Function] = useState("❓");
  const [computerAns, setComputerAns]: [string, Function] = useState("❓");
  const [result, setResult]: [string, Function] = useState("CLICK TO BEGIN");

  const buttonClickHandler = (opt: string) => {
    setHumanAns(opt);

    const rand = useRand();
    setComputerAns(options[rand]);

    playRockPaper(rand, opt, setResult)
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

