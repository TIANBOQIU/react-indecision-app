// stateless functional component, presentational

// const obj = {
//   name: "Vikram",
//   getName() {
//     return this.name;
//   }
// };
// const getName = obj.getName.bind({ name: "TIANBO" }); // lose the context

// console.log(getName());

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };

    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options"); // or null
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }
    } catch (e) {
      // do nothing
      console.log(e);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  //   componenttWillUnmount() {

  //   }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOption(option) {
    this.setState(prevState => ({
      options: prevState.options.filter(opt => opt !== option)
    }));
  }

  handlePick() {
    let rand = Math.floor(Math.random() * this.state.options.length);
    console.log(this.state.options[rand]);
  }

  handleAddOption(option) {
    if (!option) {
      return "option should not be an empty string";
    } else if (this.state.options.indexOf(option) > -1) {
      return "this option already exists";
    }

    this.setState(prevState => ({ options: prevState.options.concat(option) }));
  }

  render() {
    const title = "Indecision";
    const subtitle = "Random samle generation";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
};

const Action = props => {
  return (
    <div>
      <button onClick={props.handlePick} disabled={!props.hasOptions}>
        What should I do?
      </button>
    </div>
  );
};

// Setup options prop for OPtions component
// render the length of the array

const Options = props => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>please add an option to get started</p>}
      {props.options.map((opt, i) => (
        <Option
          key={i}
          text={opt}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))}
    </div>
  );
};

const Option = props => {
  return (
    <div>
      {props.text}
      <button
        onClick={e => {
          props.handleDeleteOption(props.text);
        }}
      >
        remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);

    this.state = {
      error: undefined
    };
  }

  onFormSubmit(evt) {
    evt.preventDefault();
    let option = evt.target.elements.option.value.trim();

    const error = this.props.handleAddOption(option);
    this.setState(() => ({ error }));
    //evt.target.elements.option.value = "";
    if (!error) {
      evt.target.elements.option.value = "";
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onFormSubmit}>
          <input type="text" name="option" />
          <button type="submit">add option</button>
        </form>
      </div>
    );
  }
}

// const User = props => {
//   return (
//     <div>
//       <h1>profile</h1>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
