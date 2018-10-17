import {Component, Input, OnInit} from '@angular/core';
import {ToastComponent} from "../toast/toast.component";
import {AngularFireStorage, AngularFireUploadTask} from 'angularfire2/storage';
import {AngularFirestore} from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-article-skeleton',
  templateUrl: './article-skeleton.component.html',
  styleUrls: ['./article-skeleton.component.css']
})
export class ArticleSkeletonComponent implements OnInit {

  @Input() imageURL: string;  //'../../assets/images/posts/1.jpg'
  @Input() articleName: string;
  @Input() articleDate: string;
  @Input() articleDescription: string;
  @Input() disableInputFields: boolean;
  @Input() spinner_inputValue: number;
  @Input() spinner_minValue: number;
  @Input() spinner_maxValue: number;

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  isHovering: boolean;
  fileName: string;
  image: any;

  constructor(private storage: AngularFireStorage, private fireStore: AngularFirestore) {
  }

  ngOnInit() {
  }

  chooseImageFile(event) {
    if (event.target.files.item(0).type.split('/')[0] === 'image') {
      var file = event.target.files[0];
      var reader = new FileReader();
      reader.onload = (event) => {
        this.imageURL = event.target.result;
      };
      reader.readAsDataURL(file);

      this.startUpload(event.target.files);
    } else {
      console.error('unsupported file type :( ');
    }
  }

  dropImage(event) {
    if (event.files.item(0).type.split('/')[0] === 'image') {
      var file = event.files[0];
      var reader = new FileReader();
      reader.onload = (event) => {
        this.imageURL = event.target.result;
      };
      reader.readAsDataURL(file);

      this.startUpload(event.files);
    } else {
      console.error('unsupported file type :( ');
    }
  }

  toggleHover(event) {
    this.isHovering = event;
  }

  removeImage() {
    this.imageURL = undefined;
    this.percentage = undefined;
    this.snapshot = undefined;
  }

  startUpload(event: FileList) {
    const file = event.item(0)
    this.fileName = file.name;

    const path = `images/${file.name}`;
    const customMetadata = {app: 'LAKSHITHA MADUSHAN'};
    this.task = this.storage.ref('').child('images/' + file.name).put(file, {customMetadata});
    this.percentage = this.task.percentageChanges();

    this.snapshot = this.task.snapshotChanges().pipe(
      tap(snap => {
        if (snap.bytesTransferred === snap.totalBytes) {
          ToastComponent.toastMessage = "Successfully Uploaded !";
          ToastComponent.toast = true;
          ToastComponent.on_off_btn = false;

          console.log("Successfully Uploaded !");
        }
      })
    );
  }

  clickPushButton() {
    // console.log(this.articleName);
    // console.log(this.articleDate);
    // console.log(this.articleDescription);

    ToastComponent.toastMessage = "Successfully Uploaded !";
    ToastComponent.toast = true;
    ToastComponent.on_off_btn = true;

    ToastComponent.reset();
    ToastComponent.btnResponse.subscribe({
      next: (res) => {
        if (res == 'Yes') {
          console.log("Yes Clicked!");
        }
        if (res == 'No') {
          console.log("No Clicked!");
        }
        if (res == 'Ok') {
          console.log("Ok Clicked!");
        }
      },
      error: (err) => console.log('observerB: ' + err),
    });

  }

}
