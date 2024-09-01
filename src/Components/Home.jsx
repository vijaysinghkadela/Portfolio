import React from "react";
import mainImg from "../../public/Images/main_img.png";

const Home = () => {
  return (
    <div className=" h-screen flex items-center">
      <div className="container mx-auto px-4 lg:px-20 flex flex-col lg:flex-row items-center justify-center">
        <div className="lg:w-1/2 w-full flex justify-center lg:order-2">
          <img
            src={mainImg}
            alt="Profile"
            className="rounded-full w-48 h-48 lg:w-60 lg:h-60 object-cover"
          />
        </div>
        <div className="lg:w-1/2 w-full text-center lg:text-left lg:order-1 mt-6 lg:mt-0">
          <p className="text-gray-500 text-lg font-itim font-normal ">Hello</p>
          <h1 className="font-signature text-3xl lg:text-5xl font-bold font-caveat">
            I am Vijay Singh Kadela
          </h1>
          <p className="text-xl lg:text-2xl mt-2 font-itim">Freelance Web</p>
          <h2 className="text-3xl lg:text-4xl font-bold mt-2  font-mono">
            Full Stack Developer
          </h2>
          <div className="flex gap-3 my-2 mx-10 lg:max-w-30  xl:gap-2 sm:justify-center md:justify-center  ">
            {/* github linked */}
            <a
              href="https://github.com/vijaysinghkadela"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=62856&format=png&color=000000"
                className="h-12 dark:bg-white rounded-lg "
                alt=""
              />
            </a>
            {/* LinkedIn not link  */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=100&id=98960&format=png&color=000000"
                className="h-12 dark:bg-white rounded-lg hover:cursor-pointer"
                alt=""
              />
            </a>
            {/* whatsapp not linked */}
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000"
                className="h-12 dark:bg-white rounded-lg hover:cursor-pointer"
                alt=""
              />
            </a>
            {/* tweer linked */}
            <a
              href="https://x.com/VijaySingh_085"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=phOKFKYpe00C&format=png&color=000000"
                className="h-12 dark:bg-white rounded-lg hover:cursor-pointer"
                alt=""
              />
            </a>
            {/* Discord linked */}
            <a
              href="https://discord.com/channels/vijaysingh_5363"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://img.icons8.com/?size=100&id=SAZw8WuWnQea&format=png&color=000000"
                className="h-12 dark:bg-white rounded-lg hover:cursor-pointer"
                alt=""
              />
            </a>
          </div>

          <button className="bg-orange-400 text-white px-6 py-2 mt-4 rounded-md hover:bg-yellow-300 hover:text-black font-semibold font-mono">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
