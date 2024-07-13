import Random from "./components/Random";
import Tag from "./components/Tag";
export default function App() {
  return (
  <div className="w-full h-screen flex flex-col background ">
  <h1 className="bg-white rounded-sm m-[40px] mt-[10px] mb-[15px] p-[15px] text-center text-xl">Random GIF's</h1>
  <div className="flex flex-col justify-evenly items-center h-[90vh]">
    <Random></Random>
    <Tag></Tag>
  </div>
  </div>);
}
