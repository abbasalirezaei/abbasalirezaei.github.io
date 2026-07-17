import ServiceItem from "./ServiceItem";
import servicesData from "./servicesData";

const Service = () => {
  return (
    <section className="pb-10">
      <div className="flex flex-wrap md:px-4">
        {servicesData.map((service) => (
          <ServiceItem key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
};

export default Service;