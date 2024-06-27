"use client";
import Image from "next/image";
import React from "react";
import Button from "./button";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 900,
      delay: 500,
      easing: "ease-out"
    });
  });
  return (
    <section className=" max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row ">
      <div data-aos="fade-down" data-aos-delay="300" className="hero-map" />
      {/* Left section */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ">
        <Image
          data-aos="fade-down"
          data-aos-delay="300"
          src={"/camp.svg"}
          width={50}
          height={50}
          alt="camp_pic"
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px] "
        />
        <h1
          data-aos="zoom-in"
          data-aos-delay="300"
          className="bold-52 lg:bold-88"
        >
          Putuk Truno Camp Area
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className=" regular-16 mt-6 text-gray-30 xl:max-w-[520px] "
        >
          We want to be on each of your journeys seeking the satisfaction of
          seeing the incorruptible beauty of nature. We can help you on an
          adventure around the world in just one app
        </p>
        <div className="my-11 flex flex-wrap gap-5 ">
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="flex items-center gap-2 "
          >
            {Array(5)
              .fill(1)
              .map((_, index) => {
                return (
                  <Image
                    src="/star.svg"
                    key={index}
                    alt="star"
                    width={24}
                    height={24}
                  />
                );
              })}
          </div>
          <p
            data-aos="flip-left"
            data-aos-delay="300"
            className="bold-16 lg:bold-20 text-blue-70"
          >
            198k
            <span className="regular-16 lg:regular-20 ml-1 ">
              Excelent reviews
            </span>
          </p>
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-delay="300"
          className="flex w-full gap-3 sm:flex-row flex-col lg:flex-row "
        >
          <Button type="button" title="Download App" variant="btn_green" />
          <Button
            type="button"
            title="How we work?"
            icon="/play.svg"
            variant="btn_white_text"
          />
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="relative flex flex-1 items-start "
      >
        <div className="px-7 py-8 flex   relative z-20 w-[268px] flex-col gap-8 rounded-3xl bg-green-90">
          <div className="flex flex-col ">
            <div className="FlexBetwean">
              <p className="regular  text-gray-20">location</p>
              <Image src={"/close.svg"} alt="close" width={24} height={24} />
            </div>
            <div className="text-white bold-20">cairo</div>
          </div>
          <div className="FlexBetwean">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20 ">distance</p>
              <p className="bold-20 text-white">99 mil</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20 ">Elevation</p>
              <p className="bold-20 text-white"> 20.40 Km</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
