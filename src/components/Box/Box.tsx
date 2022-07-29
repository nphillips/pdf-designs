import { animus } from '@animus-ui/core';
import { ComponentProps } from 'react';

export type BoxProps = ComponentProps<typeof Box>;

const Box = animus
  .states({
    fit: { height: '100%', width: '100%' },
    inline: { display: 'inline-block' },
    isolate: { position: 'relative', zIndex: 1 },
    round: { aspectRatio: '1 / 1', borderRadius: '50%' as any, overflow: 'hidden' },
  })
  .groups({
    background: true,
    borders: true,
    color: true,
    flex: true,
    grid: true,
    layout: true,
    positioning: true,
    shadows: true,
    space: true,
    typography: true,
  })
  .asElement('div');

export default Box;
