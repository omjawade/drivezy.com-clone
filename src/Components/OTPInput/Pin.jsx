import React, { useRef } from "react";
import { PinItem } from "./PinItem";
import PropType from "prop-types";

function Pin(props) {
  const { label, noOfBoxes, maxCharPerBox } = props;
  const [values, setValues] = React.useState(new Array(noOfBoxes).fill(""));
  const elements = useRef(new Array(noOfBoxes).fill(0));

  const handleChange = (inputBoxValue, i) => {
    const val = [...values];
    val[i] = inputBoxValue;
    setValues(val);

    // move cursor to the next box if
    // element is filled
    if (
      inputBoxValue.length > 0 &&
      inputBoxValue.length === maxCharPerBox &&
      i < noOfBoxes - 1
    ) {
      elements.current[i + 1].focus();
    }
    // send the value
    props.onChange(val.join(""));
  };

  const onBackspace = (inputBoxValue, i) => {
    if (i > 0 && inputBoxValue.length === 0) {
      elements.current[i - 1].focus();
    }
    const val = [...values];
    val[i] = inputBoxValue;
    setValues(val);
    props.onChange(val.join(""));
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const str = e.clipboardData.getData("Text");
    let val = new Array(noOfBoxes).fill("");
    for (let i = 0; i < noOfBoxes; i++) {
      let strBox = str.slice(i * maxCharPerBox, (i + 1) * maxCharPerBox);
      if (strBox === "") {
        break;
      }
      elements.current[i].value = strBox;
      val[i] = strBox;
      if (i < noOfBoxes - 1 && strBox.length === maxCharPerBox) {
        elements.current[i + 1].focus();
      } else {
        break;
      }
    }
    setValues(val);
  };

  React.useEffect(() => {
    // elements.current[0].focus();
  }, []);

  return (
    <div onPaste={handlePaste}>
      {values.map((item, i) => (
        <PinItem
          maxChar={maxCharPerBox}
          ref={(n) => (elements.current[i] = n)}
          onChange={(val) => handleChange(val, i)}
          onBackspace={(val) => onBackspace(val, i)}
          key={i}
        />
      ))}
    </div>
  );
}

Pin.propType = {
  maxCharPerBox: PropType.number,
  label: PropType.string,
  onChange: PropType.func,
  noOfBoxes: PropType.number
};

Pin.defaultProps = {
  maxCharPerBox: 1,
  noOfBoxes: 1,
  onChange: () => {}
};

export { Pin };
