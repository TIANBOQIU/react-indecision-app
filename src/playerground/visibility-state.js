class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prev => {
      return {
        visibility: !prev.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleClick}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && <p>current time 16:48 pm (EST)</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));
