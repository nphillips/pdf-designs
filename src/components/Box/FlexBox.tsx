import { ComponentProps } from 'react';

import Box from './Box';

export type FlexBoxProps = ComponentProps<typeof FlexBox>;

const FlexBox = Box.extend()
  .styles({ display: 'flex' })
  .states({
    center: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    column: {
      flexDirection: 'column',
    },
    inline: {
      display: 'inline-flex',
    },
    wrap: {
      flexWrap: 'wrap',
    },
  })
  .asElement('div');

export default FlexBox;
