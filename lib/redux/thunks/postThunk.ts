import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReduxDispatch, ReduxState } from "../store";

const createAppAsyncThunk = createAsyncThunk.withTypes<{
    state: ReduxState
    dispatch: ReduxDispatch
    rejectValue: string
  }>()

export const asyncCalls = createAppAsyncThunk(
    'counter/asyncCalls',
    async (arg: number) => {
        try {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${arg}`);
            const result = await res.json();
            return result;
        } catch (error) {
            console.log(error);
        }
    }
  )
