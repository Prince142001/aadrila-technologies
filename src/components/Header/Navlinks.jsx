import React from "react";

function Navlinks() {
  const navlinks = [
    {
      url: "#",
      name: "Home",
    },
    {
      url: "#",
      name: "Industries",
    },
    {
      url: "#",
      name: "Products",
    },
    {
      url: "#",
      name: "Blog",
    },
    {
      url: "#",
      name: "Contact Us",
    },
    {
      url: "#",
      name: "About Us",
    },
  ];
  return (
    <ul className="flex items-center justify-center gap-7">
      {navlinks.map((value, index) => {
        return (
          <li key={index}>
            <a
              href={value.url}
              className="text-[#1E1C26] text-[16px] leading-4.5 font-medium"
            >
              {value.name}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default Navlinks;
