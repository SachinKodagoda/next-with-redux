'use client';

import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import counterSlice from './slices/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat([
            createLogger({
              duration: true,
              timestamp: false,
              collapsed: true,
              colors: {
                title: () => '#139BFE',
                prevState: () => '#1C5FAF',
                action: () => '#149945',
                nextState: () => '#A47104',
                error: () => '#ff0005',
              },
              predicate: () => typeof window !== 'undefined',
            }),
          ])
      },
})

export type ReduxState = ReturnType<typeof store.getState>;
export type ReduxDispatch = typeof store.dispatch;
export const counterValue = (state: ReduxState) => state.counter.value;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
