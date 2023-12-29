import Image from "next/image";
import prisma from "../util/db";
import MovieCard from "./Movies/MovieCard";

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      title: true,
      overview: true,
      youtubeString: true,
      imageString: true,
      id: true,
      WatchLists: true,
      release: true,
      age: true,
      duration: true,
    },
    orderBy: {
      createdAt: "desc",
    },
    take: 4,
  });

  return data;
}

async function RecentlyAdded() {
  const data = await getData();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data.map((movie) => (
        <div key={movie.id} className="relative h-48">
          <Image
            src={movie.imageString}
            alt={movie.title}
            width={500}
            height={400}
            className="rounded-sm absolute w-full h-full object-cover"
            priority
          />
          <div className="h-60 relative z-10 w-full transform transition duration-500 hover:scale-125 opacity-0 hover:opacity-100">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center">
              <Image
                src={movie.imageString}
                alt={movie.title}
                width={800}
                height={800}
                className="absolute rounded-sm  w-full h-full object-cover -z-10"
                priority
              />
              <MovieCard
                title={movie.title}
                movieId={movie.id}
                overview={movie.overview}
                watchListId={movie.WatchLists[0]?.id}
                youtubeUrl={movie.youtubeString}
                watchList={movie.WatchLists.length > 0 ? true : false}
                key={movie.id}
                age={movie.age}
                year={movie.release}
                length={movie.duration}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RecentlyAdded;
