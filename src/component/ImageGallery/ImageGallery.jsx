import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import api from '../apiService';
import s from './ImageGallery.module.css';
export default class ImageGallery extends Component {
  state = {
    cards: [],
    status: 'idle',
  };

  handleRenderPage = () => {
    const { text, page } = this.props;

    api
      .fetchApi(text, page)
      .then(cards =>
        this.setState(prevState => ({
          cards: [...prevState.cards, ...cards.hits],
          status: 'resolved',
          page: 2,
        })),
      )
      .catch(error => this.setState({ status: 'rejected' }));
  };

  handleAddPage = () => {
    api
      .fetchApi(this.props.text, this.state.page)
      .then(cards =>
        this.setState(prevState => ({
          cards: [...prevState.cards, ...cards.hits],
          status: 'resolved',
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ status: 'rejected' }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.text !== this.props.text) {
      this.setState({ status: 'pending', cards: [] });
      this.handleRenderPage();
    }
  }

  render() {
    const { status, cards } = this.state;
    if (status === 'idle') {
      return <div></div>;
    }
    if (status === 'pending') {
      return <Loader />;
    }
    if (!cards.length) {
      return <h2>Нет результатов поиска по данному запросу</h2>;
    }
    if (status === 'resolved') {
      return (
        <>
          <ul className={s.gallery}>
            {cards.map(card => (
              <ImageGalleryItem card={card} key={card.id} />
            ))}
          </ul>
          <Button onClick={this.handleAddPage} />
        </>
      );
    }
  }
}
