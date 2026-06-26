"use client";

import { useEffect, useState } from "react";
import Card from "./_components/Card";

const Plans: Plan[] = [
  {
    title: "Basic",
    isPremium: false,
    price: { monthly: 19.99, annually: 199.99 },
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    title: "Professional",
    isPremium: true,
    price: { monthly: 24.99, annually: 249.99 },
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    title: "Master",
    isPremium: false,
    price: { monthly: 39.99, annually: 399.99 },
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];

export default function Home() {
  const [monthly, setMonthly] = useState(false);

  useEffect(() => {
    console.log("changing state");
    console.log(monthly);

    return () => {};
  }, [monthly]);

  return (
    <section
      className="min-h-dvh bg-[url('/bg-bottom.svg'),url('/bg-top.svg')] bg-no-repeat 
    bg-position-[left_0px_bottom_0px,right_0px_top_0px] bg-size-[auto_35%,auto_75%]
    flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center mx-[2%] my-16 w-full max-w-7xl gap-12">
        <h1 className="text-5xl text-gray-650">Our Pricing</h1>

        <label className="text-gray-650/60 cursor-pointer flex items-center justify-center gap-6">
          <span>Annually</span>

          <div className="relative w-16 h-8 bg-linear-to-r from-[hsl(237_73%_79%)] to-[hsl(238_63%_64%)] hover:from-[hsla(237_73%_79%/0.5)] hover:to-[hsla(238_63%_64%/0.5)] motion-safe:duration-150 rounded-full peer-checked:w-20">
            <form>
              <input
                autoComplete="off"
                type="checkbox"
                className="sr-only peer"
                checked={monthly}
                onChange={(e) => {
                  setMonthly(e.target.checked);
                }}
              />
              <div className="absolute top-1 left-1 w-6 aspect-square rounded-full bg-blue-50 peer-checked:translate-x-8 motion-safe:duration-300 ease-in-out"></div>
            </form>
          </div>

          <span>Monthly</span>
        </label>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-3 grid-rows-[24px_1fr_24px] w-full">
          {Plans.map((p, idx) => (
            <Card plan={p} key={idx} monthly={monthly} />
          ))}
        </div>
      </div>
    </section>
  );
}
