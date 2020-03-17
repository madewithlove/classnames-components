import React from 'react';
import classnames from 'classnames';

const isString = stringToCheck =>
  typeof stringToCheck === 'string' || stringToCheck instanceof String;

const isFunction = functionToCheck =>
  functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

const parseParams = (...params) => props =>
  params
    .map(param => classnames(isFunction(param) ? param(props) : param))
    .join(' ');

const classnamesComponents = element => (...params) => props =>
  React.createElement(element, {
    className: parseParams(props.className, ...params)(props),
    ...(isString(element) ? {} : props),
  });

export default classnamesComponents;
