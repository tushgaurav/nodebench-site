import type { Metadata } from "next";
import { Main, Paragraph, Title } from "@/components/ui/static-pages";

export const metadata: Metadata = {
  title: "nodebench Mark",
  description:
    "CLI first tool for performance benchmarking, written from scratch in Rust. Written specially for SBCs and low performance hardware.",
};

export default function NodebenchMarkPage() {
  return (
    <Main>
      <Title title="nodebench Mark" />

      <Paragraph>
        CLI first tool for performance benchmarking, written from scratch in
        Rust. Written specially for SBCs and low performance hardware.
      </Paragraph>

      <Paragraph>
        We have just started building this tool and it is in early stages of
        development. We have not yet started coding the actual benchmarking part
        of the tool. We are currently working on the CLI interface and the core
        structure of the tool. We are planning to release the first version of
        the tool in the next few months.
      </Paragraph>

      <Paragraph className="mb-2">
        The primary purpose of this tool is to benchmark hardware performance.
        This tool going to be completely written from scratch in Rust. Here are
        the features that we want to ship -
      </Paragraph>

      <ul className="list-disc list-inside space-y-2 ml-2 mb-4 max-w-[60ch]">
        <li>Platform independent.</li>
        <li>Reliable numbers and easy comparison.</li>
        <li>Open Source</li>
        <li>
          Easy to add and test platform specific hardware like GPIO pins
          performance or GPS module performance.
        </li>
      </ul>

      <Paragraph className="mt-6">
        Currently, there is one person working on this project so the
        development is very slow, we are always looking for people to contribute
        to this project. If you want to help us build this, please reach out to
        us through our contact Page.
      </Paragraph>
    </Main>
  );
}
