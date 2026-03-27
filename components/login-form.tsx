import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-4xl font-bold m-2">Mabuhay!</h1>
          <p className="text-sm text-balance text-muted-foreground">
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
        <FieldSeparator>Don't have an account?</FieldSeparator>
        <Field>
          <Button variant="outline" className="cursor-pointer" type="button">
            Register account
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}
