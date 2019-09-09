import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import NavBar from '../src/NavigationBar/index';
import Restaurant from '../src/Restaurant/index';

storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Button onClick={action('clicked')}>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

  storiesOf('NavBar', module)
  .add('with title', () => <NavBar title="Sample title"/>);

  storiesOf('Restaurant', module)
  .add('with details', () => <Restaurant name="Burgerizer" desc="Serves the best burger in city" rating="5" picture="https://inkbotdesign.com/wp-content/uploads/2019/03/new-burger-king-logo-design.png.webp" />);