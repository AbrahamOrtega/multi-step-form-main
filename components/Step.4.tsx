import PlanModel from "@/models/PlanModel";
import AddonsModel from "@/models/AddonModel";

export default function Step4(props: {
  plan: PlanModel | null;
  interval: string;
  addons: AddonsModel[];
  setStep: (step: number) => void;
}) {
  const total = props.plan
    ? props.plan.price[props.interval as "monthly" | "yearly"] +
      props.addons.reduce(
        (acc, addon) =>
          acc + addon.price[props.interval as "monthly" | "yearly"],
        0
      )
    : 0;

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-[32px] font-[700] text-marineBlue">Finishing up</h3>
        <p className="text-[16px] font-[500] text-coolGray">
          Double-check everything looks OK before confirming.
        </p>
      </div>

      <div className="flex flex-col mt-12 mx-6">
        <div className="flex items-center text-[18px] font-[700] text-marineBlue">
          <div className="flex flex-col items-start">
            <p>
              {props.plan &&
                `${
                  props.plan.name[0].toUpperCase() +
                  props.plan.name.substring(1)
                } (${
                  props.interval[0].toUpperCase() + props.interval.substring(1)
                })`}
            </p>
            <button
              className=" underline text-[14px] text-coolGray font-[500] hover:text-purplishBlue"
              onClick={() => props.setStep(2)}
            >
              Change
            </button>
          </div>
          <div className="flex flex-grow justify-end">{`${
            props.interval === "monthly"
              ? `$${props.plan?.price.monthly}/mo`
              : `$${props.plan?.price.yearly}/yr`
          }`}</div>
        </div>
        <div className="flex flex-col font-[500] gap-y-2 my-10 text-coolGray">
          {props.addons.map((addon) => (
            <div key={addon.id} className="flex justify-between">
              <p>{addon.title}</p>
              <p className="text-marineBlue]">{`+$${
                props.interval === "monthly"
                  ? `${addon.price.monthly}/mo`
                  : `${addon.price.yearly}/yr`
              }`}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center font-[500] text-coolGray">
          <p>{`Total (per ${
            props.interval === "monthly" ? "month" : "year"
          })`}</p>
          <p className="text-[20px] font-[700] text-purplishBlue">{`+$${total}/${
            props.interval === "monthly" ? "mo" : "yr"
          }`}</p>
        </div>
      </div>
    </div>
  );
}
