interface TextPreviewProps {
  paragraphs: string[];
}

function TextPreview(props: TextPreviewProps): JSX.Element {
  return (
    <div className="grow-2 p-4 overflow-auto text-sm bg-white rounded">
      {props.paragraphs.map((paragraph, idx) => (
        <p key={`p-${idx}`}>{paragraph}</p>
      ))}
    </div>
  );
}

export default TextPreview;
