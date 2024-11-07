import Step4 from "@/components/Step.4";
import Step1 from "@/components/Step1";
import Step2 from "@/components/Step2";
import Step3 from "@/components/Step3";
import Image from "next/image";
import { useState } from "react";
import PlanModel from "@/models/PlanModel";
import AddonModel from "@/models/AddonModel";

export default function Home() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [plan, setPlan] = useState<PlanModel | null>(null);
  const [interval, setInterval] = useState("monthly");
  const [addons, setAddons] = useState<AddonModel[]>([]);

  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="flex w-full h-screen justify-center items-center bg-magnolia">
      <div className="flex h-[80%] p-4 rounded-md bg-white">
        <div className="flex w-[300px] relative">
          <Image
            className="absolute w-full h-full rounded-md object-cover"
            src="/images/bg-sidebar-desktop.svg"
            alt=""
            width={500}
            height={500}
          ></Image>
          <div className="absolute flex flex-col w-full p-8 mt-4 gap-y-6">
            <div className="flex items-center gap-x-4">
              <div
                className={`${
                  step === 1
                    ? "bg-lightBlue border-lightBlue"
                    : "border-white text-white"
                } flex w-10 h-10 font-[700] border items-center justify-center rounded-full`}
              >
                1
              </div>
              <div className="flex flex-col">
                <p className="text-[14px] font-[400] text-lightGray">STEP 1</p>
                <p className="text-[16px] font-[500] text-white tracking-wider">
                  YOUR INFO
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div
                className={`${
                  step === 2
                    ? "bg-lightBlue border-lightBlue"
                    : "border-white text-white"
                } flex w-10 h-10 font-[700] border items-center justify-center rounded-full`}
              >
                2
              </div>
              <div className="flex flex-col">
                <p className="text-[14px] font-[400] text-lightGray">STEP 2</p>
                <p className="text-[16px] font-[500] text-white tracking-wider">
                  SELECT PLAN
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div
                className={`${
                  step === 3
                    ? "bg-lightBlue border-lightBlue"
                    : "border-white text-white"
                } flex w-10 h-10 font-[700] border items-center justify-center rounded-full`}
              >
                3
              </div>
              <div className="flex flex-col">
                <p className="text-[14px] font-[400] text-lightGray">STEP 3</p>
                <p className="text-[16px] font-[500] text-white tracking-wider">
                  ADD-ONS
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div
                className={`${
                  step === 4 || step === 5
                    ? "bg-lightBlue border-lightBlue"
                    : "border-white text-white"
                } flex w-10 h-10 font-[700] border items-center justify-center rounded-full`}
              >
                4
              </div>
              <div className="flex flex-col">
                <p className="text-[14px] font-[400] text-lightGray">STEP 4</p>
                <p className="text-[16px] font-[500] text-white tracking-wider">
                  SUMMARY
                </p>
              </div>
            </div>
          </div>
        </div>
        {step === 1 || step === 2 || step === 3 || step === 4 ? (
          <div className="flex flex-col w-[550px] mx-20 mt-16 mb-8">
            {/* Step1 */}
            {step === 1 && (
              <Step1
                name={name}
                setName={setName}
                email={email}
                setEmail={setEmail}
                phone={phone}
                setPhone={setPhone}
              />
            )}
            {/* Step2 */}
            {step === 2 && (
              <Step2
                plan={plan}
                setPlan={setPlan}
                interval={interval}
                setInterval={setInterval}
              />
            )}
            {/* Step3 */}
            {step === 3 && (
              <Step3
                addons={addons}
                setAddons={setAddons}
                interval={interval}
              />
            )}
            {/* Step4 */}
            {step === 4 && (
              <Step4
                plan={plan}
                interval={interval}
                addons={addons}
                setStep={setStep}
              />
            )}

            <div className="flex w-full h-full items-end justify-between">
              <button
                className={`${
                  step === 1 && "opacity-50 cursor-not-allowed"
                } px-6 py-3 bg-magnolia border border-marineBlue text-marineBlue font-[700] rounded-md`}
                onClick={prevStep}
                disabled={step === 1}
              >
                Go Back
              </button>

              <button
                className="px-6 py-3 bg-marineBlue hover:bg-[#174a89] text-white font-[700] rounded-md"
                onClick={nextStep}
              >
                {step === 4 ? "Confirm" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-[550px] mx-20 px-12">
            <div className="flex flex-col w-full h-full items-center justify-center gap-y-8">
              <Image
                src="/images/icon-thank-you.svg"
                alt="Thank you!"
                width={100}
                height={100}
              />
              <div className="flex flex-col text-center gap-y-3">
                <h3 className="text-[28px] text-center font-[700]">
                  Thank you!
                </h3>
                <p className="text-coolGray font-[500]">
                  Thanks for confirming your subscription! We hope you have fun
                  using our platform. If you ever need support, please feel free
                  to email us at support@loremgaming.com.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
