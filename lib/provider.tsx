"use client";

import { Provider } from "react-redux";
import { store } from "./redux/store";

type TProps = {
  children: React.ReactNode;
};
export default function Providers({ children }: TProps) {
  return <Provider store={store}>{children}</Provider>;
}