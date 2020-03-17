# classname-components

> A CSS class component wrapper to speed up styling React components

Heavily inspired by the great css-in-js library [styled-components](https://github.com/styled-components), all credits where credits due.

This project is README-driven, this file is step 1. There will be a lot of edits before I start coding things.

## Installation

*not on npm yet*

## Basic usage

`classname-components` is using [classnames](https://github.com/JedWatson/classnames), so you have a lot of flexibility.

```js

import cc from 'classname-components';

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
)

export default MyComponent;

```

more examples [here](https://github.com/JedWatson/classnames#usage)

## Based on props

Props are available by using a function as second param.

```jsx

const Button = cc('button')(({ type }) => [
  'font-serif',
  {
    'color-red-500': type === ButtonType.ERROR,
    'color-gray-500': type === ButtonType.DEFAULT,
  }
]);

const MyComponent = () => (
  <Wrapper>
    <Button type={ButtonType.ALERT}>An alert button</Button>
    <Button type={ButtonType.DEFAULT}>A default button</Button>
  </Wrapper>
)

export default MyComponent;

```

## Adding styling to existing classname-component

```jsx

const Text = cc('p')('font-sans');

// add styling to Text and create a new classname-component
const Paragraph = cc(Text)('text-base leading-relaxed')

```


## License

MIT