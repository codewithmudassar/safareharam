import { EditorialPage } from "@/components/content";
import { images } from "@/components/site";
export default function About() {
  return (
    <EditorialPage
      eyebrow="About Safar e Harmain"
      title="A calmer way to plan a sacred journey."
      copy="We bring thoughtful coordination, clear communication, and human support to every stage of your Umrah planning."
    >
      <img src={"/images/madinah.jpg"} alt="Madinah" className="mb-12 aspect-[16/8] w-full object-cover" />
      <h2 className="font-display text-4xl text-primary">Purpose before process</h2>
      <p className="mt-5 leading-8 text-muted">
        Safar e Harmain is a configurable travel experience for pilgrims from Pakistan. Our sample
        packages are designed to make choices easier: selected stays, transparent inclusions, and a
        clear route from conversation to departure.
      </p>
    </EditorialPage>
  );
}
