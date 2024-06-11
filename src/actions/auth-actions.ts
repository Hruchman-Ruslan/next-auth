"use server";

import { hashUserPassword } from "@/lib/hash";
import { createUser } from "@/lib/user";

interface Errors {
  [key: string]: string;
}

export async function signUp(_: any, formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  let errors: Errors = {};

  if (!email.includes("@")) {
    errors.email = "Please enter a valid email address";
  }

  if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      errors,
    };
  }

  const hashedPassword = hashUserPassword(password);
  createUser(email, hashedPassword);
}
