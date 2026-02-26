import { Hero } from "@/components/sections/Hero";
import { MentorsPreview } from "@/components/sections/MentorsPreview";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <MentorsPreview />
        <Contact />
      </main>
    </>
  );
}
