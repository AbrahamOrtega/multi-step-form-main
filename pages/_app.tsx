import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ubuntu.className}>
      <Component {...pageProps} />
    </main>
  );
}
