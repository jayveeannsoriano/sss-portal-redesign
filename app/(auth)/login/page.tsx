import Footer from "@/components/footer";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-svh items-center justify-center bg-slate-100 p-6">
      <div className="w-full max-w-sm md:max-w-4xl">
        <LoginForm />
        <Footer />
      </div>
    </div>
  );
}
