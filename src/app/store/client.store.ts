import { Injectable } from "@angular/core";
import { observable, action } from "mobx-angular";
import { DataService } from "../services/data.service";
import { ClientKey } from "../interface/client";

@Injectable()
export class Client {
  @observable public data;
  @observable loading = false;
  @observable client=null;

  constructor(private ds: DataService) {}

  @action
  fetchClient(key){
    this.ds.registerRef().doc(key).valueChanges().subscribe(doc=>{
      console.log(doc);
      this.client=doc;
    })
  }

  @action
  fetchData(callback) {
    this.loading = true;
    this.ds
      .registerRef()
      .valueChanges()
      .subscribe(docs => {
        this.loading = false;
        this.data = docs;
        callback(docs);
      });
  }
  @action
  addData(item: ClientKey, callback) {
    this.loading = true;
    this.ds
      .registerRef()
      .doc(item.key)
      .set(item)
      .then(() => {
        this.loading = false;
        callback(true, null);
      })
      .catch(error => {
        callback(false, error);
      });
  }
  @action
  editData(item: ClientKey, callback) {
    this.loading = true;
    this.ds
      .registerRef()
      .doc(item.key)
      .update(item)
      .then(() => {
        this.loading = false;
        callback(true, null);
      })
      .catch(error => {
        callback(false, error);
      });
  }
  @action
  deleteData(item: ClientKey, callback) {
    this.loading = true;
    this.ds
      .registerRef()
      .doc(item.key)
      .delete()
      .then(() => {
        this.loading = false;
        callback(true, null);
      })
      .catch(error => {
        callback(false, error);
      });
  }
}
