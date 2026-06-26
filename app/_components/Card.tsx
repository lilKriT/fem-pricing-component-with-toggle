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
      className={`${isPremium ? "md:row-start-1 md:row-end-4 gradient md:py-18 text-blue-50 rounded-lg" : "md:row-start-2 bg-white"} 
      text-center flex flex-col gap-8 justify-center px-12 py-8 rounded-lg md:first:rounded-r-none md:last:rounded-l-none
      shadow-2xl`}
    >
      <h2 className="text-2xl">{title}</h2>
      <p className="text-7xl text-[clamp(3.5rem,10vw,4.5rem)] flex items-center justify-center gap-2">
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
      <Link href={"#"} className={`btn ${isPremium && "btn--premium"}`}>
        <span>Learn More</span>
      </Link>
    </article>
  );
};

export default Card;
