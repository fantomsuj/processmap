export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background py-8">
      <div className="container max-w-screen-xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded bg-primary">
              <span className="font-mono text-xs font-bold text-primary-foreground">PM</span>
            </div>
            <span className="text-sm font-medium">ProcessMap</span>
          </div>
          <p className="text-center text-xs text-muted-foreground">© 2025 ProcessMap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
