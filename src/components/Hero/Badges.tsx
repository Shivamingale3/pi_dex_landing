import Image from "next/image";
import { site } from "@/constants";

export default function Badges() {
  return (
    <div className="mt-6 flex gap-2 justify-center flex-wrap">
      {site.badges.map((badge) => (
        <Image
          key={badge.alt}
          src={badge.src}
          alt={badge.alt}
          height={20}
          width={80}
          className="h-5 w-auto"
          unoptimized
        />
      ))}
    </div>
  );
}
