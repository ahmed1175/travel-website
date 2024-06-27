import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/Data/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flexCenter mb-4"   data-aos="fade-up"
    data-aos-delay="300">
      <div className="padding-container max-container flex w-full flex-col gap-14 ">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row ">
          <Link href="/" className="mb-10 "   data-aos="zoom-out"
      data-aos-delay="300">
            <Image src="/hilink-logo.svg" alt="hiLink" height={29} width={74} />
          </Link>
          <div className="flex flex-wrap  gap-10 sm:justify-between md:flex-1 ">
            {FOOTER_LINKS.map((columes) => {
              return (
                <FooterCol key={columes.title} title={columes.title}>
                  <ul className=" regular-14 flex flex-col gap-4 text-gray-30">
                    {columes.links.map((link) => {
                      return (
                        <Link
                          className="flex gap-6 flex-col "
                          key={link}
                          href="/"
                        >
                          {link}
                        </Link>
                      );
                    })}
                  </ul>
                </FooterCol>
              );
            })}
            <div className="flex flex-col gap-5 ">
              <FooterCol title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((links) => {
                  return (
                    <Link
                      key={links}
                      href="/"
                      className="flex gap-4 md:flex-col lg:flex-row "
                    >
                      <p className=" whitespace-nowrap ">{links.label}:</p>
                      <p className=" whitespace-nowrap text-blue-70 ">
                        {links.value}
                      </p>
                    </Link>
                  );
                })}
              </FooterCol>
            </div>
            <div className="flex flex-col gap-5 ">
              <FooterCol title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30 ">
                  {SOCIALS.links.map((link) => {
                    return (
                      <Link key={link} href="/">
                        <Image src={link} alt="logo" height={24} width={24} />
                      </Link>
                    );
                  })}
                </ul>
              </FooterCol>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
type FooterCol = {
  title: string;
  children: React.ReactNode;
};
const FooterCol = ({ title, children }: FooterCol) => {
  return (
    <div className="felx flex-col gap-5 "   data-aos="zoom-out"
    data-aos-delay="300">
      <h4 className="bold-18 whitespace-nowrap ">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
