import Image from "next/image";
import StartedTasks from "../components/home/StartedTasks";
import RightNow from "../components/home/RightNow";
import MyDay from "../components/home/MyDay";

export default function Home() {
  return (
    <>
      <RightNow />
      <MyDay />
      {/* 
      <StartedTasks /> */}
    </>
  );
}
