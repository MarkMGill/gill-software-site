import { ImageResponse } from "next/og";

export const alt = "Mark Gill — Senior Full-Stack Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        background: "#081c36",
        color: "white",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", fontSize: 28, color: "#7fb2ff", fontWeight: 700 }}>GILL SOFTWARE SOLUTIONS</div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", maxWidth: 940, fontSize: 68, lineHeight: 1.08, fontWeight: 800 }}>
          Reliable software built for real business results.
        </div>
        <div style={{ display: "flex", marginTop: 32, fontSize: 28, color: "#c9dcf7" }}>
          Mark Gill · Senior Full-Stack Developer
        </div>
      </div>
    </div>,
    size,
  );
}

