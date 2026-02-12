import z from "zod"

export const loginValidator = z.object({
    username: z.string({
        error: "Username is required"
    }),
    password: z.string({
        error: "Password is required."
    })
})