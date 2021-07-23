import React from "react";
import PropTypes from "prop-types";

const style = {
  padding: 10,
  width: 20,
  margin: 2
};

const PinItem = React.forwardRef((props, ref) => {
  const { maxChar, onChange, onBackspace } = props;
  
  const handleChange = (e) => {
    console.log(e.keyCode);
    switch (e.keyCode) {
      case 8: {
        onBackspace(e.target.value);
        break;
      }
      case 16:
      case 9: {
        e.preventDefault();
        break;
      }
      default: {
        onChange(e.target.value);
      }
    }
  };
  return (
    <input style={style} onKeyUp={handleChange} maxLength={maxChar} ref={ref} />
  );
});

PinItem.propTypes = {
  maxChar: PropTypes.number,
  onChange: PropTypes.func
};

PinItem.defaultProps = {
  maxChar: 1
};

export { PinItem };
