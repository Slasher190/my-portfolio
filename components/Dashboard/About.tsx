import React from "react";

const About: React.FC<{ about: string }> = ({ about }) => {
  return (
    <div className="flex justify-center flex-col lg:flex-row gap-6 lg:gap-16">
      <div className="flex flex-col gap-4 flex-[1.5]">
        <p className="text-[24px] font-semibold text-gray-900 dark:text-gray-100">
          About Me
        </p>
        <p className="text-gray-500 dark:text-gray-300">{about ?? ""}</p>
        {/* <p className="text-gray-500 dark:text-gray-300">
          As a full stack developer, I specialize in creating seamless,
          end-to-end web solutions. As a full stack developer, I specialize in
          creating seamless, end-to-end web solutions.
        </p>
        <p className="text-gray-500 dark:text-gray-300">
          As a full stack developer, I specialize in creating seamless,
          end-to-end web solutions. As a full stack developer, I specialize in
          creating seamless, end-to-end web solutions.
        </p> */}
        <p className="text-[24px] font-semibold text-gray-900 dark:text-gray-100">
          Read More
        </p>
      </div>
      <div className="grid h-fit gap-6 grid-cols-2 flex-1">
        <div className="h-fit w-fit flex flex-col gap-2">
          <p className="text-gray-400 dark:text-gray-500">Location</p>
          <div className="flex gap-4 items-center">
            <img
              className="h-[40px] items-center w-[40px] rounded-[50%]"
              src="https://img.freepik.com/free-vector/flag-india_23-2147813734.jpg"
              alt="Flag of India"
            />
            <p className="text-[16px] font-semibold text-gray-900 dark:text-gray-100">
              India, Bhopal.
            </p>
          </div>
        </div>
        <div className="h-fit w-fit flex flex-col gap-2">
          <p className="text-gray-400 dark:text-gray-500">Location</p>
          <div className="flex gap-4 items-center">
            <img
              className="h-[40px] items-center w-[40px] rounded-[50%]"
              src="https://img.freepik.com/free-vector/flag-india_23-2147813734.jpg"
              alt="Flag of India"
            />
            <p className="text-[16px] font-semibold text-gray-900 dark:text-gray-100">
              India, Bhopal.
            </p>
          </div>
        </div>
        <div className="h-fit w-fit flex flex-col gap-2">
          <p className="text-gray-400 dark:text-gray-500">Location</p>
          <div className="flex gap-4 items-center">
            <img
              className="h-[40px] items-center w-[40px] rounded-[50%]"
              src="https://img.freepik.com/free-vector/flag-india_23-2147813734.jpg"
              alt="Flag of India"
            />
            <p className="text-[16px] font-semibold text-gray-900 dark:text-gray-100">
              India, Bhopal.
            </p>
          </div>
        </div>
        <div className="h-fit w-fit flex flex-col gap-2">
          <p className="text-gray-400 dark:text-gray-500">Location</p>
          <div className="flex gap-4 items-center">
            <img
              className="h-[40px] items-center w-[40px] rounded-[50%]"
              src="https://img.freepik.com/free-vector/flag-india_23-2147813734.jpg"
              alt="Flag of India"
            />
            <p className="text-[16px] font-semibold text-gray-900 dark:text-gray-100">
              India, Bhopal.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
