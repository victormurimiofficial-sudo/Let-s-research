import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect } from 'react';
import '../styles/global.css';
import '../styles/visual.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js').catch(() => undefined);
  }, []);
  return <><Head><meta name="theme-color" content="#6b36c9"/><meta name="description" content="Let’s Research designs and delivers evidence for decisions that matter."/><meta name="application-name" content="Let’s Research"/><meta name="apple-mobile-web-app-capable" content="yes"/><meta name="apple-mobile-web-app-status-bar-style" content="default"/><meta name="apple-mobile-web-app-title" content="Let’s Research"/><link rel="manifest" href="/manifest.webmanifest"/><link rel="icon" href="/lr-icon.svg" type="image/svg+xml"/><link rel="apple-touch-icon" href="/lr-icon.svg"/></Head><Component {...pageProps}/></>;
}
