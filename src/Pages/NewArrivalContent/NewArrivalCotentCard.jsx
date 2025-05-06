import React from "react";
import NewArrivalContantCardInfo from "./NewArrivalContantCardInfo";

const NewArrivalCotentCard = ({ upComingData }) => {
  return (
    <div className="py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-8">
        {upComingData.map((data) => (
          <NewArrivalContantCardInfo
            key={data.id}
            data={data}
          ></NewArrivalContantCardInfo>
        ))}
      </div>
    </div>
  );
};

export default NewArrivalCotentCard;
