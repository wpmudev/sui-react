import React, { useState } from "react";

function AutoCompleteInput() {
  const [inputValue, setInputValue] = useState("");
  const [suggestedText, setSuggestedText] = useState("");
  
  const options = [
    "Option 1",
    "Option 2",
    "Option 3",
    "Option 4"
  ];
  
  function handleInputChange(event) {
    const inputValue = event.target.value.toLowerCase();
    let suggestedText = "";
    
    for (let i = 0; i < options.length; i++) {
      const optionValue = options[i].toLowerCase();
      
      if (optionValue.startsWith(inputValue)) {
        suggestedText = options[i].substring(inputValue.length);
        break;
      }
    }
    
    setInputValue(event.target.value);
    setSuggestedText(suggestedText);
  }
  
  function handleOptionSelect(optionText) {
    setInputValue(optionText);
    setSuggestedText("");
  }
  
  return (
    <div>
      <label htmlFor="myInput">Type something:</label>
      <input type="text" id="myInput" value={inputValue} onChange={handleInputChange} />
      {suggestedText && <div className="suggestions" onClick={() => handleOptionSelect(inputValue + suggestedText)}>{suggestedText}</div>}
      <datalist id="myOptions">
        {options.map((option, index) => <option key={index} value={option} />)}
      </datalist>
    </div>
  );
}

export default AutoCompleteInput;