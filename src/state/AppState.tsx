'use client';
import { User } from '@/constants/types';
import { useAppData } from '@/hooks/useAppData';
import { atom } from 'jotai';

export interface AppData {
  user: User | undefined;
}

export const appDataAtom = atom<AppData>({
  user: undefined,
});

export enum AppEvent {
  UpdateDataEvent = 'UpdateDataEvent',
}

export const appEventsAtom = atom<Record<AppEvent, number>>({
  UpdateDataEvent: 0,
});

// Handle sidebar state
export const isSidebarOpenAtom = atom<boolean>(false);

export function AppState({ children }: { children?: React.ReactNode }) {
  useAppData();

  return children;
}
