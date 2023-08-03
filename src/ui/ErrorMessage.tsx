
interface Props {
	fieldName: string[] | undefined;
	isFormSubmitted: boolean
	isTouched?: boolean
}

export const ErrorMessage = ({ isFormSubmitted, fieldName, isTouched }: Props) => {

	const shouldShowErrors = (isTouched && fieldName && fieldName.length > 0);

	return (
		shouldShowErrors || isFormSubmitted ?

			<div  >
				{fieldName?.map((errorMessage: string, index: number) => (
					<p className='error-message' key={index}>{errorMessage}</p>
				))}
			</div>
			: <></>
	);
};