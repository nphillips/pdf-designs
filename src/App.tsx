import React from 'react'
import DemoNav from './demo/DemoNav'
import Home from "./demo/Home"
import { animus } from '@animus-ui/core'
import P220712variants from './2022/07/P220712variants'
import P220712mode from './2022/07/P220712mode'
import P220713as from './2022/07/P220713as'
import P220719input from './2022/07/P220719input'

const DemoPage = animus
  .styles({
    display: 'flex',
    minHeight: '100vh',
    flexDirection: 'column',
  })
  .asElement('div')

const DemoNavArea = animus
  .styles({
    background: '#f4f4f5',
    mt: 'auto',
    order: 1,
  })
  .asElement('div')

const DemoNavAreaInner = animus
  .styles({
    maxWidth: '600px',
    mx: 'auto',
    p: 16,
  })
  .asElement('div')



function App() {
  let component
  switch (window.location.pathname) {
    case "/":
      component = <Home />
      break
    case "/220712-variants":
      component = <P220712variants />
      break
    case "/220712-mode":
      component = <P220712mode />
      break
    case "/220713-as":
      component = <P220713as />
      break
    case "/220719-input":
      component = <P220719input />
      break
  }

  return (
    <DemoPage>
      {component}
      <DemoNavArea className='demo-nav-area'>
        <DemoNavAreaInner>
          <DemoNav />
        </DemoNavAreaInner>
      </DemoNavArea>
    </DemoPage>
  )
}

export default App;
