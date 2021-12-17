import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from '../Searchbar/Searchbar';
import ImageGallery from '../ImageGallery/ImageGallery';
export default class App extends Component {
  state = {
    text: '',
  };
  handleFormSubmit = text => {
    this.setState({ text });
  };
  componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {}
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer />
        <ImageGallery text={this.state.text} />
      </>
    );
  }
}
