import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { LocalDataSource } from 'ng2-smart-table';
import { Thing } from '../../../@core/store/models';

import { ThingsStore } from '../../../@core/store/things.store';
import { ChannelsStore } from '../../../@core/store/channels.store';

import { ThingsService } from '../../../@core/services/things/things.service';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './things.component.html',
  styles: [`
    nb-card {
      transform: translate3d(0, 0, 0);
    }
  `],
})
export class ThingsComponent {


  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      deviceName: {
        title: 'Device Name',
        type: 'string',
      },
      listChannels: {
        title: 'Metadata',
        type: 'string',
      }
    },
  };

  source: LocalDataSource = new LocalDataSource();
  things: Observable<Thing[]>;


  constructor(
    private service: ThingsService,
    public thingsStore: ThingsStore,
    public channelsStore: ChannelsStore,
  ) {

  }

  ngOnInit() {
    const data = this.thingsStore.getThings();
    //this.source.load(data);
    this.thingsStore.getThings();
    this.channelsStore.getChannels();
  }

  onCreateConfirm(event): void {
      console.log("Test on add ");
      console.log(event.newData);
      event.confirm.resolve();
      this.thingsStore.addThing(event);
    }
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
