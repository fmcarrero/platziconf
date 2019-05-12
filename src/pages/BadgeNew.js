import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import BadgeForm from "../components/BadgeForm";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: ""
    }
  };

  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  render() {
    return (
      <React.Fragment>
       
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                avatarUrl="https://x.dpstatic.com/d/avatars/l/568/568651.jpg?1437236038"
                firstName={this.state.form.firstName}
                lastName={this.state.form.lastName}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
                jobTitle={this.state.form.jobTitle}
              />
            </div>
            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;