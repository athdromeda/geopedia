import { Dispatch, SetStateAction } from "react";

const Hero = ({
  searchQuery,
  setSearchQuery,
}: {
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div className="relative items-center w-full gap-4 mb-8 h-fit max-h-80">
      <div className="min-h-60">
        <img
          src="/world.svg"
          alt=""
          className="object-contain w-full max-h-80"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-4 py-6 text-center bg-gradient-to-t from-white to-transparent">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold md:text-5xl">GeoPedia</h1>
          <h2 className="text-lg md:text-xl text-slate-600">
            Explore countries in the world
          </h2>
        </div>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="text"
          placeholder="Type the country name..."
          className="w-full px-6 py-3 border rounded-full max-w-[500px] md:w-2/3 border-slate-300"
        />
      </div>
    </div>
  );
};

export default Hero;
