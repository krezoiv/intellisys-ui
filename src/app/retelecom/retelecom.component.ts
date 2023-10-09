import { Component,ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-retelecom',
  templateUrl: './retelecom.component.html',
  styleUrls: ['./retelecom.component.css']
})
export class RetelecomComponent {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  toggleDropdown(event: Event) {
    event.preventDefault();
    const dropdownMenu = this.elRef.nativeElement.querySelector('.dropdown-menu');
    if (dropdownMenu) {
      if (dropdownMenu.style.display === 'block') {
        this.renderer.setStyle(dropdownMenu, 'display', 'none');
      } else {
        this.renderer.setStyle(dropdownMenu, 'display', 'block');
      }
    }
  }

}
