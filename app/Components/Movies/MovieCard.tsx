import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import { FC } from "react";

interface MovieCardProps {
  title: string;
  overview: string;
  movieId: number;
  watchList: boolean;
  watchListId: string;
  youtubeUrl: string;
  year: number;
  age: number;
  length: number;
}

function MovieCard({
  movieId,
  title,
  overview,
  watchList,
  watchListId,
  youtubeUrl,
  year,
  age,
  length,
}: MovieCardProps) {
  return (
    <>
      <button className="mb-3">
        <PlayCircle className="h-16 w-16" />
      </button>
      <div className="right-5 top-5 absolute z-10">
        {watchList ? (
          <form>
            {" "}
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form>
            {" "}
            <Button variant="outline" size="icon">
              <Heart className="h-4 w-4" />
            </Button>
          </form>
        )}
      </div>
      <div className="p-5 absolute bottom-0 left-0 mt-8">
        <p className="font-bold text-lg line-clamp-1">{title}</p>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{year}</p>
          <p className="font-normal text-sm border py-0.5 px-0.5 border-gray-200 rounded">
            {age}+
          </p>
          <p className="font-normal text-sm">{length}h</p>
        </div>
        <p className="line-clamp-1 text-sm text-gray-200 font-light">
          {overview}
        </p>
      </div>
    </>
  );
}

export default MovieCard;
