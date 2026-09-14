import { ImageResponse } from "next/og";

export const alt = "Fanuel Gebru, software engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#f2f3f1",
          padding: "72px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 132,
              lineHeight: 1,
              letterSpacing: "-0.04em",
              color: "#24282b",
              fontWeight: 700,
            }}
          >
            Fanuel Gebru
          </div>
          <div style={{ marginTop: 28, fontSize: 40, color: "#646d73" }}>
            backend engineer, machine learning, Aberdeen
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div style={{ width: 120, height: 10, backgroundColor: "#0f6b4f" }} />
          <div style={{ fontSize: 28, color: "#646d73" }}>github.com/cheazer</div>
        </div>
      </div>
    ),
    size,
  );
}
