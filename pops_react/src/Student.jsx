import React from "react";
import PropTypes from "prop-types";

function Student(props) {
    return (
        <div className="Student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

// Define PropTypes for validation
Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired,
};

// Set Default Props (if no values are provided)
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
};

export default Student;