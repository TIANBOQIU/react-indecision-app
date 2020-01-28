import React from "react";

import AddOption from "./AddOption";
import Options from "./Options";
import Header from "./Header";
import Action from "./Action";

import OptionModal from "./OptionModal";

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selectedOption: undefined
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
    let option = this.state.options[rand];
    this.setState(() => ({ selectedOption: option }));
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

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
    const subtitle = "Random sample generation";

    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <div className="container">
          <Action
            hasOptions={this.state.options.length > 0}
            handlePick={this.handlePick}
          />
          <div className="widget">
            <Options
              options={this.state.options}
              handleDeleteOptions={this.handleDeleteOptions}
              handleDeleteOption={this.handleDeleteOption}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

export default IndecisionApp;
