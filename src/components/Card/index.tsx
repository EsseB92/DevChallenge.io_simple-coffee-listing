import Star from "/Star.svg";
import StarFill from "/Star_fill.svg";
interface CardProps {
  name: string;
  image: string;
  price: number;
  rating: number;
  votes: number;
  popular: boolean;
  available: boolean;
}

const Card = ({
  name,
  image,
  price,
  rating,
  votes,
  popular,
  available,
}: CardProps) => {
  return (
    <div className="relative flex flex-col flex-wrap gap-2">
      {popular && (
        <span className="absolute left-2 top-2 rounded-full bg-[#f6c768] px-3 py-1 text-[.625rem] font-bold leading-3 text-[#111315]">
          Popular
        </span>
      )}

      <img className="rounded-xl" src={image} alt={`Image de ${name}`} />

      <div className="flex flex-row items-center justify-between pl-1">
        <h2 className="m-0 text-base font-bold">{name}</h2>
        <span className="h-fit rounded-md bg-[#bee3cc] px-2 py-1 text-xs font-semibold dark:text-[#111315]">{`${price}`}</span>
      </div>

      <div className="rating m-0 flex flex-row items-end justify-between pl-1 text-sm">
        <div className="flex flex-row items-end gap-1">
          {votes > 0 ? (
            <img src={StarFill} alt="Image d'étoile pleine" />
          ) : (
            <img src={Star} alt="Image d'étoile vide" />
          )}
          <span>{rating}</span>
          <span className="font-semibold text-[#6f757c]">
            {rating ? ` (${votes} votes)` : "No ratings"}
          </span>
        </div>
        {!available && (
          <span className="text-sm font-bold text-[#ed735d]">Sold out</span>
        )}
      </div>
    </div>
  );
};

export default Card;
