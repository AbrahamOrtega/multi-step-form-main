import AddonsModel from "@/models/AddonModel";
import { FaCheck } from "react-icons/fa";

const addonsList = [
  {
    id: "online-service",
    title: "Online service",
    description: "Voice chat with friends",
    price: {
      monthly: 1,
      yearly: 10,
    },
  },
  {
    id: "larger-storage",
    title: "Larger storage",
    description: "Extra 1 TB of cloud save",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
  {
    id: "custom-profile",
    title: "Customizable profile",
    description: "Custom theme on your profile",
    price: {
      monthly: 2,
      yearly: 20,
    },
  },
];

export default function Step3(props: {
  addons: AddonsModel[];
  setAddons: (addons: AddonsModel[]) => void;
  interval: string;
}) {
  const handleAddons = (addon: AddonsModel) => {
    if (props.addons.includes(addon)) {
      props.setAddons(props.addons.filter((item) => item !== addon));
    } else {
      props.setAddons([...props.addons, addon]);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-[32px] font-[700] text-marineBlue">Pick add-ons</h3>
        <p className="text-[16px] font-[500] text-coolGray">
          Add-ons help enhance your gaming experience.
        </p>
      </div>
      <div className="flex flex-col mt-10 gap-y-4">
        {addonsList.map((addon) => (
          <div
            key={addon.id}
            className={`${
              props.addons.includes(addon) && "border-purplishBlue"
            } flex items-center p-4 border rounded-md cursor-pointer`}
            onClick={() => handleAddons(addon)}
          >
            <div
              className={`${
                props.addons.includes(addon) &&
                "bg-purplishBlue border-purplishBlue"
              } flex w-7 h-7 border-2 border-lightGray rounded mr-4 justify-center items-center`}
            >
              {props.addons.includes(addon) && (
                <FaCheck className="text-white" />
              )}
            </div>
            <div className="flex flex-col text-[16px] font-[700] text-marineBlue text-nowrap">
              <p>{addon.title}</p>
              <p className="text-coolGray text-wrap">{addon.description}</p>
            </div>
            <div className="flex flex-grow justify-end text-purplishBlue font-[500]">
              {`+$${
                props.interval === "monthly"
                  ? `${addon.price.monthly}/mo`
                  : `${addon.price.yearly}/yr`
              } `}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
