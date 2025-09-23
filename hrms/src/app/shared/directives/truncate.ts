import { AfterViewInit, Directive, ElementRef, inject, InjectionToken, Input } from '@angular/core';

export const TruncateLimit = new InjectionToken<number>('TruncateLimit')

@Directive({
  selector: '[appTruncate]'
})
export class Truncate implements AfterViewInit {
  
  @Input() limit = inject(TruncateLimit, {optional: true} ) || 80;
  private readonly elRef = inject(ElementRef);
  
  ngAfterViewInit(): void {
    this.elRef.nativeElement.textContent = this.elRef.nativeElement.textContent.slice(0, this.limit)
  }
  


}
