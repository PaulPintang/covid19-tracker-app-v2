import React, { useState } from "react";
import CountUp from "react-countup";
import virus from "../assets/images/virus-sm.png";

const Summary = (props) => {
  // destructure array as props
  const { continents, total } = props;
  // state
  const [select, setSelect] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState("Global");
  return (
    <div
      className="shadow-md rounded-md px-7 py-5 mx-auto mt-3 dark:bg-gray-800 bg-white relative bottom-14"
      style={{ maxWidth: 830 }}
    >
      <div className="flex items-center justify-between mx-auto ">
        <div className="flex items-center gap-3 ">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Status</p>
            {/* <select
              name=""
              id=""
              multiple={false}
              className="font-semiboldtext-gray-800 dark:text-gray-300 bg-white dark:bg-opacity-0 focus:outline-none cursor-pointer"
              style={{ paddingBottom: 2 }}
              value={continentData}
              onChange={handler}
            >
              <option className="dark:bg-gray-800" value="Global">
                Global
              </option>
              {continents.map((item, i) => (
                <option
                  className="dark:bg-gray-800"
                  key={i}
                  value={(item.active, item.recovered, item.deaths)}
                >
                  {item.continent}
                </option>
              ))}
            </select> */}
            <div class="relative inline-block text-left">
              {/* Country */}
              <div>
                <button
                  type="button"
                  class="inline-flex justify-between w-44 rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none border-opacity-30 dark:bg-gray-800 dark:text-gray-400"
                  id="menu-button"
                  aria-expanded="true"
                  aria-haspopup="true"
                  onClick={() => setSelect(!select)}
                >
                  {selectedContinent}
                  <svg
                    class="-mr-1 ml-2 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {select ? (
                <div
                  class="transition-all h-auto py-2 overflow-auto origin-top-right absolute z-50 right-0 mt-2 w-full rounded-md shadow-lg bg-white dark:bg-gray-800 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="menu-button"
                  tabindex="-1"
                >
                  {select && (
                    <div class="py-1" role="none">
                      {continents.map((item, i) => (
                        <button
                          href="#"
                          class="w-full text-left text-gray-700 block px-4 py-1 text-sm dark:bg-gray-800 dark:text-gray-400 hover:dark:bg-gray-600 transition-all hover:bg-gray-200"
                          role="menuitem"
                          tabindex="-1"
                          id="menu-item-0"
                          key={i}
                          value={item.continent}
                          onClick={() => {
                            setSelect(!select);
                            setSelectedContinent(item.continent);
                          }}
                        >
                          {item.continent}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Active Cases</p>
            <p className="font-semibold text-gray-800 dark:text-gray-300">
              <CountUp
                end={total.active}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
              {/* {continentData.map((data) => (
                <div key={data.id}>
                  <p>{data.active}</p>
                  <p>{data.recovered}</p>
                  <p>{data.deaths}</p>
                </div>
              ))} */}
              {/* {continentData} */}
            </p>
            <small className="text-yellow-300 text-sm">
              + {total.todayCases} today
            </small>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Recovered</p>
            <p className="font-semibold text-gray-800 dark:text-gray-300">
              <CountUp
                end={total.recovered}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
            <small className="text-green-300 text-sm">
              + {total.todayRecovered} today
            </small>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12">
            <img src={virus} alt="" />
          </div>
          <div>
            <p className="text-gray-500 text-sm">Total Deaths</p>
            <p className="font-semibold text-gray-800 dark:text-gray-300">
              <CountUp
                end={total.deaths}
                duration={1}
                formattingFn={(total) => total.toLocaleString()}
              />
            </p>
            <small className="text-red-300 text-sm">
              + {total.todayDeaths} today
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
