import Card from "./_components/Card";

const Cards: {
  isPremium: boolean;
  title: string;
  price: number;
  features: string[];
}[] = [
  {
    title: "Basic",
    isPremium: false,
    price: 19.99,
    features: ["500 GB Storage", "2 Users Allowed", "Send up to 3 GB"],
  },
  {
    title: "Professional",
    isPremium: true,
    price: 24.99,
    features: ["1 TB Storage", "5 Users Allowed", "Send up to 10 GB"],
  },
  {
    title: "Master",
    isPremium: false,
    price: 39.99,
    features: ["2 TB Storage", "10 Users Allowed", "Send up to 20 GB"],
  },
];

export default function Home() {
  return (
    <section
      className="min-h-dvh bg-[url('/bg-bottom.svg'),url('/bg-top.svg')] bg-no-repeat 
    bg-position-[left_0px_bottom_0px,right_0px_top_0px] bg-size-[auto_35%,auto_75%]
    flex justify-center items-center"
    >
      <div className="flex flex-col justify-center items-center mx-[2%] my-16 w-full max-w-7xl">
        <h1 className="text-5xl text-gray-650">Our Pricing</h1>

        <label className="text-gray-650/60 cursor-pointer flex items-center justify-center gap-6">
          <span>Annually</span>

          <div className="relative w-16 h-8 gradient rounded-full peer-checked:w-20">
            <input type="checkbox" className="sr-only peer" />
            <div className="absolute top-1 left-1 w-6 aspect-square rounded-full bg-blue-50 peer-checked:translate-x-8 motion-safe:duration-300 ease-in-out"></div>
          </div>

          <span>Monthly</span>
        </label>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-3 grid-rows-[24px_1fr_24px] w-full">
          {Cards.map((c, idx) => (
            <Card
              title={c.title}
              isPremium={c.isPremium}
              price={c.price}
              features={c.features}
              key={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
