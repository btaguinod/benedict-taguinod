import { readFile } from "node:fs/promises"
import path from "node:path"
import { ImageResponse } from "next/og"

export const alt = "Benedict Taguinod"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

const BACKGROUND = "#FCECD8"
const FOREGROUND = "#241A12"
const MUTED = "#5C4530"
const ACCENT = "#597928"

const FONT_FILES = [
  { file: "DMSans-Regular.ttf", weight: 400 },
  { file: "DMSans-Bold.ttf", weight: 700 },
] as const

type LoadedFont = {
  name: string
  data: Buffer
  style: "normal"
  weight: (typeof FONT_FILES)[number]["weight"]
}

async function loadLocalFonts(): Promise<LoadedFont[]> {
  const dir = path.join(process.cwd(), "assets", "fonts")
  const results = await Promise.allSettled(
    FONT_FILES.map(async ({ file, weight }): Promise<LoadedFont> => {
      const data = await readFile(path.join(dir, file))
      return { name: "DM Sans", data, style: "normal", weight }
    })
  )
  return results
    .filter(
      (r): r is PromiseFulfilledResult<LoadedFont> => r.status === "fulfilled"
    )
    .map((r) => r.value)
}

export default async function Image() {
  const dmSansFonts = await loadLocalFonts()

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
        fontFamily: dmSansFonts.length > 0 ? "DM Sans" : undefined,
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
          lead engineer, ex-HPE, Conectado
        </div>
      </div>
    </div>,
    {
      ...size,
      ...(dmSansFonts.length > 0 ? { fonts: dmSansFonts } : {}),
    }
  )
}