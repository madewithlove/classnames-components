import React from 'react';
import classnames from 'classnames';

const isFunction = functionToCheck =>
  functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

const parseParams = (...params) => props =>
  params
    .map(param => classnames(isFunction(param) ? param(props) : param))
    .join(' ');

const classnamesComponents = element => (...params) => props =>
  React.createElement(element, {
    className: parseParams(...params)(props),
    ...props,
  });

export default classnamesComponents;
