import Image from "next/image";

type IllustrationCardProps = {
  src: string;
  alt: string;
  className?: string;
};

export default function IllustrationCard({ src, alt, className }: IllustrationCardProps) {
  return (
    <div
      className={[
        "relative overflow-hidden rounded-[28px] border border-(--line) bg-[rgba(255,255,255,.03)] shadow-[0_24px_80px_rgba(0,0,0,.28)]",
        className ?? "",
      ].join(" ")}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_20%,rgba(184,155,94,.16),transparent_45%)]" />
      <div className="relative p-4">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={720}
          className="w-full h-auto rounded-[20px] opacity-95"
          priority={false}
        />
      </div>
    </div>
  );
}

