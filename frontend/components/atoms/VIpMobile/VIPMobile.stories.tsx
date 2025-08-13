import type { StoryFn, Meta } from '@storybook/react-vite';
import VIPMobile from './VIPMobile';

export default {
  title: 'Atoms/VIPMobile',
  component: VIPMobile,
} as Meta<typeof VIPMobile>;

const Template: StoryFn<typeof VIPMobile> = (args) => <VIPMobile {...args} />;

export const Default = Template.bind({});
Default.args = {};
