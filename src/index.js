import React from 'react';
import classnames from 'classnames';

import isPropValid from '@emotion/is-prop-valid';

const isFunction = functionToCheck =>
  functionToCheck && {}.toString.call(functionToCheck) === '[object Function]';

const parseParams = (...params) => props =>
  params
    .map(param => classnames(isFunction(param) ? param(props) : param))
    .join(' ')
    .trim();

const cleanUpProps = props =>
  Object.fromEntries(
    Object.entries(props).filter(([prop]) => isPropValid(prop)),
  );

const classnamesComponents = element => (...params) => ({
  className = '',
  ...props
}) =>
  React.createElement(props.as ?? element, {
    className: parseParams(className, ...params)(props),
    ...cleanUpProps(props),
  });

export default classnamesComponents;
