import Main from "@/components/Main/Main";
import LastNews from "@/components/LastNews/LastNews";
import OurTeam from "@/components/OurTeam/OurTeam";
import Navbar from "@/components/navbar/Navbar";
import Service from "@/components/Service/Service";

export default function Home() {
  return (
    <>
      <div className="main_back">
        <Navbar />
        <Main />
      </div>
      <OurTeam />
      <LastNews />
      <Service />
    </>
  );
}
