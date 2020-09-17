import { Component, ChangeDetectionStrategy, Attribute } from '@angular/core';

@Component({
  selector: 'dg-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SectionHeaderComponent {
  constructor(@Attribute('text') public text: string) {}
}
