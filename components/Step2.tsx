import PlanModel from "@/models/PlanModel";
import Image from "next/image";

const plans = [
  {
    id: "arcade",
    name: "Arcade",
    icon: "/images/icon-arcade.svg",
    price: {
      monthly: 9,
      yearly: 90,
    },
  },
  {
    id: "advanced",
    name: "Advanced",
    icon: "/images/icon-advanced.svg",
    price: {
      monthly: 12,
      yearly: 120,
    },
  },
  {
    id: "pro",
    name: "Pro",
    icon: "/images/icon-pro.svg",
    price: {
      monthly: 15,
      yearly: 150,
    },
  },
];

export default function Step2(props: {
  plan: PlanModel | null;
  setPlan: (plan: PlanModel) => void;
  interval: string;
  setInterval: (interval: string) => void;
}) {
  const handleInterval = () => {
    if (props.interval === "monthly") {
      props.setInterval("yearly");
    } else {
      props.setInterval("monthly");
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-[32px] font-[700] text-marineBlue">
          Select your plan
        </h3>
        <p className="text-[16px] font-[500] text-coolGray">
          You have the option of mothly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col mt-12">
        <div className="flex justify-between">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col p-5 w-40 gap-y-16 border-2 rounded-md ${
                props.plan?.id === plan.id && "border-marineBlue"
              } hover:border-marineBlue cursor-pointer`}
              onClick={() => props.setPlan(plan)}
            >
              <Image src={plan.icon} alt={plan.name} width={40} height={40} />
              <div className="flex flex-col text-marineBlue">
                <h6 className="font-[700]">{plan.name}</h6>
                <p className="font-[400] text-coolGray">{`${
                  props.interval === "monthly"
                    ? `$${plan.price.monthly}/mo`
                    : `$${plan.price.yearly}/yr`
                }`}</p>
                {props.interval === "yearly" && (
                  <p className="text-[14px] font-[500]">2 months free</p>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full justify-center mt-8 gap-x-4 font-[700] text-marineBlue">
          <p className={`${props.interval === "yearly" && "text-coolGray"}`}>
            Monthly
          </p>
          <button
            className="flex w-12 h-6 bg-marineBlue rounded-full p-1 transition-all duration-300"
            onClick={handleInterval}
          >
            <div
              className={`${
                props.interval === "yearly" ? "translate-x-6" : "translate-x-0"
              } h-full aspect-square bg-white rounded-full transition-transform duration-300`}
            />
          </button>
          <p className={`${props.interval === "monthly" && "text-coolGray"}`}>
            Yearly
          </p>
        </div>
      </div>
    </div>
  );
}
