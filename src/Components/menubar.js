import React, { Component } from 'react';
import {Layout,Header,Drawer,Navigation,Content} from 'react-mdl';
//import MaterialIcon,{colorPallet} from 'material-icons-react';
import Main from './Main';
import {Link} from 'react-router-dom';



class MenuBar extends Component{
  render()
  {
    return(
      /* Always shows a header, even in smaller screens. */
  <div style={{height: '800px',position: 'relative'}}>
      <Layout fixedHeader>
          <Header title="                          ">
              <Navigation>
                  <Link to="/">Home</Link>
              </Navigation>
          </Header>
          <Drawer title="BCB">
              <Navigation>
                  <Link to="/LoginPage">Login</Link>
                  <Link to="/AgendaPage">Agenda</Link>
                  <Link to="/UpdatePage">Updates</Link>
                  <Link to="/TweetPage">Tweets</Link>
                  <Link to="/VenuePage">Venue</Link>
                  <Link to="/VenueMap">Venue Map</Link>
                  <Link to="/SharePage">Share</Link>
                  <Link to="/AboutPage">About</Link>
              </Navigation>
          </Drawer>
           <Content>
              <div className="page-content" />
               <Main />
           </Content>
      </Layout>
  </div>
);
}
}
export default MenuBar;
