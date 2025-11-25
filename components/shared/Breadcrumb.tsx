"use client";
import Link from "next/link";

interface BreadcrumbProps {
title: string;
links: { name: string; href?: string }[];
bgImage?: string;
}

export default function Breadcrumb({ title, links, bgImage }: BreadcrumbProps) {
return ( <div className="relative w-full h-64 md:h-96 lg:h-[750px]">
{/* Background Image */}
<div
className="absolute inset-0 bg-cover bg-center"
style={{ backgroundImage: `url('${bgImage}')` }}
></div>

  {/* Gradient Overlay */}  
  {/* <div className="absolute inset-0 bg-black bg-opacity-40"></div>   */}

  {/* Content */}  
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-white px-4 text-center">  
    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold drop-shadow-lg">{title}</h1>  

    <div className="text-sm md:text-base flex flex-wrap justify-center gap-2 mt-2">  
      {links.map((link, index) => (  
        <span key={index} className="flex items-center gap-2">  
          {link.href ? (  
            <Link href={link.href} className="hover:underline ">{link.name}</Link>  
          ) : (  
            <span className="font-bold">{link.name}</span>  
          )}  
          {index < links.length - 1 && <span>/</span>}  
        </span>  
      ))}  
    </div>  
  </div>  
</div>  

);
}
