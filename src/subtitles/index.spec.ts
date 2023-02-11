import * as FilePond from "filepond";
import { type FilePondFile } from "filepond";
import { processSubtitle, processSubtitleContent } from ".";
import { validSubs, validSubsFile } from "./fixtures/01-valid-subs";
import { invalidSubs } from "./fixtures/02-invalid-subs";

describe("processSubtitleContent", () => {
  it("correctly parses and extracts text from subs", () => {
    const res = processSubtitleContent(validSubs);
    expect(res).toHaveLength(10);
    expect(res[1]).toEqual("Hope this doesn't embarrass you Jen,");
  });

  it("throws error if cannot parse data", () => {
    expect(() => {
      processSubtitleContent(invalidSubs);
    }).toThrowError();
  });

  it("extracts text from subs splitting on new lines inside each cue", () => {
    const res = processSubtitleContent(validSubs, true);
    expect(res).toHaveLength(18);
    expect(res[1]).toEqual("Hope this doesn't");
    expect(res[2]).toEqual("embarrass you Jen,");
  });
});

describe("processSubtitle", () => {
  let file: FilePondFile;

  beforeEach(async () => {
    // Create a FilePond instance
    const filepondInstance = FilePond.create();
    await filepondInstance.addFile(validSubsFile);
    file = filepondInstance.getFiles()[0];
  });

  it("correctly process the subtitles", async () => {
    const res = await processSubtitle(file);

    expect(res).toEqual([
      "Season 1 espisode 1",
      "Hope this doesn't embarrass you Jen,",
      "but I found the best thing to do with the new employee",
      "is to size them up with a long hard stare.",
      "- So! - So.",
      "- First day! - Yes!",
      "- Scary...? - Yes...",
      "- Don't be scared! - Oh, I'm not really scared.",
      "You should be!",
      "- Well I'm a little bit scared. - What? Don't be!",
    ]);
  });

  it("correctly process the subtitles splitting on \\n", async () => {
    const res = await processSubtitle(file, true);

    expect(res).toEqual([
      "Season 1 espisode 1",
      "Hope this doesn't",
      "embarrass you Jen,",
      "but I found the best thing to do",
      "with the new employee",
      "is to size them up",
      "with a long hard stare.",
      "- So!",
      "- So.",
      "- First day!",
      "- Yes!",
      "- Scary...?",
      "- Yes...",
      "- Don't be scared!",
      "- Oh, I'm not really scared.",
      "You should be!",
      "- Well I'm a little bit scared.",
      "- What? Don't be!",
    ]);
  });
});
