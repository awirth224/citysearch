import React, { Component } from "react";
import "./Form.css";
import { Link } from "react-router-dom";
import swal from "sweetalert";

type FormProps = {
  urbanAreas: any;
};

type FormState = {
  homeSlug: string;
  desiredSlug: string;
};

class Form extends Component<FormProps, FormState> {
  state: FormState = {
    homeSlug: "",
    desiredSlug: "",
  };

  handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
    const { name, value } = e.currentTarget;

    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "homeCity") {
      const matchingHome = this.props.urbanAreas.find(
        (item: { href: string; fullName: string }) => item.fullName === value
      );
      this.setState({
        homeSlug: matchingHome === undefined ? "" : matchingHome.slug,
      });
    } else {
      const matchingAway = this.props.urbanAreas.find(
        (item: { href: string; fullName: string }) => item.fullName === value
      );
      this.setState({
        desiredSlug: matchingAway === undefined ? "" : matchingAway.slug,
      });
    }
  };

  createDatalist = () => {
    const dropDown = this.props.urbanAreas.map(
      (item: { href: string; fullName: string }) => (
        <option key={item.href}>{item.fullName}</option>
      )
    );
    return dropDown;
  };

  handleErrorClick = () => {
    if (!this.state.homeSlug && !this.state.desiredSlug) {
      swal("Both city inputs are invalid", "Please try again!", "error");
    } else if (!this.state.desiredSlug) {
      swal("Desired city input is invalid", "Please try again!", "error");
    } else {
      swal("Starting city input is invalid", "Please try again!", "error");
    }
  };

  render() {
    const searchButton =
      this.state.homeSlug && this.state.desiredSlug ? (
        <Link
          to={`/${this.state.homeSlug}+${this.state.desiredSlug}`}
          tabIndex={-1}
        >
          <button className="search">Compare</button>
        </Link>
      ) : (
        <Link to="/" tabIndex={-1}>
          <button onClick={this.handleErrorClick} className="search">
            Compare{" "}
          </button>
        </Link>
      );

    return (
      <form className="form">
        <div className="input-container">
          <label>Starting City</label>
          <input
            type="search"
            list="listOne"
            autoComplete="off"
            name="homeCity"
            placeholder="Current City"
            onChange={(event) => this.handleChange(event)}
          />
          <datalist id="listOne">{this.createDatalist()}</datalist>
        </div>
        <div className="input-container">
          <label>Desired City</label>
          <input
            type="search"
            list="listTwo"
            autoComplete="off"
            name="desiredCity"
            placeholder="Destination"
            onChange={(event) => this.handleChange(event)}
          />
          <datalist id="listTwo">{this.createDatalist()}</datalist>
        </div>
        {searchButton}
      </form>
    );
  }
}

export default Form;
