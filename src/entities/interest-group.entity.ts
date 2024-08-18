import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class InterestGroup {
  @PrimaryColumn()
  uuid_interestGroup: string;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  uuid_domain: string;

  @Column()
  domains: string;

  @Column()
  url: string;
}
