import Image from "next/image";
import badge from "@/public/pocketcorp-badge.png";

/** PocketCorp pocket-badge mark, as it appears in the sidebar and on the home page. */
export function LogoTile({ className = "size-8" }: { className?: string }) {
  return (
    <span
      className={`nb-border grid shrink-0 place-items-center overflow-hidden rounded-[10px] bg-white shadow-[3px_3px_0_var(--ink)] ${className}`}
    >
      <Image src={badge} alt="PocketCorp" className="size-[86%] object-contain" priority />
    </span>
  );
}
