import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "@concepta/react-material-ui";

const meta = {
  component: Avatar,
  tags: ["autodocs"],
  argTypes: {
    src: { control: { type: "text" } },
    alt: { control: { type: "text" } },
    size: { control: { type: "range", min: 10, max: 200, step: 5 } },
    initials: { control: { type: "text" } },
    backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Avatar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "https://picsum.photos/200/200",
    alt: "Avatar image",
    size: 70,
  },
};

export const FailUrl: Story = {
  args: {
    src: "https://ca.slack-edge.com/T12",
    alt: "Avatar image",
    size: 70,
  },
};
