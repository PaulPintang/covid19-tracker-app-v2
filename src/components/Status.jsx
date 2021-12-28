import React from "react";

const Status = (props) => {
  const { countries } = props;
  return (
    <div className="bg-white shadow-md dark:bg-gray-800 mb-20 rounded-md p-2">
      <div class="overflow-y-auto ">
        <table className="min-w-full  border-collapse w-full border-none">
          <thead className="sticky top-0 z-100 ">
            <tr>
              <th
                scope="col"
                className="md:px-3 lg:px-3 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm rounded-tl-md"
              >
                Top 5 Countries
              </th>
              <th
                scope="col"
                className="hidden md:table-cell lg:table-cell py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Total Cases
              </th>
              <th
                scope="col"
                className="hidden md:table-cell lg:table-cell  py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Active Cases
              </th>
              <th
                scope="col"
                className="hidden md:table-cell lg:table-cell py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Today Cases
              </th>
              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Recovered
              </th>
              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell  py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Today Recovered
              </th>
              <th
                scope="col"
                className=" hidden md:table-cell lg:table-cell  py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm"
              >
                Deaths
              </th>
              <th
                scope="col"
                className="py-3  text-xs font-medium text-gray-500 dark:text-gray-50 uppercase tracking-wider bg-white dark:bg-gray-700 dark:bg-opacity-60 shadow-sm rounded-tr-md"
              >
                Today Deaths
              </th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200 overflow-auto text-gray-700">
            {countries
              .sort((a, b) => b.cases - a.cases)
              .slice(0, 5)
              .map((country) => (
                <tr className="border-none">
                  <td className="py-2 pl-3  border-none">
                    <div className="flex items-center gap-3">
                      <div class="w-7">
                        <img
                          src={country.countryInfo.flag}
                          alt=""
                          className="w-full rounded-md"
                        />
                      </div>
                      <p className="font-medium uppercase text-sm dark:text-gray-300">
                        {country.country}
                      </p>
                    </div>
                  </td>
                  <td className="dark:text-gray-400 py-2">
                    {country.cases.toLocaleString()}
                  </td>
                  <td className="dark:text-gray-400 py-2">
                    {country.active.toLocaleString()}
                  </td>
                  <td className="text-yellow-300  py-2">
                    + {country.todayCases.toLocaleString()}
                  </td>
                  <td className="dark:text-gray-400 py-2 ">
                    {country.recovered.toLocaleString()}
                  </td>
                  <td className="text-green-300 py-2 pl-3">
                    + {country.todayRecovered.toLocaleString()}
                  </td>
                  <td className="dark:text-gray-400 py-2 ">
                    {country.deaths.toLocaleString()}
                  </td>
                  <td className=" text-red-300 py-2 pl-6">
                    + {country.todayDeaths.toLocaleString()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Status;
