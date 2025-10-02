import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

export default function AboutConversations() {
  return (
    <section
      id="about-conversations"
      className="w-full bg-gradient-to-b from-background to-muted/20 py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Samtalet och Lyssnandet
          </h2>
          <Separator className="mx-auto w-24 h-1 bg-primary" />
        </div>

        {/* Accordion Content */}
        <div className="max-w-4xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full [&>*:last-child]:border-b"
          >
            <AccordionItem
              value="item-1"
              className="border border-border rounded-lg mb-4"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-xl font-semibold text-primary hover:no-underline">
                Varför ska man samtala med någon?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-lg leading-relaxed">
                  Jag tror att samtal under trygga former med givna ramar är en
                  väg framåt och vidare. Mot insikt, förståelse, reflektion men
                  också för att se samband och kunna komma vidare. Men samtal är
                  också ett sätt att sortera i tankar och känslor men också för
                  att på sikt skapa förståelse för hur saker och ting blev som
                  det blev, och detta kan förändra måendet i en positiv
                  riktning.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-2"
              className="border border-border rounded-lg mb-4"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-xl font-semibold text-primary hover:no-underline">
                Vad kan jag som samtalspartner erbjuda dig?
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-lg leading-relaxed">
                  I de samtal som jag erbjuder är min roll att reflektera och
                  utmana dig kring det som vi samtalar om i syfte att belysa,
                  fördjupa och kanske se mönster och hitta andra vägar.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="item-3"
              className="border border-border rounded-lg mb-4"
            >
              <AccordionTrigger className="px-6 py-4 text-left text-xl font-semibold text-primary hover:no-underline">
                Lyssnandets roll
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                <p className="text-lg leading-relaxed">
                  Alla samtal är viktiga, men även lyssnandet behöver få sin
                  plats. Att bli lyssnad på helt och fullt är det kanske inte så
                  ofta man blir. När man blir lyssnad på öppnas möjligheter till
                  bland annat reflektion, förändring, läkning och klarhet.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Bottom Spacer */}
        <div className="mt-16">
          <Separator className="w-full" />
        </div>
      </div>
    </section>
  );
}
