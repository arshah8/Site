import Image from "next/image"
export default function HeroSection() {
    return (
      <div className="relative w-full h-[400px]  md:h-[500px] lg:h-[600px]">
        <Image
          src="/erenjager.jpg"
          alt="ErenJager standing with two swords in his hands"
          fill
          priority
          className="object-cover object-center"
           />
      </div>
    );
  }