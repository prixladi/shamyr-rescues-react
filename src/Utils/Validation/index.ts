const tooLongText = (name: string, max: number) => `${name} is too long (max ${max} characters).`;
const tooShortText = (name: string, min: number) => `${name} must be at least ${min} characters long.`;
const requiredText = (name: string) => `${name} is required.`;
const invalidUrlText = (name: string) => `${name} must be valid url (eg. https://google.com)`;

export { tooLongText, tooShortText, requiredText, invalidUrlText };
