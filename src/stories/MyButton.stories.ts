import type { Meta, StoryObj } from "@storybook/react"

import { MyButton } from "../components/MyButton/MyButton.tsx"

const meta = {
  title: "Example/Button",
  component: MyButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MyButton>

export default meta
type Story = StoryObj<typeof meta>

export const RedBtn: Story = {
  args: {
    background: "red",
    color: "white",
    children: "Some text",
  },
}

export const GreenBtn: Story = {
  args: {
    background: "green",
    color: "white",
    children: "Some text",
  },
}

export const Large: Story = {
  args: {
    big: true,
    children: "Some text",
  },
}

export const Small: Story = {
  args: {
    big: false,
    children: "Some text",
  },
}