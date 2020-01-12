import Controller from '@ember/controller';
import { action } from '@ember/object';
export default class HomeController extends Controller {
  WebsiteRowList = [{}];

  @action
  handleRowAddition() {
    this.WebsiteRowList.addObject({});
  }

  @action
  handleRowDeletion(position) {
    let WebsiteRowObj = this.WebsiteRowList.objectAt(position);
    this.WebsiteRowList.removeObject(WebsiteRowObj);
  }

  @action
  addRecord() {
    chrome.storage.local.set({"webList": this.WebsiteRowList}, function() {
      console.log('Value is set ');
    });
  }

}
