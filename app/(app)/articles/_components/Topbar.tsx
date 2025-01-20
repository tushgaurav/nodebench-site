import Image from "next/image";
import { format } from "date-fns";

export default function Topbar({
  thumbnail,
  thumbnailCaption,
  title,
  author,
  date,
}: {
  thumbnail: string;
  thumbnailCaption?: string;
  title: string;
  author: string;
  date: string;
}) {
  return (
    <div className="mb-4">
      <h1 className="font-bold text-2xl track">{title}</h1>
      <hr className="mt-2 w-full bg-brand_orange-light h-1" />
      <div className="text-sm mt-1 flex items-baseline gap-1">
        <h5>
          By {author} on
        </h5>
        <h5 className="mt-1">
          {format(new Date(date), "dd MMMM yyyy")}
        </h5>
      </div>

      <Image
        src={thumbnail}
        alt={title}
        width={1200}
        height={400}
        className="my-6"
      />
      {thumbnailCaption && (
        <p
          className="
                text-xs text-gray-500 mt-1
                flex items-center gap-1 
            "
        >
          {thumbnailCaption}
        </p>
      )}
    </div>
  );
}
