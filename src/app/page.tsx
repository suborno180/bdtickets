import HeroSection from "@/components/HeroSection";
import LocationPickerComponents from "@/components/LocationPickerComponents";
import Image from "next/image";

export default function Home() {
  const citiesData = [
    { name: "Rajshahi" },
    { name: "Dhaka" },
    { name: "Chittagong" },
    // Add more cities as needed
  ];
  return (
    <>
      <main>
        <HeroSection/>
      </main>
    </>
  );
}
