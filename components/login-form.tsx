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
    <div className="relative w-full max-w-[440px]">
      {/* Glass Card - Apple-like charcoal glass */}
      <div
        className="relative rounded-[30px] px-8 py-9 sm:px-9 sm:py-10
          border border-[rgba(255,255,255,0.14)]"
        style={{
          background: "rgba(0, 0, 0, 0.92)",
          backdropFilter: "blur(28px) saturate(120%)",
          WebkitBackdropFilter: "blur(28px) saturate(120%)",
          boxShadow: "0 80px 180px rgba(0,0,0,0.32), 0 30px 80px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 0 rgba(255,255,255,0.06)",
        }}
      >
        {/* Title */}
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-[#FFFFFF]">
            Iniciar sesion
          </h1>
          <p className="mt-2 text-sm text-[rgba(255,255,255,0.50)]">
            Accede al Portal Central de JectStore
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-xs font-medium uppercase tracking-wider text-[rgba(255,255,255,0.50)]"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="tu@email.com"
              autoComplete="email"
              required
              className="h-12 w-full rounded-[14px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.10)] px-4 text-sm text-[#FFFFFF] placeholder:text-[rgba(255,255,255,0.45)] outline-none transition-all focus:outline-2 focus:outline-[rgba(255,255,255,0.22)] focus:border-transparent focus:bg-[rgba(255,255,255,0.12)]"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="text-xs font-medium uppercase tracking-wider text-[rgba(255,255,255,0.50)]"
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
                className="h-12 w-full rounded-[14px] border border-[rgba(255,255,255,0.14)] bg-[rgba(255,255,255,0.10)] px-4 pr-12 text-sm text-[#FFFFFF] placeholder:text-[rgba(255,255,255,0.45)] outline-none transition-all focus:outline-2 focus:outline-[rgba(255,255,255,0.22)] focus:border-transparent focus:bg-[rgba(255,255,255,0.12)]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[rgba(255,255,255,0.40)] transition-colors hover:text-[rgba(255,255,255,0.70)]"
                aria-label={showPassword ? "Ocultar contrasena" : "Mostrar contrasena"}
              >
                {showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
            <div className="flex justify-end">
              <a
                href="#"
                className="text-xs text-[rgba(255,255,255,0.45)] transition-colors hover:text-[rgba(255,255,255,0.80)]"
              >
                {"Olvidaste tu contrasena?"}
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="group mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-[14px] bg-[#FAFAFA] text-sm font-semibold text-[#0B0B0C] transition-all hover:bg-[#E4E4E7] disabled:opacity-50"
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
            <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" />
            <span className="text-xs text-[rgba(255,255,255,0.35)]">o</span>
            <div className="h-px flex-1 bg-[rgba(255,255,255,0.08)]" />
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-[14px] border border-[rgba(255,255,255,0.14)] bg-transparent text-sm font-medium text-[rgba(255,255,255,0.60)] transition-all hover:border-[rgba(255,255,255,0.22)] hover:bg-[rgba(255,255,255,0.06)] hover:text-[rgba(255,255,255,0.85)]"
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
        <p className="mt-8 text-center text-xs text-[rgba(255,255,255,0.35)]">
          {"Necesitas acceso? "}
          <a
            href="#"
            className="font-medium text-[rgba(255,255,255,0.55)] underline-offset-4 transition-colors hover:text-[rgba(255,255,255,0.85)] hover:underline"
          >
            Contacta soporte
          </a>
        </p>
      </div>
    </div>
  )
}
