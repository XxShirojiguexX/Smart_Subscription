import React from "react";
import NewArrivalBanner from "../../Pages/NewArrivalContent/NewArrivalBanner";
import NewArrivalCotentCard from "../../Pages/NewArrivalContent/NewArrivalCotentCard";
import { useLoaderData } from "react-router";
import TitleOfNewArrival from "../../Pages/NewArrivalContent/TitleOfNewArrival";
import { Helmet } from "react-helmet-async";

const NewArrival = () => {
  const upComingData = useLoaderData();
  return (
    <div className="max-w-screen-2xl mx-auto px-16">
      <Helmet>
        <title>NewArrival</title>
      </Helmet>

      <div>
        <NewArrivalBanner></NewArrivalBanner>
      </div>
      <div>
        <TitleOfNewArrival></TitleOfNewArrival>
      </div>
      <div>
        <NewArrivalCotentCard
          key={upComingData.id}
          upComingData={upComingData}
        ></NewArrivalCotentCard>
      </div>
    </div>
  );
};

export default NewArrival;
