import Main from "@/components/Main/Main";
import Offers from "@/components/Offers/Offers";
import LastNews from "@/components/LastNews/LastNews";
import OurTeam from "@/components/OurTeam/OurTeam";
import Navbar from "@/components/navbar/Navbar";

export default function Home() {
  return (
    <>
      <div className="main_back">
        <Navbar />
        <Main />
      </div>
      <OurTeam />
      <LastNews />
      <Offers />
    </>
  );
}
