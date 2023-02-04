
import { FilePond } from 'react-filepond'
import { useEffect, useState } from 'react'
import { FilePondFile } from 'filepond'

import 'filepond/dist/filepond.min.css'

function App() {

  const [files, setFiles] = useState<FilePondFile[]>()

  useEffect(() => {
    if (files === undefined) return;
    if (files.length === 0) {
      // The file was cleared
      // TODO
    } else if (files.length === 1) {
      // A file was uploaded
      const file = files[0];
      console.log(file.filename);
    }
  }, [files])

  return (
    <div className="min-h-screen md:max-w-xl mx-auto flex flex-col justify-around px-2">
      <h1 className="text-3xl text-center tracking-wider">
        SRT<span className="text-4xl px-1">2</span>TXT
      </h1>
      <FilePond
        labelIdle={'Drop your subs file or <span class="filepond--label-action"> Browse </span>'}
        onupdatefiles={setFiles}
        allowMultiple={false}
        credits={false}
      />
    </div>
  )
}

export default App
