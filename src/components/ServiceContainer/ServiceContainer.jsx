import React from "react";
import ServiceContentCard from "../ServiceContentCard/ServiceContentCard";

const ServiceContainer = ({ ServiceData }) => {
  //   console.log(ServiceData);
  return (
    <div className="py-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {ServiceData.map((data) => (
          <ServiceContentCard key={data.id} data={data}></ServiceContentCard>
        ))}
      </div>
    </div>
  );
};

export default ServiceContainer;
