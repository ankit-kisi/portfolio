import bgImg from "../assets/skills-bgImg.png";
import { TfiWrite } from "react-icons/tfi";
import { MdMovieEdit } from "react-icons/md";
import { IoShareSocialOutline } from "react-icons/io5";
import { GoPeople } from "react-icons/go";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlinePhotoCamera } from "react-icons/md";
import useScrollTo from "../hooks/useScrollTo";

function SkillCard({ color, icon, title, description }) {
  return (
    <div className={`flex items-center p-6 m-4 h-4/5 shadow-lg ${color} `}>
      <span>{icon}</span>
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}

const Skills = () => {
  const { handleScroll, isOpen, setIsOpen } = useScrollTo();
  return (
    <>
      <div
        className="h-full flex flex-col items-center px-10 py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          MY SKILLS
        </h2>
        <div className="container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 items-center  mt-24">
          <SkillCard
            color="bg-blue"
            icon=<TfiWrite className="mr-4 h-10 w-10 object-contain" />
            title="Writing"
            description="I am skilled in writing engaging blog posts, articles, and social media captions that capture the audience's attention and effectively convey my message."
          />
          <SkillCard
            color="bg-orange"
            icon=<MdMovieEdit className="mr-4 h-10 w-10 object-contain" />
            title="Video Editing"
            description="I can edit videos by transforming raw footage into polished, visually appealing content, adding transitions, effects, and audio to enhance the storytelling."
          />
          <SkillCard
            color="bg-soft"
            icon=<IoShareSocialOutline className="mr-4 h-10 w-10 object-contain" />
            title="Social Media Management"
            description="I have experience managing social media, from strategizing and scheduling posts to engaging with my audience, building a strong online presence and community."
          />
          <SkillCard
            color="bg-rose"
            icon=<GoPeople className="mr-4 h-10 w-10 object-contain" />
            title="Audience Engagement"
            description="I am skilled at engaging with my audience through comments, polls, and live interactions, fostering a loyal and active community."
          />
          <SkillCard
            color="bg-pink"
            icon=<IoVideocamOutline className="mr-4 h-10 w-10 object-contain" />
            C
            title="Videography"
            description="I am skilled in videography, capturing dynamic footage that tells compelling stories through camera work, composition, and lighting, and creating visually engaging content for various platforms."
          />
          <SkillCard
            color="bg-green"
            icon=<MdOutlinePhotoCamera className="mr-4 h-10 w-10 object-contain" />
            title="Photography"
            description="I can capture high-quality visuals through photography, enhancing my brand and telling compelling stories through images."
          />
        </div>
      </div>
      <div className=" bg-[#0B1221] py-10 px-2">
        <div className="flex flex-col space-y-4 sm:flex-row items-center justify-around">
          <p className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl">
            Interested working with me?
          </p>
          <button
            className="btn-primary"
            onClick={() => {
              handleScroll("contact");
            }}
          >
            CONTACT NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default Skills;
