import React from 'react';
import {PokemonImage} from './PokemonImage'
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Example/PokemonImage',
  component: PokemonImage,
} as ComponentMeta<typeof PokemonImage>;

const Template: ComponentStory<typeof PokemonImage> = (args) => <PokemonImage {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'lg',
  imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
};

export const sx = Template.bind({});
sx.args = {
  size: 'lg',
  imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  imgUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
};
