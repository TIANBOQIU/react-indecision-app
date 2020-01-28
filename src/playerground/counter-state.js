class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    const count = parseInt(localStorage.getItem("count"), 10);
    if (!isNaN(count)) {
      this.setState(() => ({ count }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      localStorage.setItem("count", this.state.count);
    }
  }

  handleAdd() {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  }

  handleMinus() {
    this.setState(prevState => {
      return {
        count: prevState.count - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return { count: 0 };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAdd}>add</button>
        <button onClick={this.handleMinus}>minus</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter count={100} />, document.getElementById("app"));
