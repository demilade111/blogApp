import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StaticImageData } from "next/image";
import ai1 from "@/public/assets/ai-1.jpg";
import ai2 from "@/public/assets/ai-2.jpg";
import ai3 from "@/public/assets/ai-3.jpg";
import ai4 from "@/public/assets/ai-4.jpg";

type TrendingCardProps = {
  className?: string;
  img: StaticImageData;
  // post: Post;
};

const TrendingCard = ({ className, img }: TrendingCardProps) => {
  return (
    <Link
      className={`${className} sm:mt-0 sm:h-auto relative mt-7 block w-full h-96 hover:opacity-80`}
      // href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}
      href=""
    >
      <div className="z-0 relative w-full h-full">
        <Image
          fill
          alt="tech"
          placeholder="blur"
          src={img}
          blurDataURL="/path-to-your-blurred-image.jpg" // Replace with the path to your blurred image
          sizes="(max-width: 480px) 100vw,
          (max-width: 768px) 75vw,
          (max-width: 1060px) 50vw,
          33vw"
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className="absolute  z-1 top-0 left-0 w-full h-full bg-gradient-gradual" />
      <div className="absolute z-2 bottom-0 left-0 p-3">
        <h4 className="inline-block px-5 py-1 font-semibold bg-accent-orange text-wh-900">
          {/* {post?.category} */}
          animal
        </h4>
        <div className="text-wh-100 mt-2"> cat{/* {post?.title} */}</div>
      </div>
    </Link>
  );
};

// type Props = {
//   trendingPosts: Array<Post>;
// };

const Trending = () => {
  return (
    <section className="pt-3 pb-10">
      <div className="flex items-center gap-3">
        <div className="bg-wh-900 py-2 px-8 text-wh-10 text-sm font-bold">
          TRENDING
        </div>
        <p className="text-sm">
          Nunc enim lobortis quam risus et feugiat nibh eu ornare. Molestie sit
          nulla dolor diam turpis.
        </p>
      </div>

      {/* grid option */}
      <div className="sm:grid gap-5 grid-cols-4 grid-rows-2 sm:h-[600px] my-3">
        <TrendingCard className="col-span-2 row-span-2 bg-wh-500" img={ai1} />
        <TrendingCard className="col-span-2 row-span-1 bg-wh-500" img={ai2} />
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500" img={ai3} />
        <TrendingCard className="col-span-1 row-span-1 bg-wh-500" img={ai4} />
      </div>

      <p className="text-sm">
        Id cursus purus adipiscing ipsum pretium. Scelerisque suspendisse
        pharetra ultrices mauris ut lacus sagittis pharetra dictum. Congue
        viverra in aliquam feugiat pellentesque.
      </p>
    </section>
  );
};

export default Trending;
