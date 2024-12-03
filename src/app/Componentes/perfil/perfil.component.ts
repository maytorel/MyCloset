import { Component, AfterViewInit, ElementRef, Renderer2 } from '@angular/core';


declare const M: any; // MaterializeCSS global object


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements AfterViewInit {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}


  ngAfterViewInit(): void {
    // Initialize chips-placeholder
    const chipsPlaceholderElems = this.elRef.nativeElement.querySelectorAll('.chips-placeholder');
    M.Chips.init(chipsPlaceholderElems, {
      placeholder: 'Enter a tag',
      secondaryPlaceholder: '+Tag',
      onChipAdd: () => this.applyStyles(), // Reapply styles when a chip is added
      onChipDelete: () => this.applyStyles(), // Reapply styles when a chip is deleted
    });


    // Initialize chips-initial
    const chipsInitialElems = this.elRef.nativeElement.querySelectorAll('.chips-initial');
    M.Chips.init(chipsInitialElems, {
      data: [
        { tag: 'Vintage' },
        { tag: 'Formal' },
        { tag: 'Casual' },
      ],
      onChipAdd: () => this.applyStyles(), // Reapply styles when a chip is added
      onChipDelete: () => this.applyStyles(), // Reapply styles when a chip is deleted
    });


    // Initial style application
    this.applyStyles();
  }


  private applyStyles(): void {
    // Apply pink class to chips-placeholder and chips-initial containers
    const chipsPlaceholderElems = this.elRef.nativeElement.querySelectorAll('.chips-placeholder');
    const chipsInitialElems = this.elRef.nativeElement.querySelectorAll('.chips-initial');


    chipsPlaceholderElems.forEach((elem: HTMLElement) => {
      this.renderer.addClass(elem, 'white');
    });


    chipsInitialElems.forEach((elem: HTMLElement) => {
      this.renderer.addClass(elem, 'white');
    });


    // Apply custom color to individual chips
    const chips = this.elRef.nativeElement.querySelectorAll('.chip');
    chips.forEach((chip: HTMLElement) => {
      this.renderer.setStyle(chip, 'background-color', '#e58ea8'); // Custom color
      this.renderer.setStyle(chip, 'color', '#ffffff'); // Ensure text contrast
    });
  }
}
