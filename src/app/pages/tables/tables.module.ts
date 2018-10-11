import { NgModule } from '@angular/core';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { SmartTableService } from '../../@core/data/smart-table.service';
import { ButtonRenderComponent } from './channels/button.render.component';
import { ThingsStore } from '../../@core/store/things.store';
import { ChannelsStore } from '../../@core/store/channels.store';
import { UiStore } from '../../@core/store/ui.store';
import { ThingsService } from '../../@core/services/things/things.service';
import { ChannelsService } from '../../@core/services/channels/channels.service';


@NgModule({
  imports: [
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
  ],
  declarations: [
    ...routedComponents,
    ButtonRenderComponent,
  ],
  entryComponents: [
    ButtonRenderComponent,
  ],
  providers: [
    SmartTableService,
    ThingsStore,
    ChannelsStore,
    UiStore,
    ThingsService,
    ChannelsService,

  ],
})
export class TablesModule { }
