import type Lenis from "lenis";

// Aktif Lenis örneğini saklar; navbar/hero anchor tıklamaları buradan
// yumuşak kaydırma (scrollTo) için kullanır.
let lenisInstance: Lenis | null = null;

export function setLenis(instance: Lenis | null) {
  lenisInstance = instance;
}

// Verilen anchor'a (ör. "#projects") yumuşak şekilde kaydırır.
// Fixed navbar için ~80px ofset bırakır. Lenis yoksa native smooth'a düşer.
export function scrollToHref(href: string) {
  if (typeof document === "undefined") return;
  const target = document.querySelector(href);
  if (!target) return;

  if (lenisInstance) {
    lenisInstance.scrollTo(target as HTMLElement, { offset: -80 });
  } else {
    target.scrollIntoView({ behavior: "smooth" });
  }
}
