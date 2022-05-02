import { defaultItemStyles } from './DefaultStyles';

import { ItemStyle, SingleItemStyle } from './types';

const addStrokeStyles = (
  itemStrokeStyle: string,
  targetObject: SingleItemStyle
): void => {
  switch (itemStrokeStyle) {
    case 'sharp':
      targetObject['--rri--item-stroke-linecap'] = 'miter';
      targetObject['--rri--item-stroke-linejoin'] = 'square';
      break;
    case 'round':
      targetObject['--rri--item-stroke-linecap'] = 'round';
      targetObject['--rri--item-stroke-linejoin'] = 'round';
      break;
  }
};

export const getItemStyles = (itemStylesProp: ItemStyle[]): SingleItemStyle[] | [] => {
  const singleStyles: SingleItemStyle[] = [];
  if (Array.isArray(itemStylesProp)) {
    itemStylesProp.forEach((userStyle) => {
      const mergedStyle: ItemStyle = {
        ...defaultItemStyles,
        ...userStyle,
      };
      const singleStyle: SingleItemStyle = {};

      singleStyle['--rri--active-item-color'] = mergedStyle.activeItemColor;
      singleStyle['--rri--active-box-color'] = mergedStyle.activeBoxColor;
      singleStyle['--rri--active-box-border-color'] = mergedStyle.activeBoxBorderColor;

      singleStyle['--rri--inactive-item-color'] = mergedStyle.inactiveItemColor;
      singleStyle['--rri--inactive-box-color'] = mergedStyle.inactiveBoxColor;
      singleStyle['--rri--inactive-box-border-color'] =
        mergedStyle.inactiveBoxBorderColor;

      if (
        typeof mergedStyle.itemStrokeWidth === 'number' &&
        mergedStyle.itemStrokeWidth > 0 &&
        typeof mergedStyle.itemStrokeStyle === 'string'
      ) {
        singleStyle['--rri--active-item-stroke-color'] =
          mergedStyle.activeItemStrokeColor;
        singleStyle['--rri--inactive-item-stroke-color'] =
          mergedStyle.inactiveItemStrokeColor;
        addStrokeStyles(mergedStyle.itemStrokeStyle, singleStyle);
      }

      const cleanedStyle = JSON.parse(JSON.stringify(singleStyle));
      singleStyles.push(cleanedStyle);
    });
    return singleStyles;
  }
  return [];
};
