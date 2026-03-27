"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"

const menuItems = [
  { href: "#home", label: "Home" },
  { href: "#work", label: "Work" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#why-choose-us", label: "Why Choose Us" },
  { href: "#featured-projects", label: "Featured Projects" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#pricing", label: "Pricing" },
  { href: "#final-cta", label: "Start Today" },
]

export function SiteMenu() {
  const [isOpen, setIsOpen] = useState(false)

  function closeMenu() {
    setIsOpen(false)
  }

  function handleNavigate(href: string) {
    closeMenu()

    requestAnimationFrame(() => {
      const section = document.querySelector<HTMLElement>(href)

      if (!section) {
        return
      }

      section.scrollIntoView({ behavior: "smooth", block: "start" })
      window.history.replaceState(null, "", href)
    })
  }

  return (
    <>
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => (isOpen ? closeMenu() : setIsOpen(true))}
        className="fixed top-4 left-4 z-50 rounded-full border-border bg-background/90 text-foreground backdrop-blur-sm"
      >
        {isOpen ? <X className="size-4" /> : <Menu className="size-4" />}
      </Button>

      <div
        className={`fixed inset-0 z-40 transition ${
          isOpen
            ? "pointer-events-auto bg-black/20"
            : "pointer-events-none bg-black/0"
        }`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        className={`fixed top-0 left-0 z-40 flex h-screen w-64 flex-col border-r border-border bg-background px-6 py-20 text-foreground transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >
        <nav className="flex flex-col gap-4 text-sm tracking-[0.2em] uppercase">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="w-fit text-foreground/70 transition hover:text-foreground"
              onClick={(event) => {
                event.preventDefault()
                handleNavigate(item.href)
              }}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </aside>
    </>
  )
}
