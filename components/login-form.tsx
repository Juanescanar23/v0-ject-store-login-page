"use client"

import { useState } from "react"
import { Eye, EyeOff, ArrowRight } from "lucide-react"

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="relative w-full max-w-[460px]">
      {/* Glass Card - Light mode: dark glass / Dark mode: solid dark surface */}
      <div
        className="relative rounded-[28px] p-8 sm:p-10
          bg-[rgba(10,10,10,0.85)] backdrop-blur-[22px]
          border border-[rgba(255,255,255,0.08)]
          shadow-[0_40px_100px_rgba(0,0,0,0.18)]
          dark:bg-card dark:border-border dark:backdrop-blur-none
          dark:shadow-[0_40px_100px_rgba(0,0,0,0.4)]"
      >
        {/* Logo inside card */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-0 select-none">
            <span className="rounded-md bg-[#fafafa] px-2.5 py-1 text-sm font-bold tracking-[0.15em] text-[#0B0B0C] dark:bg-foreground dark:text-background">
              JECT
            </span>
            <span className="px-2.5 py-1 text-sm font-bold tracking-[0.15em] text-[#fafafa] dark:text-foreground">
              STORE
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-[#fafafa] dark:text-foreground">
            Iniciar sesion
          </h1>
          <p className="mt-2 text-sm text-[#a1a1aa] dark:text-muted-foreground">
            Accede al Portal Central de JectStore
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs font-medium uppercase tracking-wider text-[#71717a] dark:text-muted-foreground"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              autoComplete="email"
              required
              className="h-12 w-full rounded-[14px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] px-4 text-sm text-[#fafafa] placeholder:text-[#52525b] outline-none transition-all focus:border-[rgba(255,255,255,0.25)] focus:bg-[rgba(255,255,255,0.08)]
                dark:border-border dark:bg-muted dark:text-foreground dark:placeholder:text-muted-foreground dark:focus:border-foreground/20 dark:focus:bg-accent"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-xs font-medium uppercase tracking-wider text-[#71717a] dark:text-muted-foreground"
            >
              Contrasena
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••••"
                autoComplete="current-password"
                required
                className="h-12 w-full rounded-[14px] border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] px-4 pr-12 text-sm text-[#fafafa] placeholder:text-[#52525b] outline-none transition-all focus:border-[rgba(255,255,255,0.25)] focus:bg-[rgba(255,255,255,0.08)]
                  dark:border-border dark:bg-muted dark:text-foreground dark:placeholder:text-muted-foreground dark:focus:border-foreground/20 dark:focus:bg-accent"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#52525b] transition-colors hover:text-[#a1a1aa] dark:text-muted-foreground dark:hover:text-foreground"
                aria-label={showPassword ? "Ocultar contrasena" : "Mostrar contrasena"}
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-xs text-[#71717a] transition-colors hover:text-[#fafafa] dark:text-muted-foreground dark:hover:text-foreground"
              >
                {"Olvidaste tu contrasena?"}
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="group mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-[14px] bg-[#fafafa] text-sm font-medium text-[#0B0B0C] transition-all hover:bg-[#e4e4e7] disabled:opacity-50
              dark:bg-foreground dark:text-background dark:hover:bg-foreground/90"
          >
            {isLoading ? (
              <div className="size-4 animate-spin rounded-full border-2 border-[#0B0B0C]/20 border-t-[#0B0B0C]" />
            ) : (
              <>
                Ingresar
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </>
            )}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)] dark:bg-border" />
            <span className="text-xs text-[#52525b] dark:text-muted-foreground">o</span>
            <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)] dark:bg-border" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-[14px] border border-[rgba(255,255,255,0.1)] bg-transparent text-sm font-medium text-[#a1a1aa] transition-all hover:border-[rgba(255,255,255,0.2)] hover:text-[#fafafa]
              dark:border-border dark:text-muted-foreground dark:hover:border-foreground/20 dark:hover:text-foreground"
          >
            <svg className="size-4" viewBox="0 0 24 24" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="currentColor"
                opacity="0.7"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="currentColor"
                opacity="0.5"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="currentColor"
                opacity="0.4"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
            Continuar con Google
          </button>
        </form>

        {/* Contact support */}
        <p className="mt-8 text-center text-xs text-[#52525b] dark:text-muted-foreground">
          {"Necesitas acceso? "}
          <a
            href="#"
            className="font-medium text-[#a1a1aa] underline-offset-4 transition-colors hover:text-[#fafafa] hover:underline dark:text-foreground/70 dark:hover:text-foreground"
          >
            Contacta soporte
          </a>
        </p>
      </div>
    </div>
  )
}
