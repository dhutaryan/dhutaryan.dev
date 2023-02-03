export interface Experience {
  readonly companyName: string;
  readonly role: string;
  readonly from: string;
  readonly to: string;
  readonly responsibilities: string[];
  readonly accomplishments?: string[];
  readonly order: number;
}
