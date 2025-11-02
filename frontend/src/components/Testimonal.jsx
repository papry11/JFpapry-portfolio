import React from 'react';
import { motion } from "framer-motion";

const Testimonal = () => {
  const cardsData = [
    {
      name: 'Emma Carter',
      handle: '@emmadesigns',
      date: 'April 20, 2025',
      feedback:
        'The website redesign exceeded our expectations! Clear communication and flawless execution throughout the project.'
    },
    {
      name: 'Noah Williams',
      handle: '@noahtech',
      date: 'May 10, 2025',
      feedback:
        'Amazing experience — fast delivery, modern design, and perfect responsiveness across all devices. Highly recommend!'
    },
    {
      name: 'Olivia Martinez',
      handle: '@oliviawrites',
      date: 'June 5, 2025',
      feedback:
        'Very professional and detail-oriented. The final product perfectly reflected our brand’s identity.'
    },
    {
      name: 'Ethan Johnson',
      handle: '@ethanj_dev',
      date: 'July 2, 2025',
      feedback:
        'Incredible work ethic! Delivered high-quality code and maintained excellent communication throughout the process.'
    },
    {
      name: 'Mia Thompson',
      handle: '@miacreatives',
      date: 'August 14, 2025',
      feedback:
        'Smooth collaboration from start to finish. The UI/UX was clean, engaging, and user-friendly.'
    },
  ];

  const CreateCard = ({ card }) => (
    <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-white">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
            {card.name.charAt(0)}
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <p className="font-medium">{card.name}</p>
            </div>
            <span className="text-xs text-slate-500">{card.handle}</span>
          </div>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-800">{card.feedback}</p>
      <div className="flex items-center justify-between text-slate-500 text-xs">
        <span>Posted on</span>
        <p>{card.date}</p>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }
        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <div className="text-center mb-10 mt-15">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-3 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent"
        >
          Loved by Clients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 max-w-2xl mx-auto text-sm md:text-lg"
        >
          Hear what international clients say about working together — reliable, creative, and always focused on results.
        </motion.p>
      </div>

      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>

      <div className="marquee-row w-full mx-auto max-w-5xl overflow-hidden relative">
        <div className="absolute left-0 top-0 h-full w-20 z-10 pointer-events-none bg-gradient-to-r from-white to-transparent"></div>
        <div className="marquee-inner marquee-reverse flex transform-gpu min-w-[200%] pt-10 pb-5">
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={index} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-20 md:w-40 z-10 pointer-events-none bg-gradient-to-l from-white to-transparent"></div>
      </div>
    </>
  );
};

export default Testimonal;
