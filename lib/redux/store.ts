'use client';

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

export const store = configureStore({
    reducer: {
        counter: counterReducer.reducer
    }
})

type RootState = ReturnType<typeof store.getState>;
export const counterValue = (state: RootState) => state.counter.value;
export const { increment, decrement, incrementByAmount } = counterReducer.actions;
