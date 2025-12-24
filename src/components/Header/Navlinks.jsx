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
    <ul>
      {navlinks.map((value, index) => {
        return (
          <li key={index}>
            <a href={value.url}>{value.name}</a>
          </li>
        );
      })}
    </ul>
  );
}

export default Navlinks;
