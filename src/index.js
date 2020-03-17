import React from 'react';
import classnames from 'classnames';

const isFunction = functionToCheck =>
  functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

const parseParams = (...params) => props =>
  params
    .map(param => classnames(isFunction(param) ? param(props) : param))
    .join(' ');

// How do we handle the passing down of props on a HTML element? Custom attributes are allowed?
// https://reactjs.org/docs/dom-elements.html#all-supported-html-attributes

// How do we wrap an existing classname-component?
// --- also make sure we can use `as` in this situation

const classnamesComponents = element => (...params) => (
  className = '',
  ...props
) =>
  React.createElement(element, {
    className: parseParams(className, ...params)(props),
    ...props,
  });

export default classnamesComponents;
