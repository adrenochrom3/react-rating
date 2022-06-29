import React from 'react';

import { ItemStylesProp } from '../exportedTypes';

export const Star = (
  <polygon points="478.53 189 318.53 152.69 239.26 0 160 152.69 0 189 111.02 303.45 84 478.53 239.26 396.63 394.53 478.53 367.51 303.45 478.53 189" />
);

export const defaultItemStyles: ItemStylesProp = {
  itemShapes: Star,
  itemStrokeWidth: 40,
  activeFillColor: '#ffb23f',
  inactiveFillColor: '#FFF7ED',
  activeStrokeColor: '#e17b21',
  inactiveStrokeColor: '#eda76a',
};
