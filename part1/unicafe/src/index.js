import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handler={() => setGood(good + 1)}/>
      <Button text="neutral" handler={() => setNeutral(neutral + 1)}/>
      <Button text="bad" handler={() => setBad(bad + 1)}/>
      <Statistics good={good} neutral={neutral} bad={bad}/> 
    </div>
  )
}

const Button = ({text, handler}) => (
    <button onClick={handler}>{text}</button>
)

const Statistic = ({text, num, tailtext=""}) => {

  return (
    <tr>
      <td>{text}</td> 
      <td>{num}{tailtext}</td>
    </tr>
  )
}

const Statistics = ({good, neutral, bad}) => {

  if (good === 0 && neutral === 0 && bad === 0){
    return (
      <>
      <h1>statistics</h1>
      <p>No feedback given</p>
    </>
    )
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <Statistic text='good' num={good} />
          <Statistic text='neutral' num={neutral} />
          <Statistic text='bad' num={bad} />
          <Statistic text='all' num={good + neutral + bad} />
          <Statistic text='average' num={(good * 1 + neutral * 0 + bad * -1) / (good + neutral + bad)} />
          <Statistic text='positive' num={good / (good + neutral + bad) * 100}  tailtext="%"/>
        </tbody>
      </table>
    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)
