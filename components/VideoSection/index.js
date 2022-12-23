import { PrismicRichText } from "@prismicio/react";

export const DefaultVideoSection = ({ title, slogan, description }) => (
  <section className="py-16 md:py-24">
    <div className="container">
      <div className="max-w-3xl mx-auto text-center bg-green-400">
        <div className="mb-6 text-5xl font-extrabold leading-none tracking-tight md:text-6xl">
          <PrismicRichText field={title} />
        </div>

        <div className="mb-6 text-xl text-gray-800">
          <PrismicRichText field={slogan} />
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          <div className="mb-6 text-5xl font-extrabold leading-none tracking-tight md:text-6xl">
            <PrismicRichText field={description} />
          </div>
        </div>
      </div>
    </div>
  </section>
);
