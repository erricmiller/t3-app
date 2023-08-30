import { z } from "zod";

enum Gender {
  Male = "Male",
  Female = "Female",
}

export const usersValidations = z.object({
  name: z.string().min(3, { message: "Name should atleast be 3 Characters" }).max(30, { message: "Name can only be maximum of 30 Characters" }),
  email: z.string().email(),
  password: z.string().min(3, { message: "Password should atleast be 3 Characters" }).max(15, { message: "Name can only be maximum of 15 Characters" }),
  gender: z.nativeEnum(Gender).describe("You have to select at least one item."),
});
