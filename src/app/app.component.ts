import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog';


  postlistcomponents = [
    {
      title: 'Mon premier post',
      content: 'Cum haec taliaque sollicitas eius aures everberarent expositas semper eius modi rumoribus et patentes, varia animo tum miscente consilia,',
      loveIts: 0,
      created_at: Date
    },
    {
      title: 'Mon deuxième post',
      content: 'Cum haec taliaque sollicitas eius aures everberarent expositas semper eius modi rumoribus et patentes, varia animo tum miscente consilia,',
      loveIts: 0,
      created_at: Date
    },
    {
      title: 'Mon troisième post',
      content: 'Cum haec taliaque sollicitas eius aures everberarent expositas semper eius modi rumoribus et patentes, varia animo tum miscente consilia,',
      loveIts: 0,
      created_at: Date
    }
  ];

}
