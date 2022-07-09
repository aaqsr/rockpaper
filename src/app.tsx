import './app.css'

export function App() {
  return (
  <>
    <div class="flexy">
        <button class='button'>🪨</button>

        <button class='button'>🗞</button>

        <button class='button'>✂️</button>
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

const computerAns: string = "?";

const humanAns: string = "?";

const result: string = "TIE";

const options = [
      'Rock',
      'Paper',
      'Scissor'
    ]

const rand = (Math.random()*10) % 3

const rockPaper = () => {

}
