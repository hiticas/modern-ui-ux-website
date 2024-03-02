import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <div>
          <p className="caption text-n-4 lg:block">Learning project*</p>
          <p className="caption text-n-4 lg:block">
            © {new Date().getFullYear()}. All rights reserved for{" "}
            <a
              className="text-blue-500"
              href="https://www.youtube.com/@javascriptmastery"
              target="_blank"
            >
              JsMastery youtube channel
            </a>
          </p>
        </div>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
