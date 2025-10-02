import { Clock, CreditCard, Monitor, Mail } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function ImportantToKnow() {
  return (
    <section className="w-full  px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          VIKTIGT ATT VETA OM SAMTALET.NU
        </h2>

        <div className="space-y-6">
          {/* Payment information */}
          <Alert className="border-amber-200 bg-amber-50">
            <CreditCard className="h-4 w-4 text-amber-600" />
            <AlertTitle className="text-amber-800">
              Kostnad för samtal
            </AlertTitle>
            <AlertDescription className="text-amber-700">
              Vi är inte ansluten till Region Skånes vårdval vilket innebär att
              samtalet bekostas av dig själv.
            </AlertDescription>
          </Alert>

          {/* Session duration and frequency */}
          <Alert className="border-blue-200 bg-blue-50">
            <Clock className="h-4 w-4 text-blue-600" />
            <AlertTitle className="text-blue-800">
              Samtalets längd och upplägg
            </AlertTitle>
            <AlertDescription className="text-blue-700">
              Varje samtal pågår i 45 minuter. Vanligtvis börjar vi med 1
              samtal/vecka, men upplägget kan utformas efter dina önskemål.
            </AlertDescription>
          </Alert>

          {/* Digital sessions only */}
          <Alert className="border-green-200 bg-green-50">
            <Monitor className="h-4 w-4 text-green-600" />
            <AlertTitle className="text-green-800">
              Digitala samtal endast
            </AlertTitle>
            <AlertDescription className="text-green-700">
              Jag erbjuder i dagsläget endast samtal digitalt.
            </AlertDescription>
          </Alert>

          {/* Booking information */}
          <Alert className="border-purple-200 bg-purple-50">
            <Mail className="h-4 w-4 text-purple-600" />
            <AlertTitle className="text-purple-800">
              Bokning av tider
            </AlertTitle>
            <AlertDescription className="text-purple-700">
              Tidsbokning sker endast via nedanstående kontaktformulär.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </section>
  );
}
