import { Button, Wrapper } from './styles';

type NumericSelectorProps = {
  value: number;
  updateValue: (value: number) => void;
};

const NumericSelector = ({ value, updateValue }: NumericSelectorProps) => {
  return (
    <Wrapper>
      <Button disabled={value === 0} onClick={() => updateValue(value - 1)}>
        -
      </Button>
      <span>{value}</span>
      <Button onClick={() => updateValue(value + 1)}>+</Button>
    </Wrapper>
  );
};

export default NumericSelector;
