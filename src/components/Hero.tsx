import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import miaImage from "@/assets/images/mia.png";
export default function Hero() {
  return (
    <section className="w-full min-h-screen">
      <div className="bg-muted grid items-center gap-8 lg:grid-cols-2 w-full min-h-[80vh] py-16">
        <div className="flex flex-col items-center p-16 text-center lg:items-start lg:text-left">
          <p>New Release</p>
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Welcome to Our Website
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis! Porro facilis quo animi
            consequatur. Explicabo.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <Button>
              Primary
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline">Secondary</Button>
          </div>
        </div>
        <div className="flex justify-center items-center p-8">
          <img
            src={miaImage}
            alt="placeholder hero"
            className="h-60 w-48 sm:h-64 sm:w-64 lg:h-150 lg:w-120 object-cover rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
