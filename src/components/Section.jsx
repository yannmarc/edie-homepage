import React, { Fragment } from "react";

import { MdCreate, MdCode } from "react-icons/md";
import { FaServer } from "react-icons/fa";

function Section() {
  const data = [
    {
      id: 1,
      icon: <MdCreate className="text-white text-3xl"/>,
      colorCode: "#2D9CDB",
      headLine: "UI/UX",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    },
    {
      id: 2,
      icon: <MdCode className="text-white text-3xl"/>,
      colorCode: "#27AE60",
      headLine: "Frontend",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    },
    {
      id: 3,
      icon: <FaServer className="text-white text-3xl"/>,
      colorCode: "#EB5757",
      headLine: "Backend",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a metus ac nulla consequat aliquet id quis turpis.",
    },
  ];

  return (
    <Fragment>
      <div className="px-4 max-w-5xl mx-auto py-[48px] lg:pt-[200px]">
        <h2 className="text-2xl font-medium px-[0px] lg:w-[346px] lg:text-4xl">We offer high demand services</h2>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:flex-row gap-4 py-10">
          {data.map((item, index) => (
            <div className="py-[46px] px-7 rounded-3xl" key={item.id}>
              <span style={{backgroundColor: item.colorCode}} className={`p-4 bg-icons w-16 h-16 rounded-xl flex justify-center items-center`}>
                <span className="">{item.icon}</span>
              </span>
              <h3 className="font-bold text-2xl pt-4"><span>{item.headLine}</span></h3>
              <p className="text-[16px] py-5 text-[#4F4F4F]">{item.text}</p>
              <a href="#" className="py-2 px-2 bg-[#2D9CDB] rounded-md text-white inline-block">
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default Section;
