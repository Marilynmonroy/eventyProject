import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:tect-6xl">
          Redefiniendo la gestión de eventos con una{" "}
          <span className="text-rose-500">plataforma intuitiva.</span>
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">
          Simplifica desde las inscripciones hasta el check-in. Organizadores
          eficientes, participantes felices, ¡eventos inolvidables!
        </p>
      </div>
    </MaxWidthWrapper>
  );
}
