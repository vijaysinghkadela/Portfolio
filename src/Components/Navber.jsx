import React, { useState } from "react";
import logo from "../../public/Images/V-logo.png";
import ThemeToggle from "./ThemeToggle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { NavigationMenu } from "./Components/ui/navigation-menu";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"
import Home from "./Home";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "../Components/ui/menubar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    {
      id: 1,
      name: "Home",
      Link: "/",
      component: <Home />,
    },
    {
      id: 2,
      name: "About Me",
      Link: "/about",
      component: <AboutMe />,
    },
    {
      id: 3,
      name: "Services",
      Link: "/services",
      component: <ServiceWorker />,
    },
    {
      id: 4,
      name: "Projects",
      Link: "/project",
      component: <Projects />,
    },
    {
      id: 5,
      name: "Contact",
      Link: "/contact",
      component: <Contact />,
    },
  ];

  return (
    <>
      <BrowserRouter>
        <nav className="bg-white-800 p-4">
          <div className="container mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 w-8 mr-2" />
            </div>

            {/* Hamburger Menu for Mobile */}
            {/* <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d={
                      isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                    }
                  ></path>
                </svg>
              </button>
            </div> */}

            {/* MenuBar */}
            <Menubar className="lg:hidden ">
              <MenubarMenu>
                <MenubarTrigger>
                  <img
                    width="25"
                    height="25"
                    src="https://img.icons8.com/ios-filled/50/menu--v6.png"
                    alt="menu--v6"
                  />
                </MenubarTrigger>
                <MenubarContent>
                  <MenubarItem>Home</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>About Me</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Services</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Projects</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Work Experiences</MenubarItem>
                  <MenubarSeparator />
                  <MenubarItem>Contact Us</MenubarItem>
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
            <div
              className={`${
                isOpen ? "block" : "hidden"
              } lg:flex lg:items-center lg:space-x-4 `}
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  to={item.Link}
                  className="block font-itim mt-4 lg:mt-0 text-black dark:text-white hover:text-orange-400 font-semibold hover:cursor-pointer"
                >
                  {item.name}
                </a>
              ))}{" "}
              <div className="">
                <ThemeToggle />
              </div>
            </div>
          </div>
        </nav>
        {/* Define Routes here */}
        <Routes>
          {navItems.map((item) => (
            <Route
              key={item.id}
              path={item.Link}
              // element={item.component}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Navbar;
