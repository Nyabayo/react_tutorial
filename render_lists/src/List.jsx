import React from "react";

function List() {
    // Example One: Rendering a simple list of fruit names
    // This is an array of strings
    const fruits = ["apple", "orange", "mango", "lemon"];

    // The .map() method loops over the fruits array and returns an <li> for each fruit.
    // Each <li> needs a unique "key" to help React track changes efficiently.
    const listItems = fruits.map(fruit => <li key={fruit}>{fruit}</li>);

    // Example Two: Rendering a list of objects with name and calories
    // Here, each fruit is an object with an "id", "name", and "calories"
    const fruitData = [
        { id: 1, name: "apple", calories: 95 },
        { id: 2, name: "orange", calories: 62 },
        { id: 3, name: "mango", calories: 60 },
        { id: 4, name: "lemon", calories: 17 }
    ];

    // Using .map() again to transform fruitData into <li> elements
    // "fruit.id" is used as the unique key (better than using index)
    const listItemsWithCalories = fruitData.map(fruit => (
        <li key={fruit.id}>
            {fruit.name} - {fruit.calories} kcal
        </li>
    ));

    return (
        <div>
            {/* Section for rendering a simple list */}
            <h2>Fruit List</h2>
            <ol>{listItems}</ol>

            {/* Section for rendering a list of objects */}
            <h2>Fruits with Calories</h2>
            <ul>{listItemsWithCalories}</ul>
        </div>
    );
}

export default List;
