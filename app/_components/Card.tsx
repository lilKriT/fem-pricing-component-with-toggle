import Link from "next/link";
import AnimatedPrice from "./AnimatedPrice";

interface IProps {
  plan: Plan;
  monthly: boolean;
}

const Card = ({ plan, monthly }: IProps) => {
  const { title, price, features, isPremium } = plan;
  let priceToDisplay = monthly ? price.monthly : price.annually;

  return (
    <article
      className={`${isPremium ? "row-start-1 row-end-4 gradient py-18 text-blue-50 rounded-lg" : "row-start-2 bg-white"} 
      text-center flex flex-col gap-8 justify-center px-12 py-8 first:rounded-l-lg last:rounded-r-lg
      shadow-2xl`}
    >
      <h2 className="text-2xl">{title}</h2>
      <p className="text-7xl flex items-center justify-center gap-2">
        <span className="text-4xl">$</span>{" "}
        <AnimatedPrice value={priceToDisplay} />
      </p>

      {/* Features */}
      <div>
        {features.map((f, idx) => (
          <p
            key={idx}
            className={`${isPremium ? "border-blue-50/40" : "border-gray-650/30"} border-t last-of-type:border-b py-3`}
          >
            {f}
          </p>
        ))}
      </div>

      {/* Link */}
      <Link
        href={"#"}
        className={`${isPremium ? "bg-blue-50 hover:bg-transparent" : "gradient hover:bg-none! "} group border motion-safe:duration-150 uppercase rounded-lg tracking-widest py-3`}
      >
        <span
          className={`${isPremium ? "gradient bg-clip-text text-transparent group-hover:text-blue-50 motion-safe:duration-150" : "text-blue-50 group-hover:text-[hsl(238_63%_64%)]"} motion-safe:duration-150`}
        >
          Learn More
        </span>
      </Link>
    </article>
  );
};

export default Card;
