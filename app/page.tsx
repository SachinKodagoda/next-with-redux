"use client";
import {
  decrement,
  increment,
  incrementByAmount,
} from "@/lib/redux/slices/counterSlice";
import type { RootState } from "@/lib/redux/store";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";

export default function Home() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <main className={styles.main}>
      {count}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(incrementByAmount(2))}>
        incrementByAmount of 2
      </button>
    </main>
  );
}
