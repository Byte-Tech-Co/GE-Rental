import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useSyncExternalStore } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

function getReducedMotion() {
  if (typeof window === "undefined") return false
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches
}

function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
  mediaQuery.addEventListener("change", callback)
  return () => mediaQuery.removeEventListener("change", callback)
}

export function useReducedMotion() {
  return useSyncExternalStore(subscribe, getReducedMotion, () => false)
}
