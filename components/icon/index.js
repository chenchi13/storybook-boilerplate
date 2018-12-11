import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Icon extends React.Component {
  render() {
    return (
      <div className={styles.main}>
        <a href={this.props.href} className={styles.classHref}>
          <img src={this.props.imgUrl} className={styles.img} />
          <h4 className={styles.text}>{this.props.text}</h4>
        </a>
      </div>
    );
  }
}

Icon.PropTypes = {
  imgUrl: PropTypes.string,
  classImg: PropTypes.string,
  classTxt: PropTypes.string,
  text: PropTypes.string,
  href: PropTypes.string,
};
