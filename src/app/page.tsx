import Advantages from "@/components/Advantages/Advantages";
import OurWorks from "@/components/OurWorks/OurWorks";
import OurTeam from "@/components/OurTeam/OurTeam";
import Service from "@/components/Service/Service";
import Reviews from "@/components/Reviews/Reviews";
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
      <Advantages />
      <OurWorks />
      <Service />
      <Reviews />
      <div className="form_back">
        <Form />
      </div>
    </>
  );
}
