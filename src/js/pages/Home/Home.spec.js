/*
 */

import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Home from './app';

it('renders correctly', () => {
  const tree = renderer.create(<Home />).toJSON();
  expect(tree).toMatchSnapshot();
});
