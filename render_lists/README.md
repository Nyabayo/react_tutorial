# 📝 **React List Rendering**

This project demonstrates how to **render lists** in React using the `.map()` function. It covers both **simple arrays** and **arrays of objects**, along with best practices for using keys.

---

## 🚀 **Getting Started**

### 1️⃣ **Clone the Repository**  
```sh
git clone https://github.com/Nyabayo/react_tutorial.git
cd react-list-rendering
```

### 2️⃣ **Install Dependencies**  
```sh
npm install
```

### 3️⃣ **Run the Project**  
```sh
npm start
```
This will start the React development server and open the app in your browser.

---

## 📚 **Concepts Covered**

### ✅ **1. Rendering a Simple List**  
To display a list of items in React, use the `.map()` method to iterate over an array and return JSX elements.

```jsx
const fruits = ["apple", "orange", "mango", "lemon"];

const listItems = fruits.map(fruit => <li key={fruit}>{fruit}</li>);

return <ol>{listItems}</ol>;
```

### ✅ **2. Rendering a List of Objects**  
If the array contains objects, extract the relevant properties inside `.map()`.

```jsx
const fruitData = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 62 },
    { id: 3, name: "mango", calories: 60 },
    { id: 4, name: "lemon", calories: 17 }
];

const listItemsWithCalories = fruitData.map(fruit => (
    <li key={fruit.id}>
        {fruit.name} - {fruit.calories} kcal
    </li>
));

return <ul>{listItemsWithCalories}</ul>;
```

### ✅ **3. Importance of the `key` Prop**  
- The `key` prop helps React track list items efficiently.
- It prevents unnecessary re-renders and improves performance.
- **Best Practice:** Use a unique `id` from the object, not the index.

🚫 **Bad Practice (Using Index as Key)**  
```jsx
fruits.map((fruit, index) => <li key={index}>{fruit}</li>);  // ❌ Avoid this if items can change
```

✅ **Good Practice (Using Unique ID as Key)**  
```jsx
fruitData.map(fruit => <li key={fruit.id}>{fruit.name}</li>);  // ✅ Unique ID improves performance
```

### ✅ **4. Ordered (`<ol>`) vs. Unordered (`<ul>`) Lists**  
- **Use `<ol>`** for ordered (numbered) lists.  
- **Use `<ul>`** for unordered (bullet) lists.  

```jsx
return (
    <div>
        <h2>Ordered List</h2>
        <ol>{listItems}</ol>

        <h2>Unordered List</h2>
        <ul>{listItemsWithCalories}</ul>
    </div>
);
```

---

## 🎯 **Project Structure**  

```
react-list-rendering/
│── src/
│   ├── components/
│   │   └── List.js  // Main list rendering component
│   └── App.js       // Renders List component
│── public/
│── package.json
│── README.md        // 📞 This file
```

---

## 🎯 **How to Use This Project**  

1. Modify the `fruits` array to test different lists.  
2. Add more properties (like `vitamins`, `price`, etc.) to `fruitData`.  
3. Experiment with different ways to structure lists.  

---

## 📌 **Best Practices for Rendering Lists**  
✔️ **Always use `.map()` to iterate over arrays.**  
✔️ **Provide a unique `key` for each list item.**  
✔️ **Use objects for structured data (e.g., name, calories, id).**  
✔️ **Avoid using array index as a key unless necessary.**  
✔️ **Choose `<ol>` or `<ul>` based on the type of list.**  

---

## 🛠 **Technologies Used**  
- React.js  
- JavaScript (ES6)  
- JSX  
- CSS (optional for styling)  

---

## 📞 **Contact & Support**  
If you have any questions, feel free to reach out!  
📧 **Email:** ernestosindo9@gmail.com  

---

