'use client';
import { createSlice } from "@reduxjs/toolkit";
import { asyncCalls } from "../thunks/postThunk";



const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0,
        status: 'idle', // 'idle' | 'loading' | 'failed' | 'succeeded'
        thunkVal: 0,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(asyncCalls.pending, (state) => {
            state.status = 'loading'
          })
          .addCase(asyncCalls.fulfilled, (state, action) => {
            state.status = 'idle'
            state.thunkVal += action.payload
          })
      },
});

export default counterSlice;
