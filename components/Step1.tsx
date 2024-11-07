export default function Step1(props: {
  name: string;
  setName: (name: string) => void;
  email: string;
  setEmail: (email: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-[32px] font-[700] text-marineBlue">
          Personal info
        </h3>
        <p className="text-[16px] font-[500] text-coolGray">
          Please provide your name, email address, and phone number.
        </p>
      </div>
      <div className="flex flex-col mt-12 gap-y-6">
        <div className="flex flex-col text-marineBlue relative">
          <label htmlFor="name" className="text-[14px] font-[500]">
            Name
          </label>
          <label
            htmlFor="name"
            className={`absolute ${
              props.name.length === 0 ? "flex" : "hidden"
            } right-0 text-strawberry font-[500]`}
          >
            This field is required
          </label>
          <input
            type="text"
            required
            value={props.name}
            onChange={(e) => props.setName(e.target.value)}
            id="name"
            placeholder="Your Name"
            className="w-full p-4 mt-2 rounded-md invalid:border-strawberry bg-magnolia border border-coolGray focus:outline-none focus:ring-2 focus:ring-marineBlue focus:border-transparent text-marineBlue font-[700]"
          />
        </div>
        <div className="flex flex-col text-marineBlue relative">
          <label htmlFor="email" className="text-[14px] font-[500]">
            Email Address
          </label>
          <label
            htmlFor="email"
            className={`absolute ${
              props.email.length === 0 ? "flex" : "hidden"
            } right-0 text-strawberry font-[500]`}
          >
            This field is required
          </label>
          <input
            type="email"
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
            required
            id="email"
            placeholder="Your Email Address"
            className="w-full p-4 mt-2 rounded-md invalid:border-strawberry bg-magnolia border border-coolGray focus:outline-none focus:ring-2 focus:ring-marineBlue focus:border-transparent text-marineBlue font-[700]"
          />
        </div>
        <div className="flex flex-col text-marineBlue relative">
          <label htmlFor="phone" className="text-[14px] font-[500]">
            Phone Number
          </label>
          <label
            htmlFor="phone"
            className={`absolute ${
              props.phone.length === 0 ? "flex" : "hidden"
            } right-0 text-strawberry font-[500]`}
          >
            This field is required
          </label>
          <input
            type="text"
            value={props.phone}
            onChange={(e) => props.setPhone(e.target.value)}
            required
            id="phone"
            placeholder="e.g. +1 555 555 5555"
            className="w-full p-4 mt-2 rounded-md invalid:border-strawberry bg-magnolia border border-coolGray focus:outline-none focus:ring-2 focus:ring-marineBlue focus:border-transparent text-marineBlue font-[700]"
          />
        </div>
      </div>
    </div>
  );
}
