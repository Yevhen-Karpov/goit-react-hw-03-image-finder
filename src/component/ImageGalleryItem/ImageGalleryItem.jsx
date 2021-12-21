import React, { Component } from 'react';
import Modal from 'component/Modal/Modal';
import s from './ImageGalleryItem.module.css';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { card } = this.props;
    const { showModal } = this.state;
    return (
      <li key={card.id} className={s.imageGalleryItem}>
        <img
          onClick={this.toggleModal}
          src={card.webformatURL}
          alt=""
          className={s.imageGalleryItemImage}
        />
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            src={card.largeImageURL}
            alt={card.tags}
          />
        )}
      </li>
    );
  }
}
