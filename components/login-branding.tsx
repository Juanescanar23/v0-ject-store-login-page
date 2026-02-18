import { Layers, Globe, CreditCard } from "lucide-react"

export function LoginBranding() {
  return (
    <div className="flex flex-col justify-center">
      {/* Logo */}
      <div className="mb-10 flex items-center gap-0 select-none">
        <span className="rounded-md bg-foreground px-3 py-1.5 text-base font-bold tracking-[0.15em] text-background">
          JECT
        </span>
        <span className="px-3 py-1.5 text-base font-bold tracking-[0.15em] text-foreground">
          STORE
        </span>
      </div>

      {/* Headline */}
      <h2 className="max-w-md text-balance text-4xl font-bold leading-[1.1] tracking-tight text-foreground lg:text-[2.75rem]">
        Infraestructura SaaS para E-Commerce Multi-Tenant
      </h2>

      {/* Subtitle */}
      <p className="mt-5 max-w-sm text-pretty text-base leading-relaxed text-muted-foreground">
        Portal central para resellers y operacion de tiendas. Planes, limites y facturacion bajo control.
      </p>

      {/* Bullets */}
      <div className="mt-10 flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground dark:bg-muted">
            <Layers className="size-[18px]" />
          </div>
          <span className="text-sm font-medium text-foreground">
            Control por planes y cupos
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground dark:bg-muted">
            <Globe className="size-[18px]" />
          </div>
          <span className="text-sm font-medium text-foreground">
            Provision y dominios personalizados
          </span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-foreground dark:bg-muted">
            <CreditCard className="size-[18px]" />
          </div>
          <span className="text-sm font-medium text-foreground">
            Cobro recurrente y suspension automatica
          </span>
        </div>
      </div>
    </div>
  )
}
