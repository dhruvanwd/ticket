import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { TicketStatusDataSource } from './ticket-status-datasource';

@Component({
  selector: 'app-ticket-status',
  templateUrl: './ticket-status.component.html',
  styleUrls: ['./ticket-status.component.css']
})
export class TicketStatusComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: TicketStatusDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'company', 'tktId', 'issue', 'compnyStatus', 'status', 'contact-person', 'estimatedDate'];

  ngAfterViewInit() {
    setTimeout(() => {
      this.dataSource = new TicketStatusDataSource(this.paginator, this.sort);
    }, 100);
  }
}
