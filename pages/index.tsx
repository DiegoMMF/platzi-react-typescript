import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { RandomFox } from "@/components/RandomFox";

// random number from 1 to 122
const random = () => Math.floor(Math.random() * 122) + 1;

const Home: NextPage = () => {
  const [images, setImages] = useState<Array<string>>([
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
    `https://randomfox.ca/images/${random()}.jpg`,
  ]);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {images.map((image, index) => (
          <div className="p-4" key={index}>
            <RandomFox image={image} />
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
