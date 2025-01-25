// @ts-nocheck

import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

// export const runtime = 'edge';

// Image metadata
// export const alt = "nodebench Articles";
// export const size = {
//   width: 1200,
//   height: 630,
// }

// export const contentType = "image/png";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") || "nodebench Articles";

  // Font loading, process.cwd() is Next.js project directory
  const poppinsSemiBold = await readFile(
    join(process.cwd(), "assets/Poppins-SemiBold.ttf")
  );

  const backgroundImageData = await readFile(
    join(process.cwd(), "assets/og-background.png")
  );

  const backgroundImageSrc = Uint8Array.from(backgroundImageData).buffer;

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 64,
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <img
          alt="nodebench Articles"
          src={backgroundImageSrc}
          style={{
            zIndex: -1,
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            top: 0,
            left: 0,
          }}
        />

        <div
          style={{
            marginTop: "auto",
            marginBottom: "82",
            textAlign: "center",
          }}
        >
          {title}
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: "Poppins",
          data: poppinsSemiBold,
          style: "normal",
          weight: 400,
        },
      ],
    }
  );
}
