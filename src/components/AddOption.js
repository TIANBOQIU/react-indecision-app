import React from "react";

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
        {this.state.error && (
          <p className="add-option__error">{this.state.error}</p>
        )}
        <form onSubmit={this.onFormSubmit} className="add-option">
          <input type="text" name="option" className="add-option__input" />
          <button type="submit" className="button">
            add option
          </button>
        </form>
      </div>
    );
  }
}

export default AddOption;
