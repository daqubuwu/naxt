import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="max-w-6xl w-full px-4">
        <h1 className="text-5xl md:text-7xl font-semibold text-left pt-16 md:pt-32 leading-tight">
          VINCENT VAN GOGH. POST-IMPRESSIONIST PAINTER AND ARTIST
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 gap-4">
          {[
            {
              src: "/1.png",
              title: "The Starry Night",
              width: 672,
              height: 672,
            },
            {
              src: "/2.png",
              title: "The Night Cafe",
              width: 672,
              height: 510,
            },
            {
              src: "/3.png",
              title: "The Red Vineyard",
              width: 528,
              height: 528,
            },
            {
              src: "/4.png",
              title: "Ward in the Hospital in Arles",
              width: 672,
              height: 930,
            },
            {
              src: "/5.png",
              title: "Ploughman in the Fields near Arles",
              width: 672,
              height: 510,
            },
            {
              src: "/6.png",
              title: "Paul Gauguin's Armchair",
              width: 816,
              height: 816,
            },
          ].map((item, index) => (
            <div key={index} className="bg-cover">
              <Link
                href={`/artwork/${encodeURIComponent(item.title)}`}
                className="bg-cover"
              >
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.height}
                  alt={`Artwork titled ${item.title}`}
                />
              </Link>
              <div className="p-4 text-left">
                <p className="cover-text text-sm">{item.title} →</p>
              </div>
            </div>
          ))}
        </div>

        <p className="heading text-5xl md:text-7xl font-semibold text-left pt-16 md:pt-32 uppercase leading-tight">
          Van Gogh painted several landscapes with flowers, roses, lilacs, and
          sunflowers.
        </p>
        <p className="heading-description text-xl md:text-3xl font-medium text-left mt-4 md:mt-12 uppercase leading-normal">
          Some reflect his interests in the language of colour, and also in
          Japanese ukiyo-e. There are two series of dying sunflowers. The first
          was painted in Paris in 1887 and shows flowers lying on the ground.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-8 pt-16 mb-32 md:pt-32">
          <div className="bg-cover rounded-xl">
            <Image
              className="rounded-xl"
              src="/7.jpeg"
              width={447}
              height={631}
              alt="A beautiful landscape painting by Van Gogh"
            />
          </div>
          <div className="visits-schedule flex flex-col">
            {[
              {
                city: "Nuenen and Antwerp",
                date: "1883",
                place: "Painting intern",
              },
              { city: "Paris", date: "1886", place: "Junior Painter" },
              {
                city: "Gauguin's visit",
                date: "1888",
                place: "Experimental artist",
              },
              { city: "Saint-Rémy", date: "1889", place: "Senior Painter" },
              {
                city: "Auvers-sur-Oise ",
                date: "1890",
                place: "Painting studio manager",
              },
            ].map((item, index) => (
              <div key={index} className="item p-4">
                <div className="item-info flex justify-between mt-6">
                  <p className="item-city text-4xl uppercase">{item.city}</p>
                  <p className="item-date text-4xl text-right">{item.date}</p>
                </div>
                <p className="item-place text-lg">{item.place}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
