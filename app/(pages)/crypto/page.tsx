"use client";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto felx w-full flex-col space-y-6 sm:w-[350px]">
      <div className=''>
      <Link href="/stripe/error">
        <div className='pb-10' style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
          <ArrowLeft />
          <div className='pl-1'>
          <span><strong> Back</strong></span>
          </div>
        </div>
      </Link>
      </div>
        <div>
          <Link href="/crypto/eth">
            <Button className="w-full hover:scale-105 duration-200">
              Ethereum
            </Button>
          </Link>
        </div>

        <div>
          <Link href="/crypto/btc">
            <Button className="w-full hover:scale-105 duration-200">
              BitCoin
            </Button>
          </Link>
        </div>

        <div>
          <Link href="/crypto/sol">
            <Button className="w-full hover:scale-105 duration-200">
              Solana
            </Button>
          </Link>
        </div>

        <div>
          <Link href="/crypto/ethe">
            <Button className="w-full hover:scale-105 duration-200">
              Ether
            </Button>
          </Link>
        </div>

        <div>
          <Link href="/crypto/doge">
            <Button className="w-full hover:scale-105 duration-200">
              Doge
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
