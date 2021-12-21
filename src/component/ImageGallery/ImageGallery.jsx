import React, { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import Loader from '../Loader/Loader';
import Button from '../Button/Button';
import api from '../../services/apiService';
import s from './ImageGallery.module.css';

export default class ImageGallery extends Component {
  state = {
    cards: [],
    status: 'idle',
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.text !== this.props.text) {
      this.setState({ status: 'pending', cards: [] });
      await this.handleRenderPage();
    }
  }

  handleRenderPage = async () => {
    const { text, page } = this.props;

    try {
      const { hits } = await api.fetchApi(text, page);
      this.setState(prevState => ({
        cards: [...prevState.cards, ...hits],
        status: 'resolved',
        page: 2,
      }));
    } catch (e) {
      this.setState({ status: 'rejected' });
    }
  };

  handleAddPage = async () => {
    try {
      const { hits } = await api.fetchApi(this.props.text, this.state.page);
      this.setState(prevState => ({
        cards: [...prevState.cards, ...hits],
        status: 'resolved',
        page: 2,
      }));
    } catch (e) {
      this.setState({ status: 'rejected' });
    }
  };

  render() {
    const { status, cards } = this.state;

    return (
      <>
        {status === 'idle' && (
          <p className={s.text}>Введите слово, чтобы начать поиск.</p>
        )}

        {status === 'pending' && <Loader />}

        {!cards.length && status === 'resolved' && (
          <p className={s.text}>Нет результатов поиска по данному запросу.</p>
        )}

        {cards.length !== 0 && status === 'resolved' && (
          <>
            <ul className={s.gallery}>
              {cards.map(card => (
                <ImageGalleryItem card={card} key={card.id} />
              ))}
            </ul>
            <Button onClick={this.handleAddPage} />
          </>
        )}
      </>
    );
  }
}
