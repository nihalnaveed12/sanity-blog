
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import HomePost from "@/components/HomePost";
import Navbar from "@/components/Navbar";
import RecentBlog from "@/components/recent-blog";

export const revalidate = 20;

export default function Home() {
  return (
    <>
    <Navbar />
    <main>
       <Hero />
       <HomePost />
       <RecentBlog />
       <Footer />
    </main>
    </>
  );
}
