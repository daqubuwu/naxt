import Image from "next/image";

export default function Home() {
  return (
    <><h1 className="text-7xl font-semibold text-left pl-32 pt-32 max-w-6xl leading-tight">VINCENT VAN GOGH.POST-IMPRESSIONIST PAINTER AND ARTIST</h1>
    <div className="grid grid-cols-2 mt-20">
      <div className="bg-cover ml-20">
      <Image src="/1.png" width={672} height={672} alt="test" />
        <div className="p-4 text-left">
          <p className="cover-text text-sm">1 THE STARRY NIGHT →</p>
        </div>
      </div>
      <div className="bg-cover mt-16">
      <Image src="/2.png" width={672} height={510} alt="test" />
        <div className="p-4 text-left">
          <p className="cover-text text-sm">2 THE NIGHT CAFE →</p>
        </div>
      </div>
      <div className="bg-cover pt-20 ml-72">
      <Image src="/3.png" width={528} height={528} alt="test" />
        <div className="p-4 text-left">
          <p className="cover-text text-sm">3 THE RED VINEYARD →</p>
        </div>
      </div>
      <div className="bg-cover mt-20 pl-20">
      <Image src="/4.png" width={672} height={930} alt="test" />
        <div className="p-4 text-left">
          <p className="cover-text text-sm">4 WARD IN THE HOSPITAL IN ARLES →</p>
        </div>
      </div>
      <div className="bg-cover ml-20">
      <Image src="/5.png" width={672} height={510} alt="test" />
        <div className="p-4 text-left">
          <p className="cover-text text-sm">5 PLOUGHMAN IN THE FIELDS NEAR ARLES →</p>
        </div>
      </div>
      <div className="bg-cover pt-20 mt-7 mr-32">
      <Image src="/6.png" width={816} height={816} alt="test" />
        <div className="p-4 text-left">
          <p className="cover-text text-sm">6 PAUL CAUDUIN'S ARMCHAIR →</p>
        </div>
      </div>
    </div>

    <p className="heading text-7xl font-semibold text-left pl-32 pt-32 uppercase max-w-7xl leading-tight">Van Gogh painted several landscapes with flowers, roses, lilacs, and sunflowers.</p>
    <p className="heading-description text-3xl font-medium text-left pl-32 mt-12 uppercase max-w-7xl leading-normal">Some reflect his interests in the language of colour, and also in Japanese ukiyo-e. There are two series of dying sunflowers. The first was painted in Paris in 1887 and shows flowers lying on the ground.</p>
    
    <div className="flex justify-center gap-x-24 pt-32">
      <div className="bg-cover rounded-xl">
      <Image className="rounded-xl" src="/7.jpeg" width={447} height={631} alt="test" />
      </div>
      <div className="visits-schedule flex">
        <div className="item p-4">

          <div className="item-info flex gap-14 mt-6">
            <p className="item-city text-4xl uppercase">Nuenen and Antwerp</p>
            <p className="item-date text-4xl text-right">1883</p>
          </div>
          <p className="item-place font-light text-xl uppercase">painting intern</p>

          <div className="item-info flex justify-between gap-14 mt-6">
            <p className="item-city text-4xl uppercase">Paris</p>
            <p className="item-date text-4xl text-right">1886</p>
          </div>
          <p className="item-place font-light text-xl  uppercase">Junior Painter</p>

          <div className="item-info flex justify-between gap-14 mt-6">
            <p className="item-city text-4xl uppercase">Gauguin's visit</p>
            <p className="item-date text-4xl text-right">1888</p>
          </div>
          <p className="item-place font-light text-xl  uppercase">Experimental artist</p>

          <div className="item-info flex justify-between gap-14 mt-6">
            <p className="item-city text-4xl uppercase">Saint-Rémy</p>
            <p className="item-date text-4xl text-right">1889</p>
          </div>
          <p className="item-place font-light text-xl  uppercase">Senior Painter</p>

          <div className="item-info flex justify-between gap-14 mt-6">
            <p className="item-city text-4xl uppercase">Auvers-sur-Oise</p>
            <p className="item-date text-4xl text-right">1890</p>
          </div>
          <p className="item-place font-light text-xl uppercase">painting studio manager</p>

          

          

        </div>

      </div>
    </div>
    </>
  )

}

