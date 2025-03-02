import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { Button, ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';
import { system } from './config/providerConfig.ts';
import SideBarView from './views/sidebar/SideBarView.tsx';

createRoot(document.getElementById('root')!).render(
  <ThemeProvider attribute="class" defaultTheme='dark'>
    <ChakraProvider value={system}>
      <App />
    </ChakraProvider>
  </ThemeProvider>
);
