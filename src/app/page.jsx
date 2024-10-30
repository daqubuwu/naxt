import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-6xl w-full px-4">
        <h1 className="text-5xl md:text-7xl font-semibold text-left pt-16 md:pt-32 leading-tight">
          VINCENT VAN GOGH. POST-IMPRESSIONIST PAINTER AND ARTIST
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 gap-4">
          {[
            {
              src: "/1.png",
              title: "1 THE STARRY NIGHT",
              width: 672,
              height: 672,
            },
            {
              src: "/2.png",
              title: "2 THE NIGHT CAFE",
              width: 672,
              height: 510,
            },
            {
              src: "/3.png",
              title: "3 THE RED VINEYARD",
              width: 528,
              height: 528,
            },
            {
              src: "/4.png",
              title: "4 WARD IN THE HOSPITAL IN ARLES",
              width: 672,
              height: 930,
            },
            {
              src: "/5.png",
              title: "5 PLOUGHMAN IN THE FIELDS NEAR ARLES",
              width: 672,
              height: 510,
            },
            {
              src: "/6.png",
              title: "6 PAUL CAUDUIN'S ARMCHAIR",
              width: 816,
              height: 816,
            },
          ].map((item, index) => (
            <div key={index} className="bg-cover">
              <Image
                src={item.src}
                width={item.width}
                height={item.height}
                alt={`artwork ${index + 1}`}
              />
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
          <div className="bg-cover rounded-xl md:">
            <Image
              className="rounded-xl"
              src="/7.jpeg"
              width={447}
              height={631}
              alt="test"
            />
          </div>
          <div className="visits-schedule flex flex-col">
            {[
              {
                city: "Nuenen and Antwerp",
                date: "1883",
                place: "painting intern",
              },
              { city: "Paris", date: "1886", place: "Junior Painter" },
              {
                city: "Gauguin's visit",
                date: "1888",
                place: "Experimental artist",
              },
              { city: "Saint-Rémy", date: "1889", place: "Senior Painter" },
              {
                city: "Auvers-sur-Oise",
                date: "1890",
                place: "painting studio manager",
              },
            ].map((item, index) => (
              <div key={index} className="item p-4">
                <div className="item-info flex justify-between mt -6">
                  <p className="item-city text-4xl uppercase">{item.city}</p>
                  <p className="item-date text-4xl text-right">{item.date}</p>
                </div>
                <p className="item-place font-light text-xl uppercase">
                  {item.place}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
