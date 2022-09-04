import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

const AVERAGE_CHAR_WIDTH = 8.5;
const SHOW_CHARS = 5;
const FAKE_EMAIL = 'email@example.com';
const FAKE_PHONE = '+111 (11) 111-11-11';

@Component({
  selector: 'dg-cv-header',
  templateUrl: './cv-header.component.html',
  styleUrls: ['./cv-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CvHeaderComponent implements OnInit {
  public email = FAKE_EMAIL;
  public phoneWithMask = FAKE_PHONE;
  public phoneHref = '';
  public isEmailShown = false;
  public isPhoneShown = false;
  public leftShift = 0;

  private realEmail = 'dmitry@example.com';
  private realphone = '+222 (22) 222-22-22';

  public ngOnInit(): void {
    this.leftShift = this.getLeftShift();
  }

  public showEmail(event: MouseEvent): void {
    if (this.isEmailShown) {
      return;
    }

    event.preventDefault();
    this.isEmailShown = true;
    this.email = this.realEmail;
  }

  public showPhone(event: MouseEvent): void {
    if (this.isPhoneShown) {
      return;
    }

    event.preventDefault();
    this.isPhoneShown = true;
    this.phoneWithMask = this.realphone;
    this.phoneHref = 'tel:+' + this.realphone.replace(/\D/g, '');
  }

  private getLeftShift(): number {
    return AVERAGE_CHAR_WIDTH * SHOW_CHARS;
  }
}
