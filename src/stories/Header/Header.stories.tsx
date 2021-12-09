import React from 'react';
import { Header } from './Header';
import { css } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const handleOnChange = (search:string):void => {
  console.log(search);
}

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  size: 'lg',
  placeholder: 'Buscando Pokemon',
  title: 'Pokedex',
  onChange: handleOnChange,
};

export const sx = Template.bind({});
sx.args = {
  size: 'lg',
  placeholder: 'Buscar por pokemon',
  sx: css`
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
  `
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  placeholder: 'Buscar pokemon',
  title: 'POKEDEX',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  placeholder: 'Buscar al pokemon',
  title: 'Pokemones',
};
