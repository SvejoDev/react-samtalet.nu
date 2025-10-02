import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import miaImage from "@/assets/images/mia.png";
export default function Hero() {
  return (
    <section className="w-full overflow-hidden">
      <div className="bg-muted grid items-center gap-8 lg:grid-cols-2 w-full min-h-[80vh] py-16 px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col items-center p-4 sm:p-8 lg:p-16 text-center lg:items-start lg:text-left">
          <p>Mia Svensson</p>
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Välkommen till Samtalet.nu
          </h1>
          <p className="text-muted-foreground mb-8 max-w-xxl lg:text-xl">
            Söker du efter någon att samtala med om sådant som skaver inom dig,
            som är jobbigt och tungt och som behöver sättas ord på? Samtalet.nu
            erbjuder digitala individuella kurativa, reflekterande, stödjande
            samtal där även lyssnandet från mig som samtalspartner har en viktig
            funktion.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
            <Button>
              Boka ditt samtal här
              <ArrowRight className="size-4" />
            </Button>
            <Button variant="outline">Läs mer om mig</Button>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 sm:p-8 w-full">
          <div className="w-full max-w-sm sm:max-w-md lg:max-w-lg">
            <img
              src={miaImage}
              alt="Mia Svensson"
              className="w-full h-auto max-h-80 sm:max-h-80 lg:max-h-120 object-cover rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
