import React from "react";
import { usePathname } from "next/navigation";

const getPageTitle = (pathname: string) => {
  const pathMap: { [key: string]: string } = {
    "/": "Home",
    "/events": "Services",
    "/about": "About Us",
    "/contact": "Contact Us",
    "/services": "Services"
  };

  console.log( pathMap[pathname] || pathname.slice(1).replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()));
  return pathMap[pathname] || pathname.slice(1).replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase());
};

const Preview: React.FC = () => {
  const pathname = usePathname();
  const pageTitle = getPageTitle(pathname);
  const images: { [key : string] : string } = {
    "About Us" : "/topBanner/aboutUs.jpg",
    "Contact Us" : "/topBanner/contactUs.webp",
    "Services" : "/topBanner/services.jpg"
  }

  if (pageTitle === "Home") return null;

  return (
    <div 
      className="preview" 
      style={{
        backgroundImage: `url(/${pageTitle.replace(/\s+/g, '').toLowerCase()}.png)`
      }}
      // style={{ 
      //   backgroundImage: `url(${images[pageTitle]})`,
      //   backgroundSize: 'contain',
      //   backgroundRepeat: 'no-repeat',
      //   backgroundPosition: 'center',
      // }}
    >
      {/* <p>
        Home 
        {pageTitle !== "Contact" && pageTitle !== "About" ? "/ Services" : null}
        {pageTitle !== "Services" ? `/ ${pageTitle}` : null}
      </p> */}
      <p className="text-4xl">____{pageTitle}__</p>
    </div>
  );
};

export default Preview;