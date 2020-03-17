# classname-components

> A CSS class component wrapper to speed up styling React components

Heavily inspired by the great css-in-js library styled-components, all credits where credits due.

This projects is README-driven, this file is step 1. There will be a lot of edits before I start coding things.

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

// using classnames -> https://github.com/JedWatson/classnames
const Button = cc('button')(
  classnames({
    'color-gray-500': true,
    'font-serif': true,
  })
);


const MyComponent = () => (
  <Wrapper>
    <Header>A title</Header>
    <Intro>A nice intro</Intro>
    <Button>Ok</Button>
  </Wrapper>
)

export default MyComponent;

```

## Based on props

You can also use [classnames](https://github.com/JedWatson/classnames) to conditionally apply classes.

The props of the component are passed down.

```jsx

// using arguments
const Button = cc('button')(props => classnames({
  'color-red-500': props.type === ButtonType.ERROR,
  'color-gray-500': props.type === ButtonType.DEFAULT,
  'font-serif': true,
}));

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