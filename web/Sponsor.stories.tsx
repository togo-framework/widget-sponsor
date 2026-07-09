import type { Meta, StoryObj } from "@storybook/react";
import { Sponsor } from "./index";

const meta = { title: "Widgets/Sponsor", component: Sponsor } satisfies Meta<typeof Sponsor>;
export default meta;

export const Default: StoryObj<typeof Sponsor> = {
  args: { settings: {}, setSettings: () => {}, editing: false },
};

export const Editing: StoryObj<typeof Sponsor> = {
  args: { settings: {}, setSettings: () => {}, editing: true },
};
