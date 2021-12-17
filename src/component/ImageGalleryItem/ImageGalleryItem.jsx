import React from 'react';
import PropTypes from 'prop-types';
// import ImageGalleryItem from 'component/ImageGallery/ImageGallery';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ card }) {
  return (
    <li key={card.id} className={s.imageGalleryItem}>
      <img src={card.webformatURL} alt="" className={s.imageGalleryItemImage} />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
