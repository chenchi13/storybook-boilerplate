import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';

export default class Navigation extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.imgUrl } />
        <div>
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
  
Navigation.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string,
    tagline: PropTypes.string,
  };
  