import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

import LogReg from './LogReg';

const Register = (props) => {
	return (
		<Card style={{ width: '35rem' }}>
			<LogReg register={true} />
		</Card>
	);
};

export default Register;
