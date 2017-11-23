import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  Recipe = [{name:'server', description:'TestServer', imagePath:'Just a test!'}];
  loadedFeature = 'recipe';

  onNavigate(feature:string){
      this.loadedFeature = feature;
  }
}
