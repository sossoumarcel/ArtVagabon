import type { Preview } from '@storybook/nextjs-vite';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      // Viewports custom à définir manuellement si besoin
      viewports: {
        mobile1: {
          name: 'Mobile 1',
          styles: {
            width: '375px',
            height: '667px',
          },
          type: 'mobile',
        },
        // tu peux ajouter d'autres viewports ici
      },
      defaultViewport: null, // ou 'mobile1' si tu veux que ça soit par défaut
    },
  },
};

export default preview;
