"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { assets } from "@/app/constants/assets";
import { Alert } from "./ui/alert";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormValues) => {
    // TODO: handle login logic
    console.log(data);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card className="overflow-hidden p-0 shadow-2xl">
        <CardContent className="grid p-0 md:grid-cols-2">
          <div className="relative hidden bg-muted md:block">
            <img
              src={assets.loginBanner}
              alt="sss-login-banner"
              className="inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
            />
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="p-10 md:p-12 flex flex-col justify-center"
          >
            <FieldGroup>
              <div className="flex flex-col items-center gap-1 text-center">
                <img
                  src={assets.sssLogo}
                  alt="sss-logo"
                  className="w-14 h-full mb-8"
                />
                <h1 className="text-4xl font-bold m-2">Mabuhay!</h1>
                <p className="text-sm text-balance md:mb-4">
                  Please enter your login details
                </p>
              </div>
              {/* <Alert variant={"destructive"} className="text-xs">
                Invalid username or password. Please try again.
              </Alert> */}
              <Field>
                <FieldLabel htmlFor="username">Username</FieldLabel>
                <Input id="username" type="text" {...register("username")} />
                {errors.username && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.username.message}
                  </p>
                )}
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto text-xs underline-offset-4 text-primary hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  {...register("password")}
                />
                {errors.password && (
                  <p className="text-xs text-destructive mt-1">
                    {errors.password.message}
                  </p>
                )}
              </Field>
              <Field>
                <Button
                  type="submit"
                  className="cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </Button>
              </Field>
              <div className="grid gap-2 mt-6">
                <div className="w-full flex justify-center text-xs text-muted-foreground">
                  Don't have an account?
                </div>
                <Field>
                  <Button
                    variant="outline"
                    className="cursor-pointer"
                    type="button"
                  >
                    Register account
                  </Button>
                </Field>
              </div>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
