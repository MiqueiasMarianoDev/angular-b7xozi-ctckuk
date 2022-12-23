import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  link: string;
}

/** Constants used to fill up our data base. */
const LINKS: string[] = [
  'https://www.linkedin.com/in/amanda-costa-santos-1727a4217?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADbBieYBdTGqygo_syi_rqpqgLBh0gdAacE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3Bt8WB%2FgyTRniyu8e%2FSqRA1A%3D%3D',
  'https://www.linkedin.com/in/beatriz-faria-42b216177?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACnbQ-MByM6Os-RB2lvtgRoEDyWHCF96yT4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3Bt8WB%2FgyTRniyu8e%2FSqRA1A%3D%3D',
  'https://www.linkedin.com/in/beatriz-faria-42b216177?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACnbQ-MByM6Os-RB2lvtgRoEDyWHCF96yT4&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3Bt8WB%2FgyTRniyu8e%2FSqRA1A%3D%3D',
  'https://www.linkedin.com/in/jgimenez1?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACcO_g8BEfKInCGV03kDgQxGdKYIbh2zxW8&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3Bt8WB%2FgyTRniyu8e%2FSqRA1A%3D%3D',
  'https://www.linkedin.com/in/va-almeida?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAAAbsewMBedyub4BI69MZwB-hpa_rBJpWb-w&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3Bt8WB%2FgyTRniyu8e%2FSqRA1A%3D%3D',
  'https://www.linkedin.com/in/yasmin-sampaio?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAADCoUpMB5wJ9EDXD9kgUfLDV73tE-6rh1Ko&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3Bt8WB%2FgyTRniyu8e%2FSqRA1A%3D%3D',
  'https://www.linkedin.com/in/thamiris-oliveira-20ba6687?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAABJ896sB79-3lZY9Vn60UUUZAB5K9fR0_JY&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3Bx%2BR4jVoyRnmqnoqQu%2FWNJg%3D%3D',
  'https://www.linkedin.com/in/alexia-st%C3%A1vale-0abb02156?miniProfileUrn=urn%3Ali%3Afs_miniProfile%3AACoAACWJ8gMB6e34cKVj19LxnPyE4oAmsxVGVLE&lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_people_load_more%3Bx%2BR4jVoyRnmqnoqQu%2FWNJg%3D%3D',
];


/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  selector: 'table-overview-example',
  styleUrls: ['table-overview-example.css'],
  templateUrl: 'table-overview-example.html',
})
export class TableOverviewExample implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'link'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {


    const link = LINKS[Math.round(Math.random() * (LINKS.length - 1))];

    const name = link.split("?", 1)[0].substring(28);

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    link: link,
  };
}

/**  Copyright 2022 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
