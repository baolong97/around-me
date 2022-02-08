/** @jsxImportSource @emotion/react */
// eslint-disable-next-line no-unused-vars
import { jsx, css } from '@emotion/react'
import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import Indicators from '../components/Indicators'

export default {
  title: 'Indicators',
  component: Indicators
} as ComponentMeta<typeof Indicators>

const Template: ComponentStory<typeof Indicators> = (args) => {
  const [currentIdx, setCurrentIdx] = useState(0)
  return <div css={{ backgroundColor: 'black' }}>
    <Indicators {...args} currentIdx={currentIdx} onSelect={setCurrentIdx}/>
  </div>
}

export const DefaultIndicator = Template.bind({})
DefaultIndicator.args = {
  total: 6,
  currentIdx: 3
}
