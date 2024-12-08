import ProjectCard from "../ui/ProjectCard";

const projects = [
  {
    title: "Video Collaboration with IDP",
    description: "I created a short video to promote IDP's Australia.....",
    image: "/path/to/image1.jpg", // Replace with actual image paths

    skill: "Content",
  },
];

export default function Portfolio() {
  return (
    <div className="h-full bg-cover bg-center bg-gradient-to-r from-softWhite to-White bg-no-repeat flex items-center px-10 py-24">
      <div className="container mx-auto max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg flex flex-col items-center  ">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          MY WORK
        </h2>
        <div className="grid grid-cols-1  mt-24  gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
