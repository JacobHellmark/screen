import { createSystem, defineConfig, defaultConfig } from '@chakra-ui/react';

const config = defineConfig({
    ...defaultConfig,

    globalCss: {
        ...defaultConfig.globalCss,
        '#root': {
            width: '100%',
            height: '100vh',
        },
    },
});

export const system = createSystem(config);
