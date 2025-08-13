import type { Meta, StoryObj } from '@storybook/react-vite';
import { HeaderNav } from './HeaderNav';
import { userEvent, within } from '@storybook/testing-library';

const meta: Meta<typeof HeaderNav> = {
  title: 'Atoms/Navigation/HeaderNav',
  component: HeaderNav,
  parameters: {
   
    nextjs: {
      appDirectory: true,
      router: {
        pathname: '/', 
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof HeaderNav>;

// Story for Desktop View
export const DesktopView: Story = {
  name: 'Desktop View',
  parameters: {
    nextjs: {
      router: {
        pathname: '/',
      },
    },
  },
};

// Story for Mobile View (menu closed)
export const MobileViewClosed: Story = {
  name: 'Mobile View (menu closed)',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1', // Simulate a mobile viewport
    },
    nextjs: {
      router: {
        pathname: '/',
      },
    },
  },
};

// Story for Mobile View (menu open)
export const MobileViewOpen: Story = {
  name: 'Mobile View (menu open)',
  parameters: {
    viewport: {
      defaultViewport: 'mobile1', // Simulate a mobile viewport
    },
    nextjs: {
      router: {
        pathname: '/',
      },
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const burgerMenuButton = await canvas.getByLabelText('Ouvrir le menu mobile');
    await userEvent.click(burgerMenuButton);
  },
};

// Story for when the "Galerie" link is active
export const GalerieActive: Story = {
  name: 'Galerie Active',
  parameters: {
    nextjs: {
      router: {
        pathname: '/galerie',
      },
    },
  },
};

// Story for when the "À propos" link is active
export const AProposActive: Story = {
  name: 'À Propos Active',
  parameters: {
    nextjs: {
      router: {
        pathname: '/a-propos',
      },
    },
  },
};