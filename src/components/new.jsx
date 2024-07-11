import React from "react";
import NewCard from "./newCard";
import { newData } from "../data/newData";
const New = () => {
  return (
    <div className="bg-gray-50 pt-12 sm:pt-32 pb-0">
      <div className="w-4/5 mx-auto flex flex-col md:flex-row gap-20">
        <div className="md:w-1/5 font-semibold text-4xl justify-center items-center">
          What's new
          <br />
          in the bucket
        </div>
        <div className="md:w-4/5 flex flex-row gap-4 flex-wrap pb-10">
          {newData.map((item) => (
            <NewCard
              key={item.id}
              image={item.image}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default New;
