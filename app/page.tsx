import { Button } from "./components/button";
import { ImageSlider } from "./components/image-slider";
import RatingAndReviews from "./components/ratings-and-reviews";

export default function Home() {
  return (
    <div className="grid">
      <main className="flex flex-col gap-1 lg:flex-row-reverse">
        <section>
          <ImageSlider />
        </section>

        <section className="lg:flex lg:flex-col lg:items-start lg:justify-center lg:pl-8">
          <header className="lg:px-5">
            <RatingAndReviews home={true}/>
            <h1 className="text-center text-4xl md:text-6xl px-6 lg:text-5xl lg:text-start lg:m-0">
              A Natural Touch to Your Memories
            </h1>
            <p className="leading-8 text-center text-lg p-6 pt-0 md:text-3xl lg:text-2xl lg:text-start lg:w-full">
              Introducing our limited edition wood frame — a perfect harmony of
              craftsmanship and technology.
            </p>
          </header>

          <div className="px-8 w-full md:w-60 m-auto lg:m-0">
            <Button text={"Buy Now"} />
          </div>
        </section>
      </main>
    </div>
  );
}
