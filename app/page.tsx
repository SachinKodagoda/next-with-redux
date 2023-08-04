"use client";

import {
  counterValue,
  decrement,
  increment,
  incrementByAmount,
} from "@/lib/redux/store";

import { asyncCalls } from "@/lib/redux/thunks/postThunk";
import { useDispatch, useSelector } from "react-redux";
import styles from "./page.module.css";

export default function Home() {
  const count = useSelector(counterValue);
  const dispatch = useDispatch();
  return (
    <main className={styles.main}>
      <div className={styles.counter}>{count}</div>
      <div className={styles.btnCtr}>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
        <button onClick={() => dispatch(incrementByAmount(2))}>
          increase by 2
        </button>
        <button onClick={() => dispatch(asyncCalls(1))}>async</button>
      </div>
    </main>
  );
}
