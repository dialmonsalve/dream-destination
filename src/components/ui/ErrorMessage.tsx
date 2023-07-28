
interface Props {
	fieldName: string[];
	isFormSubmitted: boolean
}

export const ErrorMessage = ({ isFormSubmitted, fieldName }: Props) => {

	return (
		isFormSubmitted && fieldName &&

		<div className='error-message' >
			{fieldName.map((errorMessage: string, index: number) => (
				<p key={index}>{errorMessage}</p>
			))}
		</div>
	);
};