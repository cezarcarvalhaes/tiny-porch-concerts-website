import { ReactNode } from 'react';

interface IIfProps {
	condition: boolean;
	children: ReactNode;
}

function If({ condition, children }: IIfProps) {
	return condition ? <>{children}</> : null;
}

export default If;
