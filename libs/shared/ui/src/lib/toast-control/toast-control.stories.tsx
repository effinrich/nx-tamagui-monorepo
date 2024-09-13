import type { Meta, StoryObj } from '@storybook/react'
import { ToastControl } from './toast-control'

import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

const meta: Meta<typeof ToastControl> = {
  component: ToastControl,
  title: 'ToastControl'
}
export default meta
type Story = StoryObj<typeof ToastControl>

export const Primary = {
  args: { title: 'New toast!' }
}

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)
    expect(canvas.getByText(/Welcome to ToastControl!/gi)).toBeTruthy()
  }
}
