import Image from "next/image";
import { IoLogoApple } from "react-icons/io5";
import SectionHeading from "./SectionHeading";
import { downloadStats } from "@/lib/landing-content";
import { APP_STORE_URL } from "@/lib/constants";

const QR_API_SIZE = 512;

export default function DownloadSection() {
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${QR_API_SIZE}x${QR_API_SIZE}&data=${encodeURIComponent(APP_STORE_URL)}`;

  return (
    <section id="download" className="bg-charcoal py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col">
            <SectionHeading
              label="Download"
              title="Download Our Food Recipe Mobile App"
              highlight="Our Food Recipe"
              subtitle="Get SaveToCook on your iPhone and start saving recipes, planning meals, and building grocery lists today."
              align="left"
              dark
            />
            <div className="mt-10 grid grid-cols-3 gap-6">
              {downloadStats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-bold text-white sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/60 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex min-h-[420px] flex-col lg:min-h-0">
            <div className="flex h-full min-h-[420px] flex-col rounded-2xl bg-white/5 p-4 sm:p-5">
              <div className="flex shrink-0 items-center justify-center gap-2 py-2 text-white">
                <IoLogoApple size={22} />
                <span className="text-sm font-semibold sm:text-base">For iOS</span>
              </div>

              <div className="relative min-h-0 flex-1 w-full">
                <Image
                  src={qrUrl}
                  alt="QR code for App Store"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="rounded-2xl bg-white object-contain p-3 sm:p-4"
                  unoptimized
                />
              </div>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-5 text-base font-semibold text-white transition-colors hover:bg-primary-dark sm:py-6 sm:text-lg lg:py-7 lg:text-xl"
              >
                <IoLogoApple size={24} />
                Download from App Store
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
