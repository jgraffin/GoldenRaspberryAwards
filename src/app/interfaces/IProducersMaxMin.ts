export interface IProducersMaxMin {
  min?: [
    {
      producer: string;
      interval: number;
      previousWin: number;
      followingWin: number;
    }
  ],
  max?: [
    {
      producer: string;
      interval: number;
      previousWin: number;
      followingWin: number;
    }
  ]
}
