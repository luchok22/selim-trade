import Advantages from "@/components/Advantages/Advantages";
import ReusableComponent from "@/components/ReusableComponent/ReusableComponent";
import OurWorks from "@/components/OurWorks/OurWorks";

export default function Home() {
  return (
    <>
      <ReusableComponent title={"Наши преимущества"}>
        <Advantages />
      </ReusableComponent>
      <ReusableComponent title={"Наши работы"}>
        <OurWorks />
      </ReusableComponent>
    </>
  );
}
