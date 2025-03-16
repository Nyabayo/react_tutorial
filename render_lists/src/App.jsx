import React from "react";
import List from "./List.jsx";

function App() {
    // Define two arrays: fruits and vegetables
    const fruits = [
        { id: 1, name: "Apple", calories: 95 },
        { id: 2, name: "Orange", calories: 62 },
        { id: 3, name: "Mango", calories: 60 },
        { id: 4, name: "Lemon", calories: 17 }
    ];

    const vegetables = [
        { id: 5, name: "Carrot", calories: 41 },
        { id: 6, name: "Broccoli", calories: 55 },
        { id: 7, name: "Spinach", calories: 23 },
        { id: 8, name: "Tomato", calories: 18 }
    ];

    return (
        <>
            {/* Pass fruits and vegetables to List component */}
            <List items={fruits} title="Fruits and Calories" />
            <List items={vegetables} title="Vegetables and Calories" />
        </>
    );
}

export default App;
