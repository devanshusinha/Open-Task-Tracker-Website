import { ImageResponse } from "next/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ffffff",
          color: "#000000",
          padding: 64,
        }}
      >
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            letterSpacing: -1,
            textAlign: "center",
            marginBottom: 16,
          }}
        >
          Open Task Tracker
        </div>
        <div
          style={{
            fontSize: 32,
            fontWeight: 500,
            opacity: 0.8,
            textAlign: "center",
          }}
        >
          A beautiful, 100% local, open-source task tracker for individuals.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
