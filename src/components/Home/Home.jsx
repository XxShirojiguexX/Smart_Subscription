import React from "react";
import SwiperSlider from "../SwiperSlider/SwiperSlider";
import ServiceContainer from "../ServiceContainer/ServiceContainer";
import { useLoaderData } from "react-router";
import BestSubscription from "../BestSubscription/BestSubscription";
import ServiceFeature from "../ServiceFeature/ServiceFeature";
import ServicesSectionTitle from "../ServicesSectionTitle/ServicesSectionTitle";
import ServiceSupport from "../ServiceSupport/ServiceSupport";
import NewProduct from "../NewProduct/NewProduct";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const ServiceData = useLoaderData();
  // console.log(data);
  return (
    <div className="max-w-screen-2xl mx-auto px-16">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="mt-7">
        <SwiperSlider></SwiperSlider>
      </div>
      <div className="mt-20">
        <ServicesSectionTitle></ServicesSectionTitle>
      </div>
      <div className="mt-5 ">
        <ServiceContainer
          key={ServiceData.id}
          ServiceData={ServiceData}
        ></ServiceContainer>
      </div>

      <div className=" mt-10 mb-10">
        <ServiceFeature></ServiceFeature>
      </div>
      <div>
        <BestSubscription></BestSubscription>
      </div>
      <div>
        <NewProduct></NewProduct>
      </div>
      <div>
        <ServiceSupport></ServiceSupport>
      </div>
    </div>
  );
};

export default Home;
