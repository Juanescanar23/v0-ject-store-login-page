export function LoginFooter() {
  return (
    <footer className="flex flex-col items-center gap-2 py-6 text-center">
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <a
          href="#"
          className="transition-colors hover:text-foreground"
        >
          Soporte
        </a>
        <span className="text-border dark:text-muted-foreground/40">{"·"}</span>
        <a
          href="#"
          className="transition-colors hover:text-foreground"
        >
          Terminos y Condiciones
        </a>
        <span className="text-border dark:text-muted-foreground/40">{"·"}</span>
        <a
          href="#"
          className="transition-colors hover:text-foreground"
        >
          Privacidad
        </a>
      </nav>
      <p className="text-xs text-muted-foreground/60">
        {"Hecho en Latinoamerica · \u00A9 2026 JectStore"}
      </p>
    </footer>
  )
}
