import React from 'react'
import Link from './Components/Link/Link.jsx'
import Button from './Components/Button/Button.jsx'

const App = () => (
  <div className="sampleStyle">
    <h1>Odds On</h1>
    <p>by Jackups, Woody, Tankles</p>
    <Link path="/landing">
      Landing Page Link
    </Link>
    <br />
    <Link path="/sample">
      Sample Link
    </Link>
    <br />
    <Link path="/example">
      Example Link
    </Link>
    <br />
    <Button onClick={() => { console.log('Button pressed') }}>
      Example Button
    </Button>
  </div>
)

export default App
