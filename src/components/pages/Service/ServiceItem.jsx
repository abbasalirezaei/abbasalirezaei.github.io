import { Link } from "react-router-dom";

const ServiceItem = ({ service }) => {
  const { icon, title, shortDescription, slug } = service;

  return (
    <div className="w-full lg:w-1/2">
      <div className="my-4 md:mx-4 shadow p-6 rounded-md bg-white group hover:shadow-lg transition duration-300">

        <div className="w-16 h-16 flex items-center justify-center rounded-md text-3xl mb-5 bg-purple-100 text-purple-600 transition duration-300 group-hover:bg-purple-600 group-hover:text-white">
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          {title}
        </h3>

        <p className="text-gray-500 leading-7 mb-6">
          {shortDescription}
        </p>

        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center text-purple-600 font-medium hover:text-purple-800"
        >
          Learn More →
        </Link>

      </div>
    </div>
  );
};

export default ServiceItem;