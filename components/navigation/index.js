import React from 'react';
import PropTypes from 'prop-types';
import styles from './index.css';


export default class Navigation extends React.Component {
  render() {
    return (
      <div className={styles.navigation}>
        <ul>
          {
            this.props.links.map(link => (<li key={link.id} className={link.active ? styles.active : undefined}>{link.content}</li>))
          }
        </ul>
      </div>
    );
  }
}

Navigation.propTypes = {
  links: PropTypes.array,
};