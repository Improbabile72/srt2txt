import { useEffect, useState } from 'react'
import { FilePondFile } from 'filepond'
import { FilePond } from 'react-filepond'
import { processSubtitle } from './subtitles'

import 'filepond/dist/filepond.min.css'

function App() {

  const [files, setFiles] = useState<FilePondFile[]>()
  const [result, setResult] = useState<string | undefined>(undefined);

  useEffect(() => {
    (async function () {
      if (files === undefined) return;
      if (files.length === 0) {
        // The file was cleared
        setResult("");
      } else if (files.length === 1) {
        // A file was uploaded
        const file = files[0];
        const res = await processSubtitle(file);
        setResult(res);
      }
    })().catch(console.error);
  }, [files])

  return (
    <div className="h-screen max-h-screen md:max-w-2xl mx-auto flex flex-col justify-around p-2">
      <header className="select-none my-4">
        <h1 className="text-3xl text-center tracking-wider">
          SRT<span className="text-4xl px-1">2</span>TXT
        </h1>
        <h2 className="mt-2 text-center text-gray-600">Strip time information from your subtitles file</h2>
      </header>

      <div className="grow-1 flex flex-col justify-center">
        <FilePond
          labelIdle={'Drop your subs file or <span class="filepond--label-action"> Browse </span>'}
          onupdatefiles={setFiles}
          allowMultiple={false}
          credits={false}
          stylePanelLayout="compact"
        />
      </div>
      <div className="grow-2 p-4 my-4 overflow-auto">
        {result !== undefined ? result : null }
      </div>
    </div>
  )
}

export default App
