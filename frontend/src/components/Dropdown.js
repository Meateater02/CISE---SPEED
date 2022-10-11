import React from 'react';
import SEPractices from "./SEPractices"

<option value="">Select an SE Practice </option>
  const optionItems = SEPractices.map((SEPractice) =>
                <option key={SEPractice.practice}>{SEPractice.practice}</option>
            );
  const Dropdown = () => {
    return (
        <div>
             <select>
                {optionItems}
             </select>
         </div>

    )
  }
  export default Dropdown;
