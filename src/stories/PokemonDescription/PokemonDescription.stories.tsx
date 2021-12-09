import React, { Fragment } from 'react';
import { PokemonDescription } from './PokemonDescription';
import { css } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Example/PokemonDescription',
  component: PokemonDescription,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  }
} as ComponentMeta<typeof PokemonDescription>;

const Template: ComponentStory<typeof PokemonDescription> = (args) => <PokemonDescription {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'lg',
  backgroundColor: '#fff',
  color: '#000',
  description: {
    ability: ['Overgrow', 'chlorophyll'],
    weight: 69,
    generation: 'generation-i',
    height: 7,
    moves: ['razor-wind', 'swords-dance', 'cut', 'bind', 'vine-whip'],
  },
};

export const sx = Template.bind({});
sx.args = {
  size: 'lg',
  sx: css`
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
  `,
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  backgroundColor: '#ffffff',
  color: '#000',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  backgroundColor: '#ffffff',
  color: '#000',
};
