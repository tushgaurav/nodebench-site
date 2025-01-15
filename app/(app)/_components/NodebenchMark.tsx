import { LinkButton } from "@/components/ui/button";
import Image from "next/image";

export default function NodebenchMarkAnnouncement() {
  return (
    <section className="section-container p-6 md:flex items-center justify-between">
      <div className="space-y-6 p-6 md:p-0 md:py-10">
        <div>
          <h3 className="text-sm">Introducing</h3>
          <h1 className="font-semibold text-2xl tracking-tight">
            nodebench Mark
          </h1>
        </div>

        <div className="max-w-[80ch] space-y-2">
        <p>
          CLI first tool for performance benchmarking, written from scratch in
          Rust. Written specially for SBCs and low performance hardware.
        </p>
        <p>
            We have just started building this tool and it is in early stages of development. We have not yet started coding the actual benchmarking part of the tool. We are currently working on the CLI interface and the core structure of the tool. We are also working on the documentation and the website for the tool. We are planning to release the first version of the tool in the next few months. We are also planning to release the tool as open source so that anyone can contribute to the development of the tool.
        </p>
        </div>

        <div></div>

        {/* <Link
          href="/nodebench_mark"
          className="inline-block bg-brand_orange px-4 py-2 text-white hover:text-orange-100 transition-colors duration-300"
        >
          Learn More
        </Link> */}
        <LinkButton text="Learn More" link="/nodebench_mark" />
      </div>

      <div className="py-10 hidden md:block">
        <Image
          src="/images/nodebench_mark.png"
          alt="nodebench Mark"
          width={400}
          height={400}
          className="max-w-[200px] rounded-full"
        />
      </div>
    </section>
  );
}
