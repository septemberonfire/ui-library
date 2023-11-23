import type { Meta, StoryObj } from "@storybook/react"

import { MyInput } from "../components/MyInput/MyInput.tsx"

const meta = {
  title: "Example/Input",
  component: MyInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MyInput>

export default meta
type Story = StoryObj<typeof meta>

export const Input: Story = {
  args: {
    padding: "4px 12px",
    placeholder: "Some Text"
  },
}