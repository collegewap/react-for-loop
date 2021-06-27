const toppings = [
  "Golden Corn",
  "Paneer",
  "Tomato",
  "Mushroom",
  "Onion",
  "Black Olives",
];

let listToRender = [];

const generateList = () => {
  for (let index = 0; index < toppings.length; index++) {
    const topping = toppings[index];
    listToRender.push(<li key={index}>{topping}</li>);
  }
};

generateList();

function App() {
  return (
    <div className="app">
      <h2>Pizza Toppings</h2>
      <ul>{listToRender}</ul>
    </div>
  );
}

export default App;
