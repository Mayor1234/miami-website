import Banner from '../components/Banner';
import 'slick-carousel/slick/slick.css';
import BannerDrop from '../components/BannerDrop';
import Brands from '../components/Brands';
import Testimonial from '../components/Testimonial';
import Service from '../components/Service';
import About from '../components/About';

export default function Home() {
  return (
    <main className="font-bodyFont">
      <Banner />
      <div className="max-w-5xl mx-auto h-60 relative">
        <BannerDrop />
      </div>
      <div className="max-w-7xl mx-auto py-10">
        <Service />
      </div>
      <div className="max-w-7xl mx-auto py-10">
        <About />
      </div>
      <div className="mx-auto py-10">
        <Brands />
      </div>
      <Testimonial />
    </main>
  );
}
