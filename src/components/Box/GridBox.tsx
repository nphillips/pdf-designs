import { ComponentProps } from 'react';

import Box from './Box';

export type GridBoxProps = ComponentProps<typeof GridBox>;

const GridBox = Box.extend()
  .styles({
    display: 'grid',
  })
  .states({
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    column: {
      gridAutoFlow: 'column',
    },
    row: {
      gridAutoFlow: 'row',
    },
  })
  .asElement('div');

export default GridBox;
