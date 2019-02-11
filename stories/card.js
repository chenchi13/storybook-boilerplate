import React from 'react';
/* eslint-disable */
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
/* eslint-enable */
import Card from '../components/card';
import beers from './beers.json'

const cardStory = storiesOf('Card', module);

cardStory.add('simple', () => (
  <Card
    id='1'
    imgUrl="https://images.punkapi.com/v2/keg.png"
    name="Pivo Pivo"
    tagline="Naše najbolje domaće pivo."
    
    iconFavorites="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"

    onClickFavorites={action('addToFavorites')}
    onClickDetails={action('showDetails')}
    onClickCart={action('addToCart')}>
    
  </Card>
));

cardStory.add('all beers', () => {
  const cards = beers.map(beer =>
    <Card
      id={beer.id}
      imgUrl={beer.image_url}
      name={beer.name}
      tagline={beer.tagline}

      iconFavorites="http://icons.iconarchive.com/icons/iconsmind/outline/32/URL-Window-icon.png"

      onClickFavorites={action('addToFavorites')}
      onClickDetails={action('showDetails')}
      onClickCart={action('addToCart')}>
    </Card>);
    return <div> {cards}</div>
});



