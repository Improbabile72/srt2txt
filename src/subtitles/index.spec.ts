import * as FilePond from "filepond";
import { type FilePondFile, } from "filepond";
import { processSubtitle, processSubtitleContent } from ".";
import validSubs from "./fixtures/01-valid-subs";
import invalidSubs from "./fixtures/02-invalid-subs";

describe("processSubtitleContent", () => {
  it("correctly parses and extracts text from subs", () => {
    const res = processSubtitleContent(validSubs);
    expect(res).toHaveLength(10);
  });

  it("throws error if cannot parse data", () => {
    expect(() => {
      processSubtitleContent(invalidSubs);
    }).toThrowError();
  });
});

describe("processSubtitle", () => {
  it("correctly process the subtitles", async () => {
    // Create a FilePond instance
    const mockFile = new File([validSubs], 'the_it_crowd_s01e01_en.srt', {
      type: 'text/plain',
      lastModified: 1139019760,
    });    
    const filepondInstance = FilePond.create();
    await filepondInstance.addFile(mockFile);
    const file: FilePondFile = filepondInstance.getFiles()[0];

    const res = await processSubtitle(file);

    expect(res).toEqual(`
Season 1 espisode 1
Hope this doesn't
embarrass you Jen,
but I found the best thing to do
with the new employee
is to size them up
with a long hard stare.
- So!
- So.
- First day!
- Yes!
- Scary...?
- Yes...
- Don't be scared!
- Oh, I'm not really scared.
You should be!
- Well I'm a little bit scared.
- What? Don't be!
    `.trim());
  });
});