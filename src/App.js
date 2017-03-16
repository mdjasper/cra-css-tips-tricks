import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './Modal';
import './App.css';

import './icons.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalOpen: false,
      scrolled: false
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
}

  componentDidMount(){
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll(event){
    const threshold = 190;
    const scrolled = window.scrollY > threshold
    this.setState({scrolled});
  }

  toggleOpen(){
    this.setState((s) => ({
      modalOpen: !s.modalOpen
    }));
  }

  render() {
    return (
      <div className="App">

        <div className={this.state.scrolled ? 'logo logo-dark' : 'logo'}>
          <h2 className="icon-pacman">LOGO</h2>
        </div>

        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <button onClick={this.toggleOpen}>
          Open Modal
        </button>

        <Modal 
          visible={this.state.modalOpen}
          onToggle={this.toggleOpen}
          >
        </Modal>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus, sunt dolores quia sed, laboriosam quae vitae quidem corporis aliquam, adipisci officiis vel pariatur nisi quos sit soluta odio molestiae?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus, sunt dolores quia sed, laboriosam quae vitae quidem corporis aliquam, adipisci officiis vel pariatur nisi quos sit soluta odio molestiae?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus, sunt dolores quia sed, laboriosam quae vitae quidem corporis aliquam, adipisci officiis vel pariatur nisi quos sit soluta odio molestiae?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus, sunt dolores quia sed, laboriosam quae vitae quidem corporis aliquam, adipisci officiis vel pariatur nisi quos sit soluta odio molestiae?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus, sunt dolores quia sed, laboriosam quae vitae quidem corporis aliquam, adipisci officiis vel pariatur nisi quos sit soluta odio molestiae?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus, sunt dolores quia sed, laboriosam quae vitae quidem corporis aliquam, adipisci officiis vel pariatur nisi quos sit soluta odio molestiae?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus, sunt dolores quia sed, laboriosam quae vitae quidem corporis aliquam, adipisci officiis vel pariatur nisi quos sit soluta odio molestiae?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus, sunt dolores quia sed, laboriosam quae vitae quidem corporis aliquam, adipisci officiis vel pariatur nisi quos sit soluta odio molestiae?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus, sunt dolores quia sed, laboriosam quae vitae quidem corporis aliquam, adipisci officiis vel pariatur nisi quos sit soluta odio molestiae?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus, sunt dolores quia sed, laboriosam quae vitae quidem corporis aliquam, adipisci officiis vel pariatur nisi quos sit soluta odio molestiae?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus, sunt dolores quia sed, laboriosam quae vitae quidem corporis aliquam, adipisci officiis vel pariatur nisi quos sit soluta odio molestiae?</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius voluptatibus, sunt dolores quia sed, laboriosam quae vitae quidem corporis aliquam, adipisci officiis vel pariatur nisi quos sit soluta odio molestiae?</p>
      

      </div>


    );
  }
}

export default App;
