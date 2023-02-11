import { useState, useEffect } from "react";
import Button from "./Button";
import { delay } from "../utils";

type CopyToClipboardBtnState = "Copy to clipboard" | "Copied!";

interface CopyButtonProps {
  paragraphs: string[];
}

function CopyButton(props: CopyButtonProps): JSX.Element {
  const [copyBtnTxt, setCopyBtnTxt] =
    useState<CopyToClipboardBtnState>("Copy to clipboard");

  useEffect(() => {
    if (copyBtnTxt === "Copied!") {
      setTimeout(() => setCopyBtnTxt("Copy to clipboard"), 1200);
    }
  }, [copyBtnTxt]);

  const copyToClipboard = async () => {
    if (!props.paragraphs || copyBtnTxt === "Copied!") return;
    try {
      await Promise.all([
        navigator.clipboard.writeText(props.paragraphs.join("\n")),
        delay(200),
      ]);
    } catch {
      console.warn("Cannot write to clipboard :/");
    }
    setCopyBtnTxt("Copied!");
  };

  return (
    <div className="flex-shrink-0 h-12 my-4 flex justify-around">
      <Button onClick={copyToClipboard}>{copyBtnTxt}</Button>
    </div>
  );
}

export default CopyButton;
