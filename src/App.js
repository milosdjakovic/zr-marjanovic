import React, { Component } from 'react';
import zenscroll from 'zenscroll';
import './App.css';
import Toolbar from './Toolbar/Toolbar';
import Content from './Content/Content';
import Footer from './Footer/Footer';
import SideMenu from './SideMenu/SideMenu';
import Sidebar from './Sidebar/Sidebar';

class App extends Component {
  state = {
    sideMenuVisible: false,
    scrollPoint: false
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.toTopHandler);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.toTopHandler);
  }

  toTopHandler = () => {
    if (window.scrollY <= 200 && this.state.scrollPoint === true) {
      this.setState({ scrollPoint: false });
    }
    else if (window.scrollY > 200 && this.state.scrollPoint !== true) {
      this.setState({ scrollPoint: true });
    }
  }

  moveToTop = () => {
    setTimeout(() => {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }, 300)
    console.log('move top')
  }

  scroppToTopSmooth = () => {
    zenscroll.toY(0, 300)
  }

  toggleSidebar = () => {
    this.setState({
      sideMenuVisible: !this.state.sideMenuVisible
    })
  }

  sidebarLinkAction = () => {
    this.moveToTop();
    this.toggleSidebar();
  }

  render() {
    return (
      <div className="App">
        <Sidebar
          toggleSidebar={this.toggleSidebar}
          scroppToTopSmooth={this.scroppToTopSmooth}
          scrollTopVisible={this.state.scrollPoint} />
        <SideMenu
          sidebarLinkAction={this.sidebarLinkAction}
          sideMenuVisible={this.state.sideMenuVisible} />
        <Toolbar />
        <Content moveToTop={this.moveToTop} />
        <Footer moveToTop={this.moveToTop} />
      </div>
    );
  }
}

export default App;
