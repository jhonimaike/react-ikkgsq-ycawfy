import React from 'react';
import { setColor } from './setColor.js';

export const rowRender = (trElement, props) => {
  const obj = props.dataItem.alarmType !== null ? props.dataItem.alarmType : '';
  let color = setColor(obj, 'rgb');

  const trProps = {
    style: { backgroundColor: color },
  };
  return React.cloneElement(
    trElement,
    { ...trProps },
    trElement.props.children
  );
};
