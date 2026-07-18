import React from 'react';

const services = [
  {
    number: '01',
    title: 'Social Media Marketing',
    description: 'Building brand awareness and engagement through curated content and ads across all major platforms.'
  },
  {
    number: '02',
    title: 'Search Engine Marketing',
    description: 'Driving traffic and conversions through expertly managed Google Ads and paid search campaigns.'
  },
  {
    number: '03',
    title: 'Email Marketing',
    description: 'Crafting compelling email journeys that nurture leads and maximize customer retention.'
  },
  {
    number: '04',
    title: 'Content Marketing',
    description: 'Developing high-value, SEO-optimized content that attracts and converts.'
  },
  {
    number: '05',
    title: 'Influencer & Affiliate Marketing',
    description: 'Expanding your brand’s reach through strategic partnerships and influencer collaborations.'
  },
  {
    number: '06',
    title: 'Analytics & Reporting',
    description: 'Full-funnel tracking and clear reporting to understand performance and optimize continuously.'
  }
];

const DigitalMk = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-10 bg-white font-space">
      <div className="max-w-7xl mx-auto">
       <div className='flex justify-between '> 
            <p className="text-[20px] font-medium text-black uppercase tracking-wide mb-2">
              Digital Marketing Services
            </p>
            <h2 className="text-[40px] font-medium text-gray-900 mb-10">
              Digital Marketing Services<br />Performance Driven Growth
            </h2>
       </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className=" bg-[#EEEEEE40] rounded-xl p-6  border-gray-100">
              <span className="text-[36px] font-medium text-gray-400 mb-7 block">{service.number}</span>
              <h3 className="text-[15px] font-medium text-gray-800 mb-4">{service.title}</h3>
              <p className="text-[10px] text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalMk;
