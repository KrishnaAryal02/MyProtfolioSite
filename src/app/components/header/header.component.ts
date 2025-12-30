import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
isMenuOpen = false;
  isMobileView = false;

  // Close menu when clicking on a nav item
  closeMenu() {
    this.isMenuOpen = false;
  }

  // Toggle menu state
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Check screen size on resize
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkViewport();
    if (!this.isMobileView && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  ngOnInit() {
    this.checkViewport();
  }

  private checkViewport() {
    this.isMobileView = window.innerWidth <= 768;
  }
}
