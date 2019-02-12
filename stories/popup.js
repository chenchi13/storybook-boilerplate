import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Popup from '../components/popup';
import Card from '../components/card';
import beers from './beers.json';
import styles from '../components/card/index.css'

const popupStory = storiesOf('Popup', module);

popupStory.add('open modal', () => (
    <Popup tooltip='This is a popup component'>
      <div>
        <span>
          My modal content
        </span>
      </div>
    </Popup>
));

popupStory.add('modal with close handler', () => {
  const window = <Popup tooltip='This is a popup component' onClose={action('close popup')}>
      <div>
        <span>
          My modal content
        </span>
      </div>
    </Popup>;

  return (
      <div>
        {window}
      </div>
  );
});

popupStory.add('modal with content', () => {
  return (
    <Popup tooltip='This is a popup component'>

      <div name='main'>
        {/* card beer img */}
        <img src="https://images.punkapi.com/v2/keg.png" className={styles.image} />
        {/* card body */}
        <div className={styles.container}>
          <h4>
            Pivo Pivo
            </h4>
          <p>
            Naše najbolje pivo
            </p>
        </div>
      </div>
    </Popup>
  );
});
