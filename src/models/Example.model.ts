export enum ExampleStatusEnum {
  ACTIVE = 'ACTIVE',
  SCHEDULE = 'SCHEDULE',
  EXPIRED = 'EXPIRED',
  PAUSED = 'PAUSED'
}

// export type TExampleStatusEnum = 'ACTIVE' | 'SCHEDULE' | 'EXPIRED' | 'PAUSED'

export interface IExample {
  id?: string
  text?: string
  href?: string
  status?: ExampleStatusEnum
}
