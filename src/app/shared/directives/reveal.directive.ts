import { Directive, ElementRef, OnDestroy, OnInit, inject, input } from '@angular/core';

/**
 * Adds the `nx-reveal` base class plus a per-item transition delay, then
 * toggles `is-visible` once the host scrolls into view. Kept dependency-free
 * (native IntersectionObserver) so it works the same for LTR and RTL.
 */
@Directive({
  selector: '[nxReveal]',
  standalone: true,
})
export class RevealDirective implements OnInit, OnDestroy {
  // Accepts a bare attribute (`nxReveal`), a static string (`nxReveal="2"`)
  // or a bound number (`[nxReveal]="i"`) — all coerced to a stagger index.
  readonly nxReveal = input<number | string>(0);

  private readonly host = inject(ElementRef<HTMLElement>);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const el = this.host.nativeElement;
    const delayIndex = Number(this.nxReveal()) || 0;
    el.classList.add('nx-reveal');
    el.style.animationDelay = `${Math.min(delayIndex, 8) * 80}ms`;

    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-visible');
      return;
    }

    // A fixed percentage threshold (the old 0.15) breaks down for elements
    // taller than the viewport — e.g. a multi-section form — since that much
    // of it may never be visible at once, leaving it permanently at
    // opacity: 0. Trigger on the first visible pixel instead; still reads as
    // a reveal for normal-sized items, and can no longer strand tall ones.
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            this.observer?.unobserve(el);
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -10px 0px' },
    );
    this.observer.observe(el);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
