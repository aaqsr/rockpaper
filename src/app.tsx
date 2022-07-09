import './app.css'

export function App() {
  return (
    <div class="flexy">
        <div class="col-container">
            <h1>ROCK</h1>
            <button class='button'>🪨</button>
        </div>

        <div class="col-container">
            <h1>PAPER</h1>
            <button class='button'>🗞</button>
        </div>

        <div class="col-container">
            <h1>SCISSOR</h1>
            <button class='button'>✂️</button>
        </div>
    </div>
  )
}

const options = [
      'Rock',
      'Paper',
      'Scissor'
    ]

const rand = (Math.random()*10) % 3

const rockPaper = () => {

}
