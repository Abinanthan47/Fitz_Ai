import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { IoFitnessOutline } from "react-icons/io5";
import { SiGooglegemini } from "react-icons/si";
import { Button } from "../components/ui/button";
import GridPattern from "../components/ui/grid-pattern";
import { cn } from "../lib/utils";
import Footer from "./components/ui/Footer";
import PricingSectionWhite from "./components/ui/PricingSectionWhite";
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto h-screen p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <IoFitnessOutline
            size={40}
            className="bg-orange-500 p-2 rounded-full text-white"
          />
          <h2 className="text-xl font-medium">Fitz Ai</h2>
        </div>
        <Button asChild>
          <Link href="/profile ">
            Generate <SiGooglegemini size={15} className="ml-2" />
          </Link>
        </Button>
      </div>
      <div className="w-full relative flex size-full items-center justify-center overflow-hidden rounded-lg bg-background p-40">
        <div className="z-10 text-center ">
          <p className="text-5xl md:text-7xl font-semibold text-black dark:text-white">
            Your Personal <br />{" "}
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text">
              Health
            </span>{" "}
            Assistant
          </p>
          <span className="block text-sm md:text-lg max-w-xl py-3 mt-2 font-light text-gray-500">
            Instantly get the Personalized Meal Plan with AI-powered
            Recommendations
          </span>

          <div className="mt-4">
            <Button asChild>
              <Link href="/profile" className="flex items-center">
                Get Started <FiArrowUpRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn("[ ]")}
        />
      </div>

      <div className="h-screen grid grid-cols-1 md:grid-cols-2 max-w-full w-full py-12  gap-8">
        <div className="flex justify-center  items-center">
          <img
            src="/mockup3.png"
            alt="mockup"
            className="h-[400px] max-w-full  rotate-6 shadow-3xl rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center md:items-start text-center md:text-start w-full max-w-xl mx-auto md:mx-0 px-4 md:px-0">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">
            Start your journey to better health
          </h2>
          <p className="text-muted-foreground w-[80%] text-lg mb-6">
            Get started with Fitz Ai today and receive personalized Meal Plan
            Recommendations tailored just for you.
          </p>
          <Button asChild className="mt-2 px-6 py-3 text-lg font-medium">
            <Link href="/dashboard" className="inline-flex items-center">
              Renew your health
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
      <div>
        <PricingSectionWhite />
        <Footer />
      </div>
    </div>
  );
}
