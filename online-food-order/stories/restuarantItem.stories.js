import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Navbar from '../src/NavigationTab/Navbar';
import ResturantsList from '../src/ResturantsList/ResturantsList'
import resturants from '../database/restaurants.json';
import ResturantItem from '../src/ResturantsList/ResturantItem/ResturantItem';

const items = [
    'firstItem',
    'secondItem',
    'thirdItem',
    'fourthItem'
]
storiesOf('ResturantItem',module)
    .add('with id',()=><Navbar items = {items}/>)
    .add('resturantList', () => <ResturantsList resturants = {resturants}/>)
    .add('resturantItem', () => <ResturantItem item = {resturants[0]} />)