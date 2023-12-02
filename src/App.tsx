import { useEffect, useState } from "react";
import Card from "./components/Card";
import { getData } from "./services/data";
import BgCafe from "/bg-cafe.jpg";
import Vector from "/vector.svg";

interface CoffeeItem {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
}

function App() {
  const [tri, setTri] = useState("all");
  const [data, setData] = useState<CoffeeItem[]>([]);

  const filtrerData = () => {
    if (tri === "all") {
      return data;
    } else if (tri === "available") {
      return data.filter((item) => item.available === true);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData(
          "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json",
        );
        setData(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <img
        className="fixed left-0 top-0 w-full"
        src={BgCafe}
        alt="Cafe background"
        loading="lazy"
      />
      {/* bg-[#fef7ee] dark:bg-[#1b1d1f]*/}
      <div className="relative z-10 mx-auto my-0 w-max min-w-min max-w-[70vw] overflow-hidden rounded-2xl bg-[#1b1d1f] px-10 py-20 text-center xl:max-w-5xl">
        <img
          className="absolute left-1/2 top-5 -z-10 w-64"
          src={Vector}
          alt="vector Image"
          loading="lazy"
        />
        <section className="hero">
          {/* text-[#111315] dark:text-[#fef7ee] */}
          <h1 className="text-[#fef7ee]">Our Collection</h1>
          {/* text-[#1B1D1F] dark:text-[#6f757c] */}
          <p className="mx-auto mb-4 mt-0 min-w-min max-w-lg text-base font-semibold text-[#6f757c]">
            Introducing our Coffee Collection, a selection of unique coffees
            from different roast types and origins, expertly roasted in small
            batches and shipped fresh weekly.
          </p>
          <div className="mb-10 flex flex-row items-center justify-center gap-4">
            <button
              onClick={() => setTri("all")}
              className={tri === "all" ? "btn active" : "btn"}
            >
              All products
            </button>
            <button
              onClick={() => setTri("available")}
              className={tri === "available" ? "btn active" : "btn"}
            >
              Available Now
            </button>
          </div>
        </section>
        <section className="cards flex flex-wrap justify-center gap-x-8 gap-y-16">
          {filtrerData()?.map((item) => (
            <Card
              key={item.id}
              name={item.name}
              image={item.image}
              price={item.price}
              rating={item.rating}
              votes={item.votes}
              popular={item.popular}
              available={item.available}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;
