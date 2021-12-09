import React, { Fragment } from 'react';
import { Card } from './Card';
import { css } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PokemonLabel } from '../Label/PokemonLabel';
import { PokemonImage } from '../Image/PokemonImage';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  }
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Bulbasaur',
  size: 'md',
  backgroundColor: '#4ad1b1',
  color: '#fff',
  children: 
    <Fragment>
      <div>
        <PokemonLabel 
          size='md'
          text='Grass'
          backgroundColor='#5fe0c7'
          color='#fff'
        />
        <PokemonLabel 
          size='md'
          text='Poison'
          backgroundColor='#5fe0c7'
          color='#fff'
          sx={css`
            margin-top: 10px;
          `}
        />
      </div>
      <div style={{height: '66px', overflow: 'hidden'} }>
        <PokemonImage 
          size='lg'
          imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
          sx={css`
            object-fit: cover;
            height: 90px;
            object-position: 0 63%;
            margin-left: 20px;
          `}
        />
      </div>
    </Fragment>
};

export const sx = Template.bind({});
sx.args = {
  size: 'lg',
  sx: css`
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
  `,
  title: 'Bulbasaur',
  children: 
    <div>
      <PokemonLabel 
        size='lg'
        text='Grass'
        backgroundColor='#5fe0c7'
        color='#fff'
        sx={css`
          margin-bottom: 10px;
        `}
      />
      <PokemonLabel 
        size='lg'
        text='Poison'
        backgroundColor='#5fe0c7'
        color='#fff'
      />
    </div>
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  backgroundColor: '#fe8484',
  color: '#fff',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  backgroundColor: '#fe8484',
  color: '#fff',
};
