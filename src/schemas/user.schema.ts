export const userSchema = { name: { required: true, minLength: 2 }, email: { required: true, format: 'email' } } as const
