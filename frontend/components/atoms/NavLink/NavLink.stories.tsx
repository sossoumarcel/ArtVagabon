import type { Meta, StoryObj } from '@storybook/react-vite';
import NavLink from './NavLink';

const meta: Meta<typeof NavLink> = {
  title: 'Atoms/NavLink',
  component: NavLink,
  parameters: {
    nextjs: {
      appDirectory: true,
      router: {
        pathname: '/', // Default path for the story
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof NavLink>;

export const Default: Story = {
  args: {
    href: '/',
    label: 'Lien par défaut',
  },
};

export const Active: Story = {
  args: {
    href: '/active',
    label: 'Lien Actif',
    isActive: true,
  },
  parameters: {
    nextjs: {
      router: {
        pathname: '/active',
      },
    },
  },
};

export const WithOnClick: Story = {
  args: {
    href: '/',
    label: 'Lien avec onClick',
    onClick: () => alert('Lien cliqué!'),
  },
};
