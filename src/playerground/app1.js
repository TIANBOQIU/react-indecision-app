console.log("App.js is running!");

const app = {
  title: "react",
  subtitle: "simple react page",
  options: []
};

const onFormSumbit = e => {
  e.preventDefault(); // stop the full page refresh, no data added to the URL

  const option = e.target.elements.option.value; // e.target is the form

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = "";
    render();
  }
};

// create 'Remove All'

const reset = () => {
  app.options = [];
  render();
};

const onMakeDecision = () => {
  const rand = Math.floor(Math.random() * app.options.length);
  const randOption = app.options[rand];
  console.log(randOption);
};

var appRoot = document.getElementById("app");

const render = () => {
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What Should I Do?
      </button>

      <button onClick={reset}>Remove All</button>
      <ol>
        {app.options.map((opt, i) => (
          <li key={i}>{opt}</li>
        ))}
      </ol>
      <form onSubmit={onFormSumbit}>
        <input type="text" name="option" />
        <button type="submit">Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

// JSX -JavaScript XML

// createrender function that renders the new JSX

render();
