type BillingCycle = "monthly" | "annually";

type Plan = {
  isPremium: boolean;
  title: string;
  // price: { monthly: number; annually: number };
  price: Record<BillingCycle, number>;
  features: string[];
};
