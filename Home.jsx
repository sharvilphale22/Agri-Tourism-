import Hero from '../components/Hero';
import FeaturedStays from '../components/FeaturedStays';
import PopularDestinations from '../components/PopularDestinations';

export default function Home() {
  return (
    <main className="page page--home">
      <Hero />
      <FeaturedStays />
      <PopularDestinations />
    </main>
  );
}
