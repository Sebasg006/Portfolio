import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaFigma,
} from "react-icons/fa";
import {
  SiAdobexd,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiFirebase,
  SiGit,
  SiAdobelightroom,
  SiAdobephotoshop,
  SiSketch,
} from "react-icons/si";

const skills = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaPython />, name: "Python" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiFirebase />, name: "Firebase" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiAdobelightroom />, name: "Lightroom" },
  { icon: <SiAdobephotoshop />, name: "Photoshop" },
  { icon: <SiSketch />, name: "Sketch" },
];

export default function SkillCarousel() {
  return (
    <div className="w-full py-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        speed={4000} // más lenta y suave
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        freeMode={true} // le da ese "flow" natural
        grabCursor={true}
        className="cursor-grab"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center justify-center text-center text-gray-200 hover:text-white transition-all duration-300">
              <div className="text-5xl mb-2 drop-shadow-md">{skill.icon}</div>
              <p className="text-sm">{skill.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
