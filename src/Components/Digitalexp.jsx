import React from "react";

const Digitalexp = () => {
  const stats = [
    {
      value: "150+",
      title: "Campaigns Launched",
      description:
        "We’ve crafted and executed more than 150 digital campaigns with measurable ROI.",
    },
    {
      value: "4x",
      title: "Average ROI",
      description:
        "Our clients typically see 4 times the return on their marketing investment.",
    },
    {
      value: "85%",
      title: "Client Retention Rate",
      description:
        "Trusted long-term partnerships built on proven performance and growth.",
    },
    {
      value: "60%",
      title: "Increase in Lead Generation",
      description:
        "Targeted campaigns that drive quality leads and meaningful engagement.",
    },
  ];

  return (
    <div>
      <section className="bg-gradient-to-tr from-white to-[#f9f5f2] py-16 px-15 md:px-14 lg:px-10 font-space">
        <div className="max-w-7xl mx-auto text-justify">
          <h2 className="md:text-[20px] text-[16px] leading-snug font-semibold  text-gray-700 uppercase mb-12">
            Our Digital Marketing Expertise, By the Numbers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className=" rounded-xl  p-6 text-left  bg-[#EEEEEE40]"
              >
                <p className="text-[36px] font-medium text-gray-900 mb-6">
                  {item.value}
                </p>
                <h3 className="text-[15px] font-medium text-gray-700 mb-3">
                  {item.title}
                </h3>
                <p className="text-[10px] text-gray-500">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Digitalexp;
