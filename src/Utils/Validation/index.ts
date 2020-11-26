const tooLongText = (name: string, max: number): string => `${name} is too long (max ${max} characters).`;
const tooShortText = (name: string, min: number): string => `${name} must be at least ${min} characters long.`;
const requiredText = (name: string): string => `${name} is required.`;
const invalidUrlText = (name: string): string => `${name} must be valid url (eg. https://google.com)`;

export { tooLongText, tooShortText, requiredText, invalidUrlText };
