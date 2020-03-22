import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
)

const Statistics = (props) => {
  return (
    <table>
    <tbody>
      <StatisticLine name='good' value={props.good} />
      <StatisticLine name='neutral' value={props.neutral} />
      <StatisticLine name='bad' value={props.bad} />
      <StatisticLine name='all' value={props.good + props.neutral + props.bad} />
      <StatisticLine name='average' value={(props.good * 1 + props.neutral * 0 + props.bad * -1) / (props.good + props.neutral + props.bad)} />
      <StatisticLine name='positive' value={props.good / (props.good + props.bad + props.neutral) * 100 + " %"} />
    </tbody>
    </table>
  )
}

const StatisticLine = (props) => {
  return (
    <tr><td>{props.name}</td><td>{props.value}</td></tr>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  if (good + neutral + bad > 0) {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
        <h1>statistics</h1>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    )
  } else {
    return (
      <div>
        <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text='good' />
        <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
        <Button handleClick={() => setBad(bad + 1)} text='bad' />
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
}

ReactDOM.render(<App />,
  document.getElementById('root')
)