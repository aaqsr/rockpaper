import './app.css'

export function App() {
  return (
    <div class="flexy">
        <div class="col-container">
            <button class='button'>🪨</button>
        </div>

        <div class="col-container">
            <button class='button'>🗞</button>
        </div>

        <div class="col-container">
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
