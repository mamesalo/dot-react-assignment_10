import Star from "../assets/star.svg";
const Card = ({ title, image, overview, rating, year }) => {
  const imageSize = 500;
  const imagePath = `https://image.tmdb.org/t/p/w${imageSize}${image}`;
  return (
    <div className="rounded cursor-pointer overflow-hidden ">
      <div className="relative h-96 w-80 overflow-hidden">
        <img
          src={imagePath}
          alt=""
          className="rounded hover:scale-110 transition-all h-full  w-full object-cover"
        />
        <div className="w-full absolute bottom-0 flex items-center justify-between font-semibold p-2 ">
          <div className="text-yellow-400 flex items-center gap-3">
            <img src={Star} alt="" className="w-4" />
            <p>{rating}</p>
          </div>
          <p className="text-slate-200">{year.slice(0, 4)}</p>
        </div>
      </div>
      <p className="text-slate-200 text-lg mt-1 mb-2">{title}</p>
    </div>
  );
};

export default Card;
