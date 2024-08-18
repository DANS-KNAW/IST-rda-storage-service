import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class ResourceGORCAttribute {
  @PrimaryColumn()
  uuid_resource: string;

  @Column()
  resource: string;

  @PrimaryColumn()
  uuid_Attribute: string;

  @Column()
  attribute: string;
}
