import React from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import styles from './Modal.css';
import Memes from '../Memes';

const Modal = (props) => {
  const {
    toggleModal,
    currentMeme,
    currentMemeDescription,
    trendingMemes,
  } = props;

  return (
    <div className={styles.modal}>
      <VscChromeClose className={styles.closeIcon} onClick={toggleModal} size="30" color="#66FCF1" />
      <Memes
        currentMeme={currentMeme}
        currentMemeDescription={currentMemeDescription}
        trendingMemes={trendingMemes}
      />
    </div>
  );
};

export default Modal;
