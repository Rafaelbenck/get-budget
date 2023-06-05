/* eslint-disable react/prop-types */

import style from "../css/Select.module.css";

const Select = ({ text, name, options, handleOnchange, value }) => {
  return (
    // handleOnChang, value
    <div className={style.selectControl}>
      <label htmlFor={name}>{text}:</label>
      <select
        name={name}
        id={name}
        onChange={handleOnchange}
        value={value || ""}
      >
        <option>Select your project category</option>
        {options.map((option) => (
          <option value={option.id} key={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
