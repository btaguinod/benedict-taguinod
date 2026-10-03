import { readFile } from "node:fs/promises"
import { join } from "node:path"

export const dynamic = "force-static"

const PDF_HEADERS = {
  "Content-Type": "application/pdf",
  "Content-Disposition": 'inline; filename="benedict-taguinod-resume.pdf"',
} as const

const MD_HEADERS = {
  "Content-Type": "text/markdown; charset=utf-8",
  "Content-Disposition": 'inline; filename="benedict-taguinod-resume.md"',
} as const

export async function GET() {
  try {
    const pdf = await readFile(join(process.cwd(), "docs/resume.pdf"))
    return new Response(new Uint8Array(pdf), { headers: PDF_HEADERS })
  } catch {
    const md = await readFile(join(process.cwd(), "docs/resume.md"), "utf8")
    return new Response(md, { headers: MD_HEADERS })
  }
}
