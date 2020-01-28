let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  render();
};

const render = () => {
  const jsx = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && <p>here are some details</p>}
    </div>
  );
  ReactDOM.render(jsx, document.getElementById("app"));
};

render();
