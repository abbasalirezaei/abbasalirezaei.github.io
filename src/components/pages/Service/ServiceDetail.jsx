import { useParams, Link } from "react-router-dom";
import servicesData from "./servicesData";

const ServiceDetail = () => {
  const { slug } = useParams();

  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return (
      <div className="p-10">
        <h2 className="text-3xl font-bold">Service Not Found</h2>
      </div>
    );
  }

  return (
    <section className="p-10">

      <Link
        to="/services"
        className="text-purple-600 hover:underline"
      >
        ← Back to Services
      </Link>

      <div className="mt-8 bg-white rounded-xl shadow p-8">

        <div className="text-6xl text-purple-600 mb-6">
          {service.icon}
        </div>

        <h1 className="text-4xl font-bold mb-5">
          {service.title}
        </h1>

        <p className="text-gray-600 leading-8 mb-8">
          {service.description}
        </p>

        <h3 className="text-2xl font-semibold mb-4">
          Features
        </h3>

        <ul className="list-disc ml-6 space-y-2">
          {service.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>

      </div>

    </section>
  );
};

export default ServiceDetail;