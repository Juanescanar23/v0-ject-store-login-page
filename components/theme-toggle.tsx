"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors"
        aria-label="Cambiar tema"
      >
        <Sun className="size-4" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-all hover:text-foreground hover:border-foreground/20 dark:bg-muted dark:border-border"
      aria-label="Cambiar tema"
    >
      {theme === "dark" ? (
        <Sun className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
    </button>
  )
}
