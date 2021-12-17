import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import s from './ImageGallery.module.css';
import { toast } from 'react-toastify';
const BASE_URL = 'https://pixabay.com/api';
const API_KEY = '23964778-a3e050be7e1391d793e3046e4';

export default class ImageGallery extends Component {
  state = {
    page: 1,
    cards: [],
    status: 'idle',
    error: null,
  };
  fetchApi(text, page) {
    return fetch(
      `${BASE_URL}/?q=${text}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    ).then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(
        new Error(`Нет результатов поиска по данному запросу`),
      );
    });
  }

  handleRenderPage() {
    // const { page } = this.state;
    // const { text } = this.props;
    this.fetchApi(this.props.text, this.state.page)
      .then(cards =>
        // console.log(cards);
        this.setState(prevState => ({
          cards: [...prevState.cards, ...cards.hits],
          status: 'resolved',
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ status: 'rejected' }));
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.text !== this.props.text) {
      this.setState({ status: 'pending' });
      this.handleRenderPage();
    }
  }
  render() {
    const { error, status, cards } = this.state;
    if (status === 'idle') {
      return <div></div>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (cards.length < 1) {
      return toast.error(`Нет результатов поиска по данному запросу`);
    }
    if (status === 'resolved') {
      return (
        <div>
          <ul className={s.gallery}>
            {cards.map(card => (
              <ImageGalleryItem card={card} key={card.id} />
            ))}
          </ul>
          <Button onClick={this.handleRenderPage} />
        </div>
      );
    }
  }
}

ImageGalleryItem.propTypes = {};
