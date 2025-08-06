
import AboutSection from "@/components/sections/AboutSection";
import BlogPreviewHome from "@/components/sections/BlogPreviewHome";
import ContactSectionHome from "@/components/sections/ContactPreview";
import Hero from "@/components/sections/Hero";
import MenuPreviewHome from "@/components/sections/MenuPreviewHome";
import MenusPreviewSection from "@/components/sections/MenusPreviewSection";


export default function Home() {
  return (
    <>
      <Hero />
      <MenusPreviewSection/>
      <AboutSection/>
      <MenuPreviewHome/>
       <BlogPreviewHome />
       <ContactSectionHome/>
    </>
  );
}
