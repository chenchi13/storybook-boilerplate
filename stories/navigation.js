import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Navigation from '../components/navigation';

const navigationMenuStory = storiesOf('Navigation Menu', module);

const links = [
  {
    id: 1,
    content: <a href="/index">Početna</a>,
    active: true,
  },
  {
    id: 2,
    content: <a href="/favorites">Omiljene pive</a>,
  },
  {
    id: 3,
    content: <a href="/about">O nama</a>,
  }
];

navigationMenuStory.add('default', () => {
  return <Navigation links={links} />;
});