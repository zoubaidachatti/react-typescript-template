import { Components, Theme } from '@mui/material';
import Card from './Card';

export default function ComponentsOverrides(theme: Theme): Components {
  return Object.assign(Card(theme));
}
