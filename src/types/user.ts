export type User = {
  email: string
  password: string
  isAdmin: boolean
}

export type AuthFormState = {
  success: boolean
  error: boolean
  message: string
}