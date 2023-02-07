import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'j0ma9y72',
    dataset: 'production',
  },
  vite: (prevConfig) => {
    return {
      ...prevConfig,
      resolve: {
        ...prevConfig.resolve,
        alias: {
          ...prevConfig.resolve?.alias,
          '@': __dirname,
        },
      },
    };
  },
});
