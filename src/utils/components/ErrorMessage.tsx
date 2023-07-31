
interface Props {
	fieldName: string[] | undefined;
	isFormSubmitted: boolean
	isTouched?: boolean
}

export const ErrorMessage = ({ isFormSubmitted, fieldName, isTouched }: Props) => {

	const shouldShowErrors = (isTouched && fieldName && fieldName.length > 0);

	return (
		shouldShowErrors || isFormSubmitted ?

			<div className='error-message' >
				{fieldName?.map((errorMessage: string, index: number) => (
					<p key={index}>{errorMessage}</p>
				))}
			</div>
			: <></>
	);
};