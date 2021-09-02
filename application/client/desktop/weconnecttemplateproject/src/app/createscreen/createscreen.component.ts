import { Component, OnInit } from '@angular/core';
import { CreatescreenService } from './createscreen.service';

@Component({
  selector: 'app-createscreen',
  templateUrl: './createscreen.component.html',
  styleUrls: ['./createscreen.component.scss'],
})

export class CreatescreenComponent implements OnInit {
    public temp = {
        Name: '',
        Email: '',
    }

    constructor (
        private createscreenService: CreatescreenService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.createscreenService.GpCreate(this.temp).subscribe(data => {
            this.temp.Name = ''
 	 	this.temp.Email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}