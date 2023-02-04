import { type FilePondFile } from "filepond";
import { parseSync } from "subtitle";

export async function processSubtitle(sub: FilePondFile): Promise<string> {
  const file = sub.file;
  const content = await file.text();
  const parsed = parseSync(content);

  return parsed.map((node) => {
    if (node.type !== "cue") {
      return "";
    }
    return node.data.text;
  }).join("\n");
}