import React from 'react';
import { PokemonLabel } from './PokemonLabel';
import { css } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Example/PokemonLabel',
  component: PokemonLabel,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  }
} as ComponentMeta<typeof PokemonLabel>;

const Template: ComponentStory<typeof PokemonLabel> = (args) => <PokemonLabel {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'md',
  text: 'Pokemon',
};

export const sx = Template.bind({});
sx.args = {
  size: 'md',
  text: 'Pokemon',
  sx: css`
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
  `
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  text: 'Pokemon',
  backgroundColor: '#fe8484',
  color: '#fff',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  text: 'Pokemon',
  backgroundColor: '#5ae0c5',
  color: '#000',
};
