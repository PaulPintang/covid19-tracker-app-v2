import React from "react";
import CountUp from "react-countup";
import virusLg from "../assets/images/virus-lg.svg";

const Content = ({ totalCases }) => {
  return (
    <div
      className="flex items-center justify-between pb-10"
      style={{ height: "calc(85vh - 7rem)" }}
    >
      <div className="space-y-3">
        <div className="dark:text-gray-300 space-y-3">
          <h1 className="text-5xl">
            Total Cases:
            <span className="pl-3">
              <CountUp
                end={totalCases}
                duration={1.5}
                formattingFn={(totalCases) => totalCases.toLocaleString()}
              />
            </span>
          </h1>

          <div>
            <p className="text-3xl font-light">Covid-19 Worldwide Status</p>
            <p className="font-medium italic text-gray-500">
              As of December 17, 2021
            </p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-3xl font-light dark:text-gray-300">
            What is Covid-19 ?
          </p>
          <p className="max-w-md text-gray-600">
            Coronavirus disease (Covid-19) is an infectious disease caused by a
            newly discovered coronavirus. Most people who fall sick with
            COVID-19 will experience mild to moderate symptoms and recover
            without special treatment.
          </p>
        </div>
        <div className="flex flex-wrap justify-start md:flex lg:flex items-center gap-2 md:gap-4 lg:gap-4 pb-3">
          <div className="flex gap-3 items-center">
            <div className="bg-yellow-300 w-8 h-2"></div>
            <small className="dark:text-gray-400">Active</small>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-green-300 w-8 h-2"></div>
            <small className="dark:text-gray-400">Recovered</small>
          </div>
          <div className="flex gap-3 items-center">
            <div className="w-8 h-2 bg-red-300"></div>
            <small className="dark:text-gray-400">Deaths</small>
          </div>
        </div>
      </div>

      <div style={{ width: 360 }}>
        <img src={virusLg} alt="" className="w-full rotate" />
      </div>
    </div>
  );
};

export default Content;
