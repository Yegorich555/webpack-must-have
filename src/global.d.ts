/** Global constant used to DEBUG (webpack sets `true` for prod-build) */
declare const DEV: boolean;

/** Global page interface used on API side  */
interface IPage {
  /** Current page number */
  current: number;
  /** Total items count */
  total: number;
  /** Page size, 12 for 12 items per page */
  size: number;
}

/** Enum with Sorting Asc/Desc */
declare const enum SortOrders {
  asc = 1,
  desc = 2,
}
