import { useState, useCallback } from 'react';

export const useInputControl = incoming => {
  const [value, setValue] = useState(incoming);
  const onChange = useCallback(
    ev => setValue(ev.currentTarget.value),
    []
  );
  console.log(value)
  return { value, onChange };
};