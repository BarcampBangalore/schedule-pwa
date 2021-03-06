import React, { Component } from 'react'
import { Layout, Header, Drawer, Navigation, Content } from 'react-mdl'
// import MaterialIcon,{colorPallet} from 'material-icons-react'
import Main from './main'
import { Link } from 'react-router-dom'

class MenuBar extends Component {

  render() {
    return (
      /* Always shows a header, even in smaller screens. */
      <Layout fixedHeader>
        <Header title='                          '>
        </Header>
        <Drawer title='BCB'>
          <Navigation>
            <Link to='/VenuePage'>Venue</Link>
            <Link to='/VenueMap'>Venue Map</Link>
            <Link to='/SharePage'>Share</Link>
            <Link to='/aboutpage'>About</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className='page-content' />
          <Main />
        </Content>
      </Layout>
    )
  }
}
export default MenuBar
