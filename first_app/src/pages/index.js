import { Inter } from "next/font/google";
import App from "@/app";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <App name="react"/>
    </>
  );
}
