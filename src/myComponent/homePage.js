import React, { Component, Fragment } from "react";
import { Grid } from "@material-ui/core";
import profile from "../images/profile.jpg";

class HomePage extends Component {
  render() {
    // Homepage with icons and pictures
    return (
      <Fragment>
        <div style={{ width: "100%", margin: "auto" }} className="home-page">
          <Grid container>
            <Grid item xs={12}>
              <div>
                <img src={profile} alt="#" className="profile-img" />
              </div>
              <h1 className="name-css">
                Tanvir <span className="surname">Hossain</span>
              </h1>
              <p className="sub-detail">Tech Enthusiast</p>
              <br />
              <br />

              {/* Follow me links along with logo. logo feteched from react icons */}
              <div className="sub-detail">
                <p>Follow Me</p>
              </div>
              <p className="sub-detail2">
                <a href="https://github.com/Tanvir-sys">
                  <i class="fab fa-github " />
                </a>
                <a href="">
                  <i class="fab fa-instagram " />
                </a>
                <a href="https://www.facebook.com/muhammadtanvir.hossain.5">
                  <i class="fab fa-facebook-f" />
                </a>
                <a href="">
                  <i class="fab fa-linkedin" />
                </a>
              </p>
            </Grid>
          </Grid>
        </div>
        {/* pattern in React is for a component to return multiple elements */}
      </Fragment>
    );
  }
}

export default HomePage;
