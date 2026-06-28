import Image from "next/image";
import { IoPlay } from "react-icons/io5";
import SectionHeading from "./SectionHeading";
import { appDemoScreens } from "@/lib/landing-content";

export default function AppDemoSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          label="Our App"
          title="View Our App Demo"
          highlight="App Demo"
        />

        <div className="relative mt-14">
          <div className="overflow-x-auto pb-4">
            <div className="flex items-center justify-center gap-4 min-w-max px-4 lg:gap-5">
              {appDemoScreens.map((screen, i) => (
                <div
                  key={screen.src}
                  className="shrink-0 transition-transform"
                  style={{
                    transform: `translateY(${i % 2 === 0 ? "12px" : "-8px"}) rotate(${i % 2 === 0 ? "-2deg" : "2deg"})`,
                  }}
                >
                  <div className="w-[140px] rounded-[1.5rem] border-[5px] border-black bg-black p-1 shadow-[0_16px_40px_rgba(0,0,0,0.2)] sm:w-[160px] lg:w-[180px]">
                    <div className="overflow-hidden rounded-[1.2rem]">
                      <Image
                        src={screen.src}
                        alt={screen.alt}
                        width={180}
                        height={380}
                        className="h-auto w-full object-cover object-top"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-[0_8px_30px_rgba(255,122,69,0.5)] sm:h-20 sm:w-20">
              <IoPlay size={32} className="ml-1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
