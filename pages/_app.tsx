import "../styles/global.css";
import { AppProps } from "next/app";
import React = require("react");

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
