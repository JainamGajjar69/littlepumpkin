import { Button } from "@/components/ui/button";
import Link from "next/link";


export default function ErrorStripe() {
  return (
    <div className="h-screen">
<div className="mt-32 md:max-w-[50vw] mx-auto">
  <div className="text-center">
    <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
      Something went wrong....
    </h3>
    <Button asChild className="mt-5">
      <Link href="http://localhost:3000/">GO back</Link>
    </Button>
  </div>
</div>
</div>
  );
}



