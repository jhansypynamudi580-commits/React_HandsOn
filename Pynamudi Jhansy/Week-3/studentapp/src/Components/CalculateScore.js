import React from "react";
import "../Stylesheets/mystyle.css";

function CalculateScore(props) {

    const averageScore = props.Total / props.goal;

    return (
        <div className="container">

            <h1>Student Score Calculator</h1>

            <h3>Student Details</h3>

            <p>
                <b>Name:</b> {props.Name}
            </p>

            <p>
                <b>School:</b> {props.School}
            </p>

            <p>
                <b>Total Score:</b> {props.Total}
            </p>

            <p>
                <b>Total Subjects:</b> {props.goal}
            </p>

            <h2>
                Average Score: {averageScore}
            </h2>

        </div>
    );
}

export default CalculateScore;