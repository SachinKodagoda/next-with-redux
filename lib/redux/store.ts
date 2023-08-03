'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slices/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer
    }
})

type RootState = ReturnType<typeof store.getState>;
export const counterValue = (state: RootState) => state.counter.value;
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
