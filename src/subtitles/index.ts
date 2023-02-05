import { type FilePondFile } from "filepond";
import { parseSync, type NodeList } from "subtitle";

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

export function processSubtitleContent(content: string): string[] {
  const parsed = parseSync(content);
  return extractTextFromSubs(parsed);
}

function extractTextFromSubs(subs: NodeList): string[] {
  return subs.map((node) => {
    if (node.type !== "cue") {
      return "";
    }
    return node.data.text;
  });
}
