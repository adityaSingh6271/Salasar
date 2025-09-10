"use client";
import React from "react";

const Message = () => {
  return (
    <div className="mt-20">
      <div className="w-full flex justify-center py-10 px-4">
        {/* Pattern wrapper */}
        <div
          className="w-full max-w-[1280px] flex justify-center px-4 sm:px-6 md:px-8"
          style={{
            backgroundImage: `url('/MessagePattern.png')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* White card */}
          <div className="w-full max-w-[1000px] bg-white shadow-lg rounded-xl p-6 sm:p-8 md:p-12 my-6">
            <div
              className="text-justify mb-6 space-y-6 text-[16px] sm:text-[18px] md:text-[20px]"
              style={{
                color: "#054738",
                fontFamily: "Gambetta, serif",
                fontWeight: 500,
                lineHeight: "152%",
              }}
            >
              <p>
                “Quality means doing it right when no one is looking.” — Henry
                Ford
              </p>

              <p className="max-w-[92ch]">
                In 1982, my father, Mr. Ramprasad Agrawal, began Salasar with a
                simple conviction: the people of Mira-Bhayander deserve a
                quality life, and quality is a choice you make at every step. He
                never compromised: not on materials, not on relationships, not
                on people, not on opportunities. He believed that trust is built
                brick by brick, and he stood firmly for what we believe in even
                when it was harder, slower, or less fashionable.
              </p>

              <p className="max-w-[84ch]">
                Today, we walk in his legacy with a clear pledge: to marry
                engineering discipline with human-centered design, to keep
                timelines as a covenant, and to let reliability be our version
                of luxury. Homes must look beautiful, live beautifully, and
                arrive when promised because time is a family’s most precious
                resource.
              </p>

              <p className="max-w-[70ch]">
                As we scale beyond Mira-Bhayander across Mumbai, India, and
                eventually further, our north star remains unchanged: build with
                integrity, deliver on time, and create spaces that mature into
                pride.
              </p>

              <p className="max-w-[82ch]">
                To the next generation, Kanupriya and Dhruv: guard the
                essentials. Choose quality over shortcuts, clarity over noise,
                long-term value over short-term applause. Treat every promise
                like a contract with a family’s future. If you hold that line,
                Salasar will continue to shape not only skylines, but lives.
              </p>
            </div>

            <div>
              <h3 className="text-[18px] sm:text-[20px] font-semibold leading-[150%] text-[#054738] font-[Instrument Sans]">
                Anand Ramprasad Agrawal
              </h3>
              <p className="text-[14px] sm:text-[16px] leading-[150%] text-[#000] font-[Instrument Sans]">
                Managing Director, Salasar Group
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
