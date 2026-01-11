import { Link } from "react-router-dom";
import { GrMapLocation } from "react-icons/gr";
import { SlEarphonesAlt } from "react-icons/sl";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { FaCcPaypal } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#111] text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand / Info */}
        <div className="lg:col-span-2 space-y-4">
          <h3 className="text-xl font-semibold text-white">Our Information</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Discover handcrafted art & craft items made with passion and
            creativity. Bringing timeless designs to modern living.
          </p>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <GrMapLocation className="text-xl text-[#AE9467] mt-1" />
              <span>33 New Montgomery St. Ste 750 San Francisco, CA 94105</span>
            </li>
            <li className="flex items-center gap-3">
              <SlEarphonesAlt className="text-xl text-[#AE9467]" />
              <span>(+91) 012-345-6789</span>
            </li>
            <li className="flex items-center gap-3">
              <MdOutlineMarkEmailRead className="text-xl text-[#AE9467]" />
              <span>artistic@exampledemo.com</span>
            </li>
          </ul>
        </div>

        {/* Links */}
        {[
          { title: "Quick Links", items: ["Contact Us", "Shipping", "Sitemap", "FAQs", "Stores"] },
          { title: "Services", items: ["Custom Orders", "Worldwide Shipping", "Support", "Gift Cards", "Returns"] },
          { title: "Information", items: ["About Us", "Privacy Policy", "Terms & Conditions", "Blog", "Careers"] },
        ].map((section) => (
          <div key={section.title}>
            <h4 className="text-lg font-semibold text-white mb-4">
              {section.title}
            </h4>
            <ul className="space-y-3 text-sm">
              {section.items.map((item) => (
                <li key={item}>
                  <Link className="hover:text-[#AE9467] transition">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 text-center md:text-left">
          © 2024 Artistic – Art & Craft Store. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          {[1, 2, 3, 4].map((i) => (
            <FaCcPaypal
              key={i}
              className="text-4xl text-[#AE9467] hover:scale-105 transition"
            />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

