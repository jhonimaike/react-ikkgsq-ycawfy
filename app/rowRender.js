import React from 'react';

export const rowRender = (trElement, props) => {
  const trProps = {
    ...(!props.dataItem.Discontinued
      ? { style: { backgroundColor: 'rgba(255, 225, 53, 0.8)' } }
      : { style: { backgroundColor: 'rgba(55, 180, 0,0.32)' } }),
  };
  return React.cloneElement(
    trElement,
    { ...trProps },
    trElement.props.children
  );
};
