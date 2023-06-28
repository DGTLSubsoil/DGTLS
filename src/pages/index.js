import "../../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import { useEffect, useState } from "react";
import Banner from "./../components/modules/home3/Banner";
import Benifits from "@/components/modules/index/Benifits";
import Roadmap from "@/components/modules/index/Roadmap";
import Wallet from "@/components/Wallet";
import { fetchData } from "@/apiConfig";
import Token from "@/components/modules/home3/Token";
SwiperCore.use([Autoplay, Navigation, Pagination]);




export default function Home() {
  const [data, setData] = useState([]);
  const [team, setTeam] = useState([]);


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

  useEffect(() => {
    const getAllData = async () => {
      try {
        const response = await fetchData("/team");
        setTeam(response)
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

  return (
    <>
      <Banner />
      <Wallet />
          <Token tokenomics={tokenomics} />
      <Benifits />
      <Roadmap />
    </>
  );
}


