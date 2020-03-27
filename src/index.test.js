import '@testing-library/jest-dom';
import cc from './index.js';

import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

const content = 'hello world';
const Simple = cc('div')('test ok', props => props.isRed && 'red');

test('`Creates a proper classnames component', () => {
  render(<Simple>{content}</Simple>);
  const classnameElement = screen.getByText(content);
  expect(classnameElement).toBeInTheDocument();
});

test('Creates the element with the correct HTML tag', () => {
  render(<Simple>{content}</Simple>);
  const classnameElement = screen.getByText(content);
  expect(classnameElement).toContainHTML(
    '<div class="test ok">hello world</div>',
  );
});

test('Attaches the correct CSS classes', () => {
  render(<Simple>{content}</Simple>);
  const classnameElement = screen.getByText(content);
  expect(classnameElement).toHaveClass('test ok', { exact: true });
});

test('Conditionally applies CSS classes', () => {
  render(<Simple isRed={true}>{content}</Simple>);
  const classnameElement = screen.getByText(content);
  expect(classnameElement).toHaveClass('test ok red', { exact: true });
});

test("Doesn't pass invalid props down to the DOM", () => {
  render(
    <Simple isRed={true} data-id={3}>
      {content}
    </Simple>,
  );
  const classnameElement = screen.getByText(content);
  expect(classnameElement).not.toHaveAttribute('isRed');
  expect(classnameElement).toHaveAttribute('data-id');
});

test('Wrap an existing component with classnames-components', () => {
  const Wrapper = cc(Simple)('bar');
  render(<Wrapper>{content}</Wrapper>);

  const classnameElement = screen.getByText(content);
  expect(classnameElement).toHaveClass('bar test ok', { exact: true });
});

test('Override the correct HTML element when provided with "as"', () => {
  render(<Simple as={'section'}>{content}</Simple>);
  const classnameElement = screen.getByText(content);

  expect(classnameElement).toContainHTML('</section>');
});

test('Override the correct HTML element when wrapping', () => {
  const Wrapper = cc(Simple)('bar');
  render(<Wrapper as={'p'}>{content}</Wrapper>);

  const classnameElement = screen.getByText(content);
  expect(classnameElement).toHaveClass('bar test ok', { exact: true });
  expect(classnameElement).toContainHTML('</p>');
});
