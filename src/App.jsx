import {
  Hero,
  PopularProduct,
  SuperQuality,
  Service,
  Subscribe,
  CustomerReviews,
  SpecialOffer,
  Footer,
} from "./sections";

import Nav from "./Components/Nav";

const App = () => (
  <main className="relative">
    <Nav></Nav>
    <section className="xl:padding-l wide:padding-r padding-b ">
      <Hero />
    </section>

    <section className="padding">
      <PopularProduct />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Service />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding bg-black padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;
