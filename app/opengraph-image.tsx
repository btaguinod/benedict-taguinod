import { ImageResponse } from "next/og"

export const alt = "Benedict Taguinod — web + cloud engineer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

const BACKGROUND = "#090b19"
const FOREGROUND = "#bed5ff"
const MUTED = "#95a6c5"
const ACCENT = "#be8cff"

async function loadDMSansTTF(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=DM+Sans:wght@${weight}`,
      { headers: { "User-Agent": "curl/8.0" } }
    ).then((r) => r.text())
    const url = css.match(/url\((https:[^)]+\.ttf)\)/)?.[1]
    if (!url) return null
    return await fetch(url).then((r) => r.arrayBuffer())
  } catch {
    return null
  }
}

export default async function Image() {
  const [dmSansRegular, dmSansBold] = await Promise.all([
    loadDMSansTTF(400),
    loadDMSansTTF(700),
  ])

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        backgroundColor: BACKGROUND,
        color: FOREGROUND,
        fontFamily: dmSansRegular ? "DM Sans" : undefined,
      }}
    >
      <div
        style={{
          display: "flex",
          fontSize: 28,
          color: MUTED,
          letterSpacing: "0.1em",
        }}
      >
        benedict-taguinod.com
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700 }}>
          Benedict Taguinod.
        </div>
        <div style={{ display: "flex", fontSize: 40, color: ACCENT }}>
          web + cloud engineer
        </div>
      </div>
    </div>,
    {
      ...size,
      ...(dmSansRegular && dmSansBold
        ? {
            fonts: [
              {
                name: "DM Sans",
                data: dmSansRegular,
                style: "normal",
                weight: 400,
              },
              {
                name: "DM Sans",
                data: dmSansBold,
                style: "normal",
                weight: 700,
              },
            ],
          }
        : {}),
    }
  )
}
