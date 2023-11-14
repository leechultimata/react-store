import Counter from "./store1/counter";
import ShowCounter from "./store1/show-counter";
import Counter2 from "./store2/counter2";
import ShowCounter2 from "./store2/show-counter2";

function App() {
  return (
    <div style={{display:'flex', gap:50}}>
        <div>
          <h2>Store 1</h2>
          <Counter />
          <ShowCounter />
          <ShowCounter />
          <ShowCounter />
        </div>
        <div>
          <h2>Store 2</h2>
          <Counter2 />
          <ShowCounter2 />
          <ShowCounter2 />
          <ShowCounter2 />
        </div>
       
    </div>
  );
}

export default App;
