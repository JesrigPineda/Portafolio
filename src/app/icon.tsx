import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = {
  width: 512,
  height: 512,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#f5f5f7",
          background: "#111113",
          fontSize: 132,
          fontWeight: 760,
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        JP
      </div>
    ),
    size,
  );
}
