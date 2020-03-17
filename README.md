# classnames-components [![npm version](https://badge.fury.io/js/classnames-components.svg)](https://badge.fury.io/js/classnames-components)

> A CSS class component wrapper to speed up styling React components

Heavily inspired by the great css-in-js library [styled-components](https://github.com/styled-components), all credits where credits due.
This module is a component wrapper around [classnames](https://github.com/JedWatson/classnames).

This project is README-driven and WIP. The basic functionality works.

## Installation

```bash
yarn add classnames-components
```

or

```bash
npm i classnames-components
```

## Basic usage

You can play around with a CodeSandbox example [here](https://codesandbox.io/s/classnames-components-wr8nh).

Because we're using [classnames](https://github.com/JedWatson/classnames), you have a lot of flexibility.

```js
import cc from 'classnames-components';

// using arguments
const Header = cc('h1')('font-sans', 'text-3xl');

// using an array
const Intro = cc('p')(['font-serif', 'text-base', 'leading-relaxed']);

// using a string
const Wrapper = cc('section')('container mx-auto px-4');

// using an object
const Button = cc('button')({
  'color-gray-500': true,
  'font-serif': true,
});

const MyComponent = () => (
  <Wrapper>
    <Header>A title</Header>
    <Intro>A nice intro</Intro>
    <Button>Ok</Button>
  </Wrapper>
);

export default MyComponent;
```

more examples [here](https://github.com/JedWatson/classnames#usage)

## Based on props

Props are available by using a function as second param.

```jsx
const Button = cc('button')(props => [
  'font-serif',
  {
    'color-red-500': props.type === ButtonType.ERROR,
    'color-gray-500': props.type === ButtonType.DEFAULT,
  },
]);

const MyComponent = () => (
  <Wrapper>
    <Button type={ButtonType.ALERT}>An alert button</Button>
    <Button type={ButtonType.DEFAULT}>A default button</Button>
  </Wrapper>
);

export default MyComponent;
```

## Adding styling to existing classnames-component (not implemented yet)

```jsx
const Text = cc('p')('font-sans');

// create a new classnames-component starting from Text
const Paragraph = cc(Text)('text-base leading-relaxed');
```

## Changing semantics (not implemented yet)

You can use `as` to overwrite the semantics of the element.

```jsx
const Text = cc('p')('font-sans');

const MyComponent = props => <Text {...props} as={'div'} />;

export default MyComponent;
```

## License

MIT
