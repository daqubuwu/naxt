"use client";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import styles from "./[slug].module.css";

const artworkData = {
  "The Starry Night": {
    title: "The Starry Night",
    src: "/1.png",
    description: "A depiction of a swirling night sky over a quiet town.",
    location: "Saint-Rémy-de-Provence, France",
    date: "June 1889",
    price: "Sold for $100 million in 1990",
  },
  "The Night Cafe": {
    title: "The Night Cafe",
    src: "/2.png",
    description:
      "A vibrant portrayal of a cafe in Arles, filled with color and emotion.",
    location: "Arles, France",
    date: "September 1888",
    price: "Sold for $75 million in 2017",
  },
  "The Red Vineyard": {
    title: "The Red Vineyard",
    src: "/3.png",
    description:
      "The only painting that Vincent sold during his lifetime, depicting a vineyard in autumn.",
    location: "Arles, France",
    date: "November 1888",
    price: "Sold for $50,000 in 1920",
  },
  "Ward in the Hospital in Arles": {
    title: "Ward in the Hospital in Arles",
    src: "/4.png",
    description:
      "A view of the hospital ward where Van Gogh was treated, showcasing the starkness of the environment.",
    location: "Arles, France",
    date: "January 1889",
    price: "Sold for $30 million in 1998",
  },
  "Ploughman in the Fields near Arles": {
    title: "Ploughman in the Fields near Arles",
    src: "/5.png",
    description:
      "A serene landscape painting depicting a farmer working in the fields.",
    location: "Arles, France",
    date: "April 1888",
    price: "Sold for $20 million in 2015",
  },
  "Paul Gauguin's Armchair": {
    title: "Paul Gauguin's Armchair",
    src: "/6.png",
    description:
      "A still life painting featuring Gauguin's armchair, symbolizing their friendship and artistic collaboration.",
    location: "Arles, France",
    date: "November 1888",
    price: "Sold for $10 million in 2001",
  },
  Sunflowers: {
    title: "Sunflowers",
    src: "/7.png",
    description:
      "A series of still life paintings featuring vibrant sunflowers, showcasing Van Gogh's love for color.",
    location: "Arles, France",
    date: "August 1888",
    price: "Sold for $40 million in 1987",
  },
  Irises: {
    title: "Irises",
    src: "/8.png",
    description:
      "A beautiful depiction of irises in bloom, painted during Van Gogh's stay at the asylum in Saint-Rémy.",
    location: "Saint-Rémy-de-Provence, France",
    date: "May 1889",
    price: "Sold for $53 million in 1987",
  },
  "Café Terrace at Night": {
    title: "Café Terrace at Night",
    src: "/9.png",
    description:
      "A nighttime scene of a café in Arles, illuminated by gaslight, capturing the essence of the evening.",
    location: "Arles, France",
    date: "September 1888",
    price: "Sold for $30 million in 2000",
  },
  "The Olive Trees": {
    title: "The Olive Trees",
    src: "/10.png",
    description:
      "A landscape painting featuring olive trees, showcasing Van Gogh's fascination with nature.",
    location: "Saint-Rémy-de-Provence, France",
    date: "June 1889",
    price: "Sold for $25 million in 2010",
  },
};

export async function getStaticPaths() {
  const paths = Object.keys(artworkData).map((slug) => ({
    params: { slug },
  }));

  return { paths, fallback: false }; // Set fallback to false to show 404 for non-existent slugs
}

export async function getStaticProps({ params }) {
  const artwork = artworkData[params.slug];

  if (!artwork) {
    return {
      notFound: true,
    };
  }

  return {
    props: { artwork },
  };
}

const Artwork = ({ artwork }) => {
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backButton}>
        Back to Home
      </Link>
      <div className={styles.artwork}>
        <Image src={artwork.src} alt={artwork.title} width={500} height={500} />
      </div>
      <div className={styles.info}>
        <h2>{artwork.title}</h2>
        <p>{artwork.description}</p>
        <p>
          <strong>Location:</strong> {artwork.location}
        </p>
        <p>
          <strong>Date:</strong> {artwork.date}
        </p>
        <p>
          <strong>Price:</strong> {artwork.price}
        </p>
      </div>
    </div>
  );
};

export default Artwork;
