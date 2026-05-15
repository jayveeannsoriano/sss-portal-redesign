import { assets } from "@/app/constants/assets";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-svh lg:grid-cols-[520_1fr]">
      <div className="relative hidden lg:block">
        <img
          src={assets.loginBanner}
          alt="sss-login-banner"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
      <div className="flex flex-col md:justify-center p-8">
        <div className="flex flex-1 items-center justify-center">
          {children}
        </div>
        <div className="w-full flex flex-col items-center justify-center text-center text-xs text-muted-foreground mt-6">
          Jian Soriano &copy; 2026
          <br />
          Terms of Service | Privacy Policy
        </div>
      </div>
    </div>
  );
}
