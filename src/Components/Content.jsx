import { useState } from "react";

const Content = () => {
  const [text, setText] = useState("");

  const handleButtonClick = () => {
    const inpTextArea = document.getElementById("textArea");
    const enteredText = inpTextArea.value;
    setText(enteredText);
  };

  return (
    <div>
      <div>
        <textarea
          id='textArea'
          className='border border-black bg-slate-300 w-full 
            p-4'
          placeholder='Put your text here'
        />
        <button
          onClick={handleButtonClick}
          className='bg-black text-white py-2 px-4'
        >
          Update Text
        </button>
        <p className='w-full p-4'>{text}</p>
      </div>
    </div>
  );
};

export default Content;
