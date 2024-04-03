import type { Meta, StoryObj } from '@storybook/react'

import Button from '@component/common/Button'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const full: Story = {
  render: () => <Button full={true} bgColor="pink500"></Button>,
}
