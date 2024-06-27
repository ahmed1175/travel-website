import { FEATURES } from "@/Data/data";
import Image from "next/image";

import React from "react";

const Feature = () => {
  return (
    <section className="  overflow-hidden flex flexCenter flex-col bg-feature-bg bg-center bg-no-repeat py-24   ">
      <div className="max-container padding-container relative flex  w-full justify-end  ">
        <div className="flex flex-1 lg:min-h-[900px] ">
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone"
          />
        </div>
        <div className="z-20 flex w-full flex-col lg:w-[60%] ">
          <h2 className="bold-40 lg:bold-64 capitalize" >Our Features </h2>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:mg-20 lg:gap-20 ">
            {FEATURES.map((feature) => {
              return (
                <Featuressection
                  title={feature.title}
                  key={feature.title}
                  icon={feature.icon}
                  description={feature.description}
                  variant={feature.variant}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
type featuressection = {
  title: string;
  description: string;
  variant: string;
  icon: string;
};
const Featuressection = ({
  title,
  icon,
  description,
  variant,
}: featuressection) => {
  return (
    <li
      className="flex w-full flex-1 flex-col items-start "
      data-aos="zoom-in"
      data-aos-delay="350"
    >
      <div className=" rounded-full p-4 lg:p-7 bg-green-500">
        <Image src={icon} width={50} height={50} alt="icon" />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize">{title}</h2>
      <p className="text-gray-50 regular-16 mt-5 lg:mt-[30px] lg:bg-none ">
        {description}
      </p>
    </li>
  );
};
export default Feature;
