import { NgModule } from '@angular/core';
import { HomePage} from './home';
import { IonicPageModule } from 'ionic-angular';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
@NgModule({
  declarations: [HomePage],
  imports: [IonicPageModule.forChild(HomePage)],
  providers:[LaunchNavigator],
  entryComponents: [HomePage]
})
export class HomePageModule { }
