const ViewProject = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Video Collaboration with IDP
      </h1>

      {/* Design Container */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Side */}
        <div className="bg-white p-6 rounded shadow-lg">
          <img
            src="/path-to-image.png"
            alt="UX Agency Landing Page"
            className="w-full h-auto rounded"
          />
          <ul className="mt-4 text-gray-600 space-y-2">
            <li>✔️ Unique Concept</li>
          </ul>
        </div>

        {/* Right Side */}
        <div>
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Project Details */}
          <div className="mt-6 space-y-2 text-gray-700">
            <p>
              <strong>Type:</strong> Short Video
            </p>

            <p>
              <strong>Live URL:</strong>{" "}
              <a
                href="https://www.tiktok.com/@gadgetsinnepal/video/7210360826736217349"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Video Link
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProject;
