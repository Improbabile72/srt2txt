import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import App from "./App";
import { validSubsFile } from "./subtitles/fixtures/01-valid-subs";

const user = userEvent.setup();

describe("App", () => {
  it("renders the default state", async () => {
    render(<App />);

    expect(
      await screen.findByText("Strip time information from your subtitles file")
    ).toBeInTheDocument();
    expect(
      await screen.findByLabelText(/Drop your subs file/)
    ).toBeInTheDocument();
  });

  it("process subs when uploaded", async () => {
    render(<App />);

    const input = await screen.findByLabelText(/Drop your subs file/);
    expect(input).toBeInTheDocument();
    await user.upload(input, validSubsFile);

    expect(await screen.findByText(/Season 1 espisode 1/)).toBeInTheDocument();
  });
});
