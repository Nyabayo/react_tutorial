// prps - read-only properties that are shared between components.
//        A parent component can send data to a child component.
//        <Component keyvalue />
// propTypes = a mechanise that ensures that the passed value
//              is of the correct  datatype
//               age: PropTypes.number

//defaultProps = default values for props in case they are not passed
//               from the parent component
//               name: "Guest"
import React from "react";
import Student from "./Student.jsx";
import PropTypes from 'prop-types'

function App() {

  return (
    <>
        <Student name="Favour" age={19} isStudent={true}/>
        <Student name="Ernest" age={23} isStudent={false}/>
        <Student name="Grace" age={21} isStudent={true} />
        <Student name="Michael" age={25} isStudent={false} />
        <Student name="Sophia" age={20} isStudent={true} />
        <Student name="Daniel" age={22} isStudent={true} />
        <Student name="Olivia" age={24} isStudent={false} />
        //This will use defaultProps because no props are passed
        <Student  />

    </>
  )
}

export default App
