import { LoginForm } from "@/components/login-form"
import { LoginBranding } from "@/components/login-branding"
import { LoginFooter } from "@/components/login-footer"
import { ThemeToggle } from "@/components/theme-toggle"

export default function LoginPage() {
  // JectStore login
  return (
    <div className="relative flex min-h-svh flex-col bg-background">
      {/* Theme Toggle */}
      <div className="absolute right-6 top-6 z-10">
        <ThemeToggle />
      </div>

      {/* Main Content */}
      <main className="flex flex-1 items-center justify-center px-6 py-16 lg:px-12">
        <div className="flex w-full max-w-6xl flex-col items-center gap-16 lg:flex-row lg:gap-20">
          {/* Left Column — Branding / Copy */}
          <div className="hidden w-full max-w-md shrink-0 lg:block lg:w-[45%] lg:max-w-none">
            <LoginBranding />
          </div>

          {/* Mobile Branding (simplified) */}
          <div className="flex flex-col items-center gap-3 text-center lg:hidden">
            <div className="flex items-center gap-0 select-none">
              <span className="rounded-md bg-foreground px-2.5 py-1 text-sm font-bold tracking-[0.15em] text-background">
                JECT
              </span>
              <span className="px-2.5 py-1 text-sm font-bold tracking-[0.15em] text-foreground">
                STORE
              </span>
            </div>
            <p className="max-w-xs text-sm text-muted-foreground">
              Portal central para resellers y operacion de tiendas
            </p>
          </div>

          {/* Right Column — Login Card */}
          <div className="flex w-full justify-center lg:w-[55%] lg:justify-end">
            <LoginForm />
          </div>
        </div>
      </main>

      {/* Footer */}
      <LoginFooter />
    </div>
  )
}
