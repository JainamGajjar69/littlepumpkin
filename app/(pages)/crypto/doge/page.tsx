// "use client";
// import { useState, useEffect } from 'react';
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import Image from "next/image";

// function Timer() {
//   const [timeLeft, setTimeLeft] = useState(120);

//   useEffect(() => {
//     const timerId = setInterval(() => {
//       if (timeLeft > 0) {
//         setTimeLeft(timeLeft - 1);
//       }
//     }, 1000);

//     return () => clearInterval(timerId);
//   }, [timeLeft]);

//   const minutes = Math.floor(timeLeft / 60);
//   const seconds = timeLeft % 60;

//   return (
//     <div>
//       Time left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
//     </div>
//   );
// }

// const Page = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const handleSlideChange = () => {
//     setCurrentSlide((prevSlide) => prevSlide + 1); // Change this if your carousel works differently
//     setTimeLeft(120); // Reset the timer
//   };

//   return (
//     <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
//       <div className="mx-auto felx w-full flex-col justify-center space-y-6 sm:w-[350px]">
//         <Carousel onSlideChange={handleSlideChange}>
//           <CarouselContent>
//             <CarouselItem style={{ textAlign: "center" }}>
//               <Image
//                 src="/qr-code-dynamic.png"
//                 alt="Description of Image"
//                 width={500}
//                 height={500}
//               />
//               <div className="pt-10" style={{ fontSize: "2em" }}>
//                 <strong>BITCOIN</strong>
//               </div>
//               <Timer key={currentSlide} />
//             </CarouselItem>

//             <CarouselItem className="" style={{ textAlign: "center" }}>
//               <Image
//                 src="/qr-code-dynamic.png"
//                 alt="Description of Image"
//                 width={500}
//                 height={500}
//               />
//               <div className="pt-10" style={{ fontSize: "2em" }}>
//                 <strong>ETHEREUM</strong>
//               </div>
//               <Timer key={currentSlide} />
//             </CarouselItem>

//             <CarouselItem className="" style={{ textAlign: "center" }}>
//               <Image
//                 src="/qr-code-dynamic.png"
//                 alt="Description of Image"
//                 width={500}
//                 height={500}
//               />
//               <div className="pt-10" style={{ fontSize: "2em" }}>
//                 <strong>SOLANA</strong>
//               </div>
//               <Timer key={currentSlide} />
//             </CarouselItem>
//             <CarouselItem className="" style={{ textAlign: "center" }}>
//               <Image
//                 src="/qr-code-dynamic.png"
//                 alt="Description of Image"
//                 width={500}
//                 height={500}
//               />
//               <div className="pt-10" style={{ fontSize: "2em" }}>
//                 <strong>ETHER</strong>
//               </div>
//               <Timer key={currentSlide} />
//             </CarouselItem>
//           </CarouselContent>
//           <CarouselPrevious />
//           <CarouselNext />
//         </Carousel>
//       </div>
//     </div>
//   );
// };

// export default Page;


"use client";
import { useState, useEffect } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

function Timer() {
  const [timeLeft, setTimeLeft] = useState(120);
  const [isTimeUp, setIsTimeUp] = useState(false);

  useEffect(() => {
    if (timeLeft === 0) {
      setIsTimeUp(true);
    }

    const timerId = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft(timeLeft - 1);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div >
      Time left: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      {isTimeUp && (
        <div className='pt-10'>
        <Alert variant="destructive">

        <AlertTitle>Time UP</AlertTitle>
        <AlertDescription>
          Your session has expired. Please Refresh For new QR.
        </AlertDescription>
      </Alert>
      </div>
      )}
    </div>
  );
}

const Page = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className='pl-10 pr-10 pb-10 pt-10' style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 10)' }}>
      <div className=''>
      <Link href="/crypto">
        <div className='pb-10' style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <ArrowLeft />
          <div className='pl-1'>
          <span><strong> Back</strong></span>
          </div>
        </div>
      </Link>
      </div>
      <div className="mx-auto felx w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <Carousel >
          <CarouselContent>
            <CarouselItem style={{ textAlign: "center" }}>
              <Image
                src="/qr-code-dynamic.png"
                alt="Description of Image"
                width={500}
                height={500}
              />
              <div className="pt-10" style={{ fontSize: "2em" }}>
                <strong>DOGECOIN</strong>
              </div>
              <Timer key={currentSlide} />
            </CarouselItem>
          </CarouselContent>

        </Carousel>
      </div>
      </div>
    </div>
  );
};

export default Page;