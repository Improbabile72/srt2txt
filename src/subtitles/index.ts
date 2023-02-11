import { type FilePondFile } from "filepond";
import { parseSync, type NodeList } from "subtitle";

export async function processSubtitle(
  sub: FilePondFile,
  splitCueOnNewLine = false
): Promise<string[]> {
  const file = sub.file;
  const content = await file.text();

  return processSubtitleContent(content, splitCueOnNewLine);
}

export function processSubtitleContent(
  content: string,
  splitCueOnNewLine = false
): string[] {
  const parsed = parseSync(content);
  return extractTextFromSubs(parsed, splitCueOnNewLine);
}

function extractTextFromSubs(
  subs: NodeList,
  splitCueOnNewLine = false
): string[] {
  return subs.flatMap((node) => {
    if (node.type !== "cue") {
      return [""];
    }
    return splitCueOnNewLine
      ? node.data.text.split("\n")
      : node.data.text.replaceAll("\n", " ");
  });
}
