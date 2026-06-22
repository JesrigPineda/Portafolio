import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Jesrig Pineda - Integration Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f4f2",
          color: "#111111",
          padding: "72px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 28,
            fontWeight: 700,
          }}
        >
          <span>Jesrig Pineda</span>
          <span style={{ color: "#707070" }}>Integration Engineer</span>
        </div>

        <div>
          <div
            style={{
              fontSize: 82,
              lineHeight: 0.98,
              letterSpacing: "-2px",
              fontWeight: 750,
              maxWidth: 940,
            }}
          >
            Integrations and automation for smoother operations.
          </div>
          <div
            style={{
              marginTop: 32,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#666666",
              maxWidth: 820,
            }}
          >
            APIs, webhooks, cloud workflows and internal tools.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            fontSize: 24,
            color: "#555555",
          }}
        >
          <span>Node.js</span>
          <span>/</span>
          <span>TypeScript</span>
          <span>/</span>
          <span>Firebase</span>
          <span>/</span>
          <span>Cloud</span>
        </div>
      </div>
    ),
    size,
  );
}
