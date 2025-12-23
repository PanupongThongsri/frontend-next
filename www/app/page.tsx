import Image from "next/image";
import { redirect } from "next/navigation";
import Home from "@/components/Sections/Home/page"
import About from "@/components/Sections/About/page"
import History from "@/components/Sections/History/page";
import Experience from "@/components/Sections/Experience/page";
import Skills from "@/components/Sections/Skills/page";
import News from "@/components/Sections/News/page";

export default function App() {
  return (
    <>
      {/* ส่วน Home / Hero Banner */}
      <section id="home">
        {/* style={{ 
          height: "100vh", 
          background: "#fff", display:"flex", justifyContent:"center", alignItems:"center" }} */}
        <h1 className="text-5xl font-bold text-black">Welcome to My Portfolio</h1>
        <Home/>
      </section>

      {/* ส่วนอื่นๆ เรียงลงมา */}
      <section id="about">
        <About />
      </section>

      <section id="history">
        <History />  {/* ถ้ายังไม่มีไฟล์ ให้ใส่ <div>History</div> ไปก่อน */}
      </section>

      <section id="experience">
        <Experience />
      </section>

      {/* <section id="skills">
        <Skills />
      </section> */}

      <section id="news">
        <News />
      </section>
    </>
  );
}
