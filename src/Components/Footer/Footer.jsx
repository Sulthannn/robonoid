import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const FooterLinks = [
  { id: 1, title: "Home", link: "/#" },
  {
    id: 2,
    title: "Features",
    link: "/#features",
  },
  {
    id: 3,
    title: "Profile",
    link: "/#profile",
  },
  {
    id: 4,
    title: "Download",
    link: "/#download",
  },
];
const Footer = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-dark mt-10 rounded-t-3xl">
        <div data-aos="fade" className="container">
          <div className="grid md:grid-cols-3 py-4">
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3">
                RoboNoid
              </h1>
              <p className="text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat
                dolor illum a aut iste expedita.
              </p>
              <br />

              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl hover:text-primary duration-300" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl hover:text-primary duration-300" />
                </a>
              </div>
            </div>

            <div className="md:col-start-3 md:col-span-1 justify-self-end mr-24">
              <div className="py-8 px-4">
                <h1 className="text-xl font-bold mb-3">Quick Links</h1>
                <ul className="space-y-3">
                  {FooterLinks.map((link) => (
                    <li
                      key={link.id}
                      className="hover:translate-x-1 duration-300"
                    >
                      <a
                        href={link.link}
                        className="cursor-pointer hover:text-primary"
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;