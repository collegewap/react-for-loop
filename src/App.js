const toppings = [
  "Golden Corn",
  "Paneer",
  "Tomato",
  "Mushroom",
  "Onion",
  "Black Olives",
];
function App() {
  return (
    <div className="app">
      <h2>Pizza Toppings</h2>
      <ul>
        {toppings.map((topping) => {
          return <li>{topping}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
