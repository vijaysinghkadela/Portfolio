import React from "react";

const services = [
  {
    title: "React JS",
    description:
      "I specialize in building dynamic and responsive web interfaces using React JS. With a focus on creating reusable components and seamless user experiences, I ensure that your website or application is both interactive and efficient.",
    bgColor: "bg-blue-200",
  },
  {
    title: "Node JS",
    description:
      "Harness the power of Node JS for scalable backend development. I build server-side applications that are fast, efficient, and capable of handling complex workflows, providing the backbone your project needs.",
    bgColor: "bg-yellow-200",
  },
  {
    title: "Express JS",
    description:
      "I offer Express JS development services for creating robust and scalable APIs. Whether you're looking to build a RESTful service or need middleware for your application, I've got you covered with a flexible and modular approach.",
    bgColor: "bg-purple-200",
  },
  {
    title: "Mongo DB",
    description:
      "Leverage the power of MongoDB for your data-driven applications. I design and manage document-based databases that provide flexibility and scalability, ensuring your application can grow with your business needs.",
    bgColor: "bg-green-200",
  },
];

const ServiceSection = () => {
  return (
    // <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-4 space-y-4 lg:space-y-0 p-8">
    //   {services.map((service, index) => (
    //     <div
    //       key={index}
    //       className={`w-full lg:w-1/4 p-6 ${service.bgColor} rounded-md shadow-md`}
    //     >
    //       <h3 className="text-xl font-bold mb-4">{service.title}</h3>
    //       <p className="text-gray-700">{service.description}</p>
    //     </div>
    //   ))}
        <>
          <div className="flex justify-center"><h1 className="text-3xl font-semibold">Services</h1></div>
        <div className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap justify-center items-center md:space-x-2 lg:space-x-4 space-y-4 md:space-y-2 lg:space-y-0 p-8">
    {services.map((service, index) => (
      <div
        key={index}
        className={`w-full md:w-1/2 lg:w-1/4 p-6 ${service.bgColor} rounded-md shadow-md`}
      >
        <h3 className="text-xl font-bold mb-4">{service.title}</h3>
        <p className="text-gray-700">{service.description}</p>
      </div>
    ))}
  </div>
        
        
        
        </>

    
  






  );
};

export default ServiceSection;
