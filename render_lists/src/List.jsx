import React from "react";

function List(props) {
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {props.items.map(item => (
                    <li key={item.id}>
                        {item.name} - {item.calories} kcal
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default List;
