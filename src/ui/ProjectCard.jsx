import Modal from "./Modal";
import ViewProject from "./ViewProject";
import PropTypes from "prop-types";

function ProjectCard({ project }) {
  return (
    <div className="grid grid-cols-12 gap-3 mb-5 pb-12 lg:pb-3 lg:mb-3 items-center">
      {/* Left Image Section */}
      <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10 mb-10 md:mb-0">
        <div className="relative group">
          <img
            src={project.image}
            alt={project.title}
            className="rounded-lg shadow-md w-full"
          />
          <a
            href="#"
            className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <i className="fas fa-arrow-right text-white text-3xl"></i>
          </a>
        </div>
      </div>

      {/* Right Content Section */}
      <div className="col-span-12 md:col-span-6 md:px-5 lg:px-10">
        <div className="portfolio-text">
          <button className="bg-rose text-black px-6 py-1 rounded-full ">
            {project.skill}
          </button>
          <h6 className="text-sm font-medium text-gray-600 mb-2">
            <span>{project.tag}</span>
          </h6>
          <h4 className="text-2xl font-bold text-black mb-4">
            {project.title}
          </h4>
          <p className="text-gray-700 mb-6">{project.description}</p>
          <div className="btn-bar">
            <Modal>
              <Modal.Open opens="project">
                <button className="btn-secondary">View Project</button>
              </Modal.Open>
              <Modal.Window name="project">
                <ViewProject />
              </Modal.Window>
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    skill: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProjectCard;
