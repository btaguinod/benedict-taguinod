import { ImageResponse } from "next/og"

export const size = {
  width: 180,
  height: 180,
}
export const contentType = "image/png"

/*
 * Raster provenance: apple touch icon regenerated from the icon.svg grammar
 * (espresso tile #6E3511, cream glyphs #FCECD8) for the menu-board world.
 * Generated via next/og ImageResponse at build time — dynamic raster, no
 * generation prompt; origin is this source file.
 */
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#6E3511",
          color: "#FCECD8",
          fontSize: 110,
          fontWeight: 700,
          lineHeight: 1,
          letterSpacing: "-0.02em",
        }}
      >
        bt
      </div>
    ),
    { ...size }
  )
}