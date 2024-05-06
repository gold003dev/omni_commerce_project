export function parseErrorMessages(errorResponse) {
  const errorMessages = [];

  if (errorResponse && errorResponse.errors) {
    // Loop through each property (e.g., "Email", "FirstName") in the errors object
    for (const property in errorResponse.errors) {
      if (errorResponse.errors.hasOwnProperty(property)) {
        const propertyErrors = errorResponse.errors[property];

        // If there are errors for the current property, concatenate them into a single string
        if (propertyErrors && propertyErrors.length > 0) {
          const propertyErrorMessage = propertyErrors.join(" ");
          errorMessages.push(`${propertyErrorMessage}`);
        }
      }
    }
  }

  return errorMessages;
}
