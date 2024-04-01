"use client"
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [url, setUrl] = useState("")
  const [invalidUrl, setInvalidUrl] = useState(false)
  const [pastedLink, setPastedLink] = useState("")
  const handlePaste = (e) => {
    e.preventDefault()
    const urlPattern = new RegExp('^(https?:\\/\\/)?' + // Protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // Domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // Port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // Query string
    '(\\#[-a-z\\d_]*)?$', 'i'); // Fragment locator
    if (urlPattern.test(url)) {
      setInvalidUrl(false)
      setPastedLink(url)
    } else {
      setUrl("")
      setInvalidUrl(true)
    }
  }
  return (
    <main className="flex min-h-screen justify-center flex-col items-center gap-9 p-6">
     <nav className="flex items-center">
       <img 
           src="/short-lnk-logo.svg" 
           alt="short-lnk logo"
           width={201}
           height={48}
       />
     </nav>
     <div className="h-[200px] w-full flex flex-col items-center">
       <form method="get" className="flex flex-col w-full items-center justify-center gap-2 lg:flex-row">
          <input type="text" value={url} onChange = {(e) => setUrl(e.target.value)} placeholder="Enter a valid url.." className="b-1 max-w-[400px] border-black px-5 py-2 w-full rounded-full" />
          <button onClick={(e) =>  handlePaste(e)} className="bg-[#6935FE] w-full lg:w-fit max-w-[400px] text-white rounded-full px-5 py-3">Paste</button>
       </form>
       {
        invalidUrl && <p className="text-red-600">please enter a valid url</p>
       }
     </div>
    </main>
  );
}
