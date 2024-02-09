import Main from "@/components/Main/Main";
import LastNews from "@/components/LastNews/LastNews";
import OurTeam from "@/components/OurTeam/OurTeam";
import Navbar from "@/components/navbar/Navbar";
import Form from "@/components/Form/Form";

export default function Home() {
  return (
    <>
      <div className="main_back">
        <Navbar />
        <Main />
      </div>
      <OurTeam />
      <LastNews />
      <div className="form_back">
      <Form/>
      </div>
    </>
  );
}
