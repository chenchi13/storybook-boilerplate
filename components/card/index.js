import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Card extends React.Component {
  render() {
    return (
      <div name='main' id={this.props.id} className={styles.card} key={this.props.id}>
        {/* card beer img */}
        <img src={this.props.imgUrl } className={styles.image} />
        {/* card icons */}
        <div className={styles.header} >
            <img id={this.props.id} 
            imgurl={this.props.iconFavorites} 
            className={styles.icon} 
            onClick={this.props.onClickFavorites} />
            <img id={this.props.id} 
            imgurl={this.props.iconDetails} 
            className={styles.icon} 
            onClick={this.props.onClickDetails} />
            <img id={this.props.id} 
            imgurl={this.props.iconCart} 
            className={styles.icon} 
            onClick={this.props.onClickCart} />
          </div>
        {/* card body */}
        <div className={styles.container}>
          <h4>
            {this.props.name}
          </h4>
          <p>
            {this.props.tagline}
          </p>
        </div>
      </div>
    );
  }
}
  
Card.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string,
  tagline: PropTypes.string,

  description: PropTypes.string,
  id: PropTypes.number,

  iconFavorites: PropTypes.string,
  iconDetails: PropTypes.string,
  iconCart: PropTypes.string,

  onClickFavorites: PropTypes.func,
  onClickDetails: PropTypes.func,
  onClickCart: PropTypes.func
};
  