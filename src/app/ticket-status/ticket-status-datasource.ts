import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TicketStatusItem {
  name: string;
  id: number;
  tktId: string;
  issueDesc: string;
  companyStatus: string;
  status: string;
  contact: string;
  estimatedDate: Date;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TicketStatusItem[] = [
  { id: 1, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Hydrogen' },
  { id: 2, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Helium' },
  { id: 3, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Lithium' },
  { id: 4, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Beryllium' },
  { id: 5, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Boron' },
  { id: 6, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Carbon' },
  { id: 7, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Nitrogen' },
  { id: 8, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Oxygen' },
  { id: 9, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Fluorine' },
  { id: 10, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Neon' },
  { id: 11, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Sodium' },
  { id: 12, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Magnesium' },
  { id: 13, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Aluminum' },
  { id: 14, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Silicon' },
  { id: 15, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Phosphorus' },
  { id: 16, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Sulfur' },
  { id: 17, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Chlorine' },
  { id: 18, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Argon' },
  { id: 19, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Potassium' },
  { id: 20, tktId: "87", issueDesc: "lorem ipsum", companyStatus: "Hardware", contact: "john smith", status: "new", estimatedDate: new Date(), name: 'Calcium' },
];

/**
 * Data source for the TicketStatus view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TicketStatusDataSource extends DataSource<TicketStatusItem> {
  data: TicketStatusItem[] = EXAMPLE_DATA;

  constructor(private paginator: MatPaginator, private sort: MatSort) {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TicketStatusItem[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    const dataMutations = [
      observableOf(this.data),
      this.paginator.page,
      this.sort.sortChange
    ];

    // Set the paginator's length
    this.paginator.length = this.data.length;

    return merge(...dataMutations).pipe(map(() => {
      return this.getPagedData(this.getSortedData([...this.data]));
    }));
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() { }

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TicketStatusItem[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TicketStatusItem[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
