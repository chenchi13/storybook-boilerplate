import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/button.js');
  require('../stories/card.js');
  require('../stories/header.js');
  require('../stories/footer.js');
  require('../stories/main.js');
  require('../stories/navigation.js');
  require('../stories/popup.js');
}

configure(loadStories, module);