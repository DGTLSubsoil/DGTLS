import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";
import { useEffect, useState } from "react";
import Banner from "./../components/modules/home3/Banner";
import Work from "@/components/modules/home3/Work";
// import Team from "@/components/modules/home3/Team";
import FAQ from "@/components/modules/home3/Faq";
import Roadmap from "@/components/modules/index/Roadmap";
// import Benifits from "@/components/modules/index/Benifits";
import Token from "@/components/modules/home3/Token";
SwiperCore.use([Autoplay, Navigation, Pagination]);
import { fetchData } from "@/apiConfig";
import Benifits from "@/components/modules/home3/Benifits";
import Team from "@/components/common/Team";
// import Team from "@/components/modules/index/Team";

const Home3 = () => {
  const [completed, setCompleted] = useState([]);
  const [data, setData] = useState([]);
  const [tokenomics, setTokenomics] = useState([]);


  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/completed");
        setCompleted(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/tokenomics");
        setTokenomics(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);
  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/notes");
        setData(response)
      } catch (error) {

      }
    };
    getAllData();
  }, []);
  return (
    <>
      <Banner />
      <Work />
      <Benifits />
      <Token tokenomics={tokenomics} />
      <Roadmap />
      <FAQ />
    </>
  );
};
export default Home3;
