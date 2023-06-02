export interface IListContent {
  content?: {
    id?: number;
    year?: number;
    title?: string;
    studios?: [];
    producers?: [];
    winner?: boolean;
  }
}

export interface IListMovies {
  content?: Array<{
    id?: number;
    year?: number;
    title?: string;
    studios?: [];
    producers?: [];
    winner?: boolean;
  }>;
  pageable?: {
    sort?: {
      sorted?: boolean;
      unsorted?: boolean;
    };
    pageSize?: number;
    pageNumber?: number;
    offset?: number;
    paged?: boolean;
    unpaged?: boolean;
  };
  totalPages?: number;
  totalElements?: number;
  last?: boolean;
  size?: number;
  number?: number;
  sort?: {
    sorted?: boolean;
    unsorted?: boolean;
  };
  first?: boolean;
  numberOfElements?: number;
  empty?: boolean;
}
