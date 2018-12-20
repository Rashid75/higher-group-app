import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController, public loading: LoadingController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    const loader = this.loading.create({
      content: "Loading...",
      duration: 3000
    });
    loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.navCtrl.setRoot('HomePage')
    }, 2000);
  }

}
