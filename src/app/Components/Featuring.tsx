import Image from "next/image"
export default function Featuring(){
    return(
        <div>
            <div className="flex flex-col py-5 px-5 justify-center h-full w-full lg:flex-row gap-4">

<div className="flex  justify-center items-center w-12/12   lg:w-4/12">
  <Image 
    src="/attacktitan.jpg" 
    alt="Attack Titan (Eren) Fighting" 
    width={1920} 
    height={1164} 
   className="rounded-xl" 
  />
</div>

<div className="flex  justify-center items-center w-12/12   lg:w-4/12">
  <Image 
    src="/eren+mikasa.jpg" 
    alt="Eren and Miaksa's Potrait" 
    width={1920} 
    height={1164} 
   className="rounded-xl" 
  />
</div>

<div className="flex  justify-center items-center w-12/12   lg:w-4/12">
  <Image 
    src="/walltitan.jpg" 
    alt="Mikasa attacking wall titan" 
    width={1920} 
    height={1164} 
   className="rounded-xl" 
  />
</div>

</div>   
<div className="flex flex-col md:flex-row justify gap-4 px-5 py-5 w-full">

<div className="flex  justify-center items-center w-12/12   lg:w-6/12">
  <Image 
    src="/erenred.jpg" 
    alt="EREN" 
    width={1980} 
    height={1200} 
   className="rounded-xl" 
  />
</div>

<div className="flex lg:flex-row justify-center items-center w-12/12   lg:w-6/12">
  <Image 
    src="/allthree.jpg" 
    alt="EREN" 
    width={1920} 
    height={1200} 
   className="rounded-xl" 
  />
</div>   
</div> </div>  )
}