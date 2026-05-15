import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { assets } from "@/app/constants/assets";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form
      className={cn("flex w-full max-w-sm flex-col gap-6", className)}
      {...props}
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <img
            src={assets.sssLogo}
            alt="sss-logo"
            className="w-22 h-full mb-2"
          />
          <h1 className="text-4xl font-bold m-2">Mabuhay!</h1>
          <p className="text-sm text-balance md:mb-4">
            Please enter your login details
          </p>
        </div>
        <Field>
          <FieldLabel htmlFor="username">Username</FieldLabel>
          <Input
            id="username"
            type="username"
            placeholder="Enter your username"
            required
          />
        </Field>
        <Field>
          <div className="flex items-center">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <a
              href="#"
              className="ml-auto text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id="password"
            type="password"
            required
            placeholder="Enter your password"
          />
        </Field>
        <Field>
          <Button type="submit" className="cursor-pointer">
            Login
          </Button>
        </Field>
        <div className="grid gap-2 mt-6">
          <div className="w-full flex justify-center text-sm text-muted-foreground">
            Don't have an account?
          </div>
          <Field>
            <Button variant="outline" className="cursor-pointer" type="button">
              Register account
            </Button>
          </Field>
        </div>
      </FieldGroup>
    </form>
  );
}
