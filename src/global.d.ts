/** Global constant used to DEBUG (webpack sets `true` for prod-build) */
declare const DEV: boolean;

/** Global page interface used on API side  */
interface IPage {
  /** Current page number */
  current: Number;
  /** Total items count */
  total: Number;
  /** Page size, 12 for 12 items per page */
  size: Number;
}

/** Enum with Sorting Asc/Desc */
declare const enum SortOrders {
  asc = 1,
  desc = 2,
}
