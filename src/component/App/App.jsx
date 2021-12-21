import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';

export default class App extends Component {
  state = {
    text: '',
    page: 1,
  };

  handleFormSubmit = text => {
    this.setState({ text: text });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery text={this.state.text} page={this.state.page} />
        <ToastContainer />
      </div>
    );
  }
}
