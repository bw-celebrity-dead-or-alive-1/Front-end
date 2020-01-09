import React from 'react';
import { Card } from 'react-bootstrap';

import LogRegFields from './LogRegFields';

const Register = (props) => {
	return (
		<Card style={{ width: '35rem' }}>
			<LogRegFields register={true} />
		</Card>
	);
};

export default Register;
