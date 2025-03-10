"use client";

import Header from "./components/ui/Header/Header";
import TypingArea from "./components/ui/TypingArea/TypingArea";

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <TypingArea />
      </main>
    </div>
  );
}
