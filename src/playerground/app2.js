let count = 0;
const addOne = () => {
  count++;
  console.log("addOne", count);
  renderCounterApp();
};

const minusOne = () => {
  count--;
  console.log("minus one");
  renderCounterApp();
};

const reset = () => {
  count = 0;
  console.log("reset counter");
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const template = (
    <div>
      <h1>count: {count}</h1>
      <button id="btn1" className="button" onClick={addOne}>
        INCR
      </button>
      <button onClick={minusOne}>DESC</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

renderCounterApp();
