'use client';

import { WagmiProvider } from 'wagmi';
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { mainnet, polygon, optimism, arbitrum, base } from 'viem/chains';
import { ReactNode } from 'react';
import StateProvider from '@/state/StateProvider';

const queryClient = new QueryClient();

const config = getDefaultConfig({
  appName: 'RoofToken',
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID as string, // put your project ID here
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true,
});

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <StateProvider>{children}</StateProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
