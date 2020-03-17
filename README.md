# classname-components

> A CSS class component wrapper to speed up styling React components

Heavily inspired by the great css-in-js library styled-components, all credits where credits due.

This projects is README-driven, this file is step 1.

## Installation

*not on npm yet*

## Basic usage

*using Tailwind in this example*

```js

import cc from 'classname-components';

// using arguments
const Header = cc('h1')('font-sans', 'text-3xl');

// using an array
const Intro = cc('p')(['font-serif', 'text-base', 'leading-relaxed']);

// using a string
const Wrapper = cc('section')('container mx-auto px-4');

const MyComponent = () => (
  <Wrapper>
    <Header>A title</Header>
    <Intro>A nice intro</Intro>
  </Wrapper>
)

export default MyComponent;

```

## With props

You can access the props of the component and use them to apply classes conditionally

Creating the classname component

```jsx

// using arguments
const Button = cc('button')(
  'font-sans',
  ({ type }) => type === ButtonType.ALERT ? 'text-red-500' : 'text-gray-500
);

// using an array
const Button = cc('button')([
  'font-sans',
  ({ type }) => type === ButtonType.ALERT ? 'text-red-500' : 'text-gray-500
]);

// using template strings
const Button = cc('button')(`
  font-sans
  ${({ type }) => type === ButtonType.ALERT ? 'text-red-500' : 'text-gray-500)}
`;


```

Using it

```jsx

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