import React from "react";
import Button from "./button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col item-start justify-center gap-12 ">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[320px]"   data-aos="zoom-in"
      data-aos-delay="350">
            Get for free now!
          </h2>
          <p className="regular-16 text-gray-30"   data-aos="zoom-in"
      data-aos-delay="350">
            Available on iOS and Android
          </p>
          <div className="flex gap-5 w-full flex-col whitespace-nowrap xl:flex-row ">
            <Button
              type="button"
              title="DownLoad App"
              icon="/apple.svg"
              variant="btn_white"
            />
            <Button
              type="button"
              title="App store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={600} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
