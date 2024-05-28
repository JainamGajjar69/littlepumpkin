import {z} from 'zod'
const firstName = z.string({
    required_error: "Name is required",
    invalid_type_error: "Name must be a string",
  });
  const lastName = z.string({
    required_error: "lastName is required",
    invalid_type_error: "lastName must be a string",
  });

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z
      .string()
      .min(8, { message: "Password must be 8 characters long" }),
    number: z
      .string()
      .min(10,{message: "Number is invalid"}),
      firstName: firstName,
      lastName: lastName
  });

  export type TAuthCredentialsValidator = z.infer<
  typeof AuthCredentialsValidator
  >;