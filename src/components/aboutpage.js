import React, { Component } from "react";

class aboutpage extends Component {
  render() {
    return (
      <div>
        <h1 class="site-title">About</h1>
        <div class="main-content">
          <div class="container">
            <div class="row">
              <div class="col-md-9">
                <div class="row">
                  <div class="panel panel-default">
                    <div class="panel-body">
                      <p>
                        <strong>
                          <em>BarCamp is an unconference.</em> There's no
                          speaker list or fixed schedule until the actual event.
                          All content comes from the attendees. Anyone can host
                          a session, participate in discussions, demo a project,
                          talk about code, discuss at lengths about program
                          design.{" "}
                        </strong>
                      </p>
                      <p>
                        <strong>
                          Not into tech? No problem. BarCamp's not just about
                          tech. Share your life experiences. Teach us your life
                          hacks. Tell us about your great outdoor experiment.
                          Sky's the limit and this is the perfect place to share
                          your passion. Anyone with something to contribute or
                          with the desire to learn to welcome and invited to
                          join.
                        </strong>
                      </p>
                      <p>
                        <strong>
                          {" "}
                          There are no programming fees or any other charges for
                          a BarCamp. Your active participation is the fuel and
                          driving force for BarCamp. You are invited to
                          volunteer for various activities for putting up a
                          successful camp.
                        </strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default aboutpage;
