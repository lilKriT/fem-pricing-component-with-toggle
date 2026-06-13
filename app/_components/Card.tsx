import Link from "next/link";

interface IProps {
  isPremium: boolean;
  title: string;
  price: number;
  features: string[];
}

const Card = ({ isPremium, title, price, features }: IProps) => {
  return (
    <article
      className={`${isPremium ? "row-start-1 row-end-4 gradient py-18 text-blue-50 rounded-3xl" : "row-start-2 bg-white"} 
      text-center flex flex-col gap-8 justify-center px-12 py-8 first:rounded-l-3xl last:rounded-r-3xl
      shadow-2xl`}
    >
      <h2 className="text-2xl">{title}</h2>
      <p className="text-7xl flex items-center justify-center gap-2">
        <span className="text-4xl">$</span> {price}
      </p>

      {/* Features */}
      <div>
        {features.map((f, idx) => (
          <p key={idx} className="border-t last-of-type:border-b py-3">
            {f}
          </p>
        ))}
      </div>

      {/* Link */}
      <Link
        href={"#"}
        className={`${isPremium ? "bg-blue-50" : "gradient"} uppercase rounded-lg tracking-widest py-3`}
      >
        <span
          className={`${isPremium ? "gradient bg-clip-text text-transparent" : "text-blue-50"}`}
        >
          Learn More
        </span>
      </Link>
    </article>
  );
};

export default Card;
