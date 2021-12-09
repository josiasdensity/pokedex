import React, { Fragment } from 'react';
import { Banner } from './Banner';
import { css } from 'styled-components';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PokemonLabel } from '../Label/PokemonLabel';
import { PokemonImage } from '../Image/PokemonImage';

export default {
  title: 'Example/Banner',
  component: Banner,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' }
  }
} as ComponentMeta<typeof Banner>;

const pokemonTypes = ['Grass', 'Poison', 'Green', 'Aqua']

const Template: ComponentStory<typeof Banner> = (args) => <Banner {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Bulbasaur',
  size: 'lg',
  backgroundColor: '#4ad1b1',
  color: '#fff',
  children: 
    <Fragment>
      <div>
        {pokemonTypes.map((pokemonType, idx) => (
          <PokemonLabel 
            key={idx}
            size='lg'
            text={pokemonType}
            backgroundColor='#5fe0c7'
            color='#fff'
            sx={css`
              display: inline-block;
              margin-right: 10px;
            `}
          />
        ))}
      </div>
      <div>
        <PokemonImage 
          size='lg'
          imgUrl='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png'
          sx={css`
            position: absolute;
            object-fit: cover;
            width: 600px;
            height: 230px;
            left: 0;
            right: 0;
            margin: 0 auto;
            bottom: -60px;
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
