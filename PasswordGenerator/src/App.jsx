import { useState, useCallback, useEffect, useRef} from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "~!@#%^&*()_+";
    for (let i = 0; i < length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  }, 
  [length, numberAllowed, charAllowed, setPassword]
)

const copyPasswordToClipboard = useCallback(() => {
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0, 101) // for selecting a range
  window.navigator.clipboard.writeText(password)  //copy any thing in react only
}, [password])

useEffect(() => {
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-gray-900 align-middle">
  <div className="w-full max-w-md mx-auto rounded-lg px-6 py-6 my-8 bg-gray-700 text-orange-500 shadow-lg">
    
    <h1 className="text-white text-center text-xl font-semibold mb-4">
      Password Generator
    </h1>

    {/* Password Output */}
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
      <input
        type="text"
        value={password}
        className="outline-none w-full py-2 px-3 text-gray-800"
        placeholder="Password"
        readOnly
        ref={passwordRef}
      />
      <button
        onClick={copyPasswordToClipboard}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 shrink-0"
      >
        Copy
      </button>
    </div>

    {/* Controls */}
    <div className="flex flex-col gap-4 text-sm text-white">
      
      {/* Length */}
      <div className="flex items-center gap-3">
        <input
          type="range"
          min={6}
          max={100}
          value={length}
          className="cursor-pointer w-full"
          onChange={(e) => setlength(e.target.value)}
        />
        <span className="whitespace-nowrap">Length: {length}</span>
      </div>

      {/* Checkboxes */}
      <div className="flex gap-6">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed((prev) => !prev)}
          />
          Numbers
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => setCharAllowed((prev) => !prev)}
          />
          Characters
        </label>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default App
