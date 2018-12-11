import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Header from '../components/header';

const headerStory = storiesOf('Header', module);

headerStory.add('default', () => {
  return (
    <Header>
      <h1>
        Duff Brewery
      </h1>
   </Header>
  )
})