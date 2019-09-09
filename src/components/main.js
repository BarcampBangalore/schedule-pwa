import React from "react";
import LoginPage from "./loginpage";
import agendapage from "./agendapage";
import UpdatePage from "./updatepage";
import TweetPage from "./tweetpage";
import VenuePage from "./venuepage";
import VenueMap from "./venuemap";
import SharePage from "./sharepage";
import aboutpage from "./aboutpage";
import HomeMenu from "./homemenu";
import slot from "./slot";
import { Route } from "react-router-dom";
import session from "./session";

const Main = () => (
  <div>
    <Route exact path="/" component={HomeMenu} />
    {/* for MenuBar */}
    <Route exact path="/LoginPage" component={LoginPage} />
    <Route exact path="/UpdatePage" component={UpdatePage} />
    <Route exact path="/TweetPage" component={TweetPage} />
    <Route exact path="/VenuePage" component={VenuePage} />
    <Route exact path="/VenueMap" component={VenueMap} />
    <Route exact path="/agendapage" component={agendapage} />
    <Route exact path="/SharePage" component={SharePage} />
    <Route exact path="/aboutpage" component={aboutpage} />

    {/* For the session and slot navigation*/}
    <Route exact path="/slot/:index" component={slot} />
    <Route exact path="/session/:index/:sessionIndex" component={session} />
  </div>
);

export default Main;
