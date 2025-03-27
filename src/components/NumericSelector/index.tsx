type NumericSelectorProps = {
  value: number;
  updateValue: (value: number) => void;
};

const NumericSelector = ({ value, updateValue }: NumericSelectorProps) => {
  return (
    <div>
      <button disabled={value === 0} onClick={() => updateValue(value - 1)}>
        -
      </button>
      <span>{value}</span>
      <button onClick={() => updateValue(value + 1)}>+</button>
    </div>
  );
};

export default NumericSelector;
