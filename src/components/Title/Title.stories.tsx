import { Meta, StoryFn } from '@storybook/react';
import Title from './title.tsx';

export default {
  title: 'Components/Title',
  component: Title,
} as Meta;

export const Default: StoryFn = () => <Title>Hola, Mundo</Title>;
