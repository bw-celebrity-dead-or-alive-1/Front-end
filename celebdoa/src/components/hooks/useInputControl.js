import { useState, useCallback } from 'react';

export const useInputControl = incoming => {
	const [value, setValue] = useState(incoming);
	const onChange = useCallback(
		ev => setValue(ev.currentTarget.value),
		[]
	);
	return { value, onChange };
};