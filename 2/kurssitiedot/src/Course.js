import React from 'react'

const Course = (props) => {
    return (
        <>
            <Header course={props.course.name} />
            <Content parts={props.course.parts} />
            <b><Total parts={props.course.parts} /></b>
        </>
    )
}

const Header = (props) => {
    return (
        <h2>{props.course}</h2>
    )
}

const Content = (props) => {
    if (props.parts.length > 0) {
        return (
            <>
                {props.parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.id} />)}
            </>
        )
    } else {
        return ("No courses are available.")
    }
}

const Total = (props) => {
    const total = props.parts.reduce((s, p) => s + p.exercises, 0)
    return (
        <p>Number of exercises {total}</p>
    )
}

const Part = (props) => {
    return (
        <p> {props.name} {props.exercises} </p>
    )
}

export default Course
