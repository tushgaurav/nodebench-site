import Image from "next/image";

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
      <div className="pt-2 pb-4">
        <hr className=" w-full bg-brand_orange-light/60 h-2" />
      </div>
      <h1 className="font-bold text-2xl track">{title}</h1>
      <div className="text-sm mt-2 flex items-baseline gap-1">
        <h5>
          <span className="font-bold">By </span>
          {author} on
        </h5>
        <h5 className="font-bold">{date}</h5>
      </div>
      <hr className="h-[1px] mt-4 bg-brand_orange-light" />

      <Image
        src={thumbnail}
        alt={title}
        width={1200}
        height={400}
        className="rounded-lg mt-4"
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
