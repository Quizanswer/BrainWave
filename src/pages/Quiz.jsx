import { Pagination } from "@nextui-org/react";
import CommonWrapper from "../components/CommonWrapper";
import { useContext, useState } from "react";
import { Appcontext } from "../context/appContex";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

const colors = ["warning"];
const Quiz = () => {
  const { token } = useContext(Appcontext);
  const [page, setPage] = useState(0);

  const pagination = async (skip) => {
    const res = await axios.get(
      ` https://test-alchemy-backend.onrender.com/q-paper/get-all?take=3&skip=${skip}`,
      { headers: { Authorization: `Bearer ${token}` } }
    );
    return res.data;
  };
  const { data, isPending, isError } = useQuery({
    queryKey: ["pagQues", page],
    queryFn: () => pagination(page),
    // placeholderData: keepPreviousData,
  });

  const totalPage = Math.ceil(data?.total / 3);

  console.log("data", data);
  return (
    <div>
      <div className="bg-[#DA853D] py-8 ">
        <CommonWrapper>
          <h1 className="py-1 text-4xl font-semibold text-white ">
            Question Paper Name
          </h1>
        </CommonWrapper>
      </div>
      <div className="bg-gray-100 ">
        <CommonWrapper>
          <div className="py-10 ">
            <section className="flex flex-col items-center justify-center gap-4">
              <h1 className="px-4 py-2 mx-auto bg-red-200 rounded-full w-max">
                Qestion 01
              </h1>
              <h2 className="text-4xl font-extrabold text-center">Quiz Name</h2>
              <p className="max-w-2xl">
                User interface design.One Awesome Flat Ui Kit in Psd format. The
                pack Quiz App is a mobile UI kit created using Sketch and
                Photoshop.
              </p>
            </section>

            <div className="grid grid-cols-1 gap-10 py-20 lg:grid-cols-2">
              <label
                htmlFor="first"
                className=" flex  items-center gap-2 border-4 border-transparent bg-white rounded-full hover:border-[#DA853D] py-4 lg:py-8 px-4 focus-within:border-[#DA853D]  cursor-pointer focus-within:text-[#DA853D] customInput relative"
              >
                <input
                  className="w-8 h-8 checked:border-2"
                  type="radio"
                  name="ramjan"
                  id="first"
                />
                <p className="text-2xl font-bold">
                  Participants will compete against
                </p>
              </label>
              <label
                htmlFor="second"
                className=" flex  items-center gap-2 border-4 border-transparent bg-white rounded-full hover:border-[#DA853D] py-4 lg:py-8 px-4 focus-within:border-[#DA853D]  cursor-pointer focus-within:text-[#DA853D] customInput relative"
              >
                <input
                  className="w-8 h-8  checked:bg-[#DA853D]"
                  type="radio"
                  name="ramjan"
                  id="second"
                />
                <p className="text-2xl font-bold ">
                  Participants will compete against
                </p>
              </label>
              <label
                htmlFor="third"
                className=" flex  items-center gap-2 border-4 border-transparent bg-white rounded-full hover:border-[#DA853D] py-4 lg:py-8 px-4 focus-within:border-[#DA853D]  cursor-pointer focus-within:text-[#DA853D] customInput relative"
              >
                <input
                  className="w-8 h-8  checked:bg-[#DA853D]"
                  type="radio"
                  name="ramjan"
                  id="third"
                />
                <p className="text-2xl font-bold">
                  Participants will compete against
                </p>
              </label>
              <label
                htmlFor="fourth"
                className=" flex  items-center gap-2 border-4 border-transparent bg-white rounded-full hover:border-[#DA853D] py-4 lg:py-8 px-4 focus-within:border-[#DA853D]  cursor-pointer focus-within:text-[#DA853D] customInput relative"
              >
                <input
                  className="w-8 h-8   checked:bg-[#DA853D]"
                  type="radio"
                  name="ramjan"
                  id="fourth"
                />
                <p className="text-2xl font-bold">
                  Participants will compete against
                </p>
              </label>
            </div>
          </div>
        </CommonWrapper>
      </div>
      <div className="bg-white ">
        <CommonWrapper>
          <div className="flex flex-col items-center justify-between gap-5 py-5 sm:flex-row">
            <button className="px-4 py-2 bg-gray-100 rounded-full">
              0% complete. keep it up!
            </button>
            <button className="px-10 py-4 text-white rounded-full bg-[#DA853D] text-lg uppercase">
              next question
            </button>
          </div>
        </CommonWrapper>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-4">
        {colors.map((color, index) => (
          <Pagination
            key={index}
            color={color}
            initialPage={page}
            total={totalPage}
          />
        ))}
      </div>
    </div>
  );
};
export default Quiz;
