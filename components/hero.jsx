"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";



const Hero = () => {
   
    const imageRef=useRef(null);
    useEffect(() => {
       const imageElement =imageRef.current;

       const handleScroll=()=>{
        const scrollPosition=window.scrollY;
        const scrollThreshold=100;

        if(scrollPosition>scrollThreshold){
            imageElement.classList.add("scrolled")
        }else{
            imageElement.classList.remove("scrolled")
        }
       }

       window.addEventListener("scroll",handleScroll)

       return ()=>window.removeEventListener("scroll",handleScroll)
    },[])
    

  return (
    <div className="pb-20 px-4">
        <div className=" container mx-auto text-center">
            <h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 gradient-title ">
                Manage Your Finance <br></br>With Inteligence
            </h1>
            <p className="text-l text-gray-600 mb-8 max-w-xl mx-auto">
                An AI-Powered Finacial Management Plateform That Helps You To Track,
                Analyze, And Optimize Your Spending With Real Time Insight.
            </p>
            <div className="flex justify-center space-x-4">
                <Link href={"/dashboard"}/>
                <Button size="large" className="px-8 py-2">
                    Get Start
                </Button>

                <Link href={"/dashboard"}/>
                <Button size="large" variant="outline" className="px-8">
                    Watch Demo
                </Button>
             </div>
             <div className="hero-image-wrapper">
                <div ref={imageRef} className="hero-image">
                    <Image src={"/banner.jpeg"} 
                     width={1280}
                     height={720}
                     alt="Dashboard_Preview"
                     className="rounded-lg shadow-2xl border mx-auto "
                     priority
                     />
                </div>
             </div>

        </div>

    </div>
  )
}

export default Hero;