import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{
    title: string = "Students Details";
    fruits:any=[];
    students: Student[] = [
        {Name:'MD Rasel',Class:'Five',Roll:10,Subject:'Science'},
        {Name:'Atik Ullah',Class:'Eight',Roll:25,Subject:'Commerce'},
        {Name:'MD Mohin',Class:'Nine',Roll:30,Subject:'Arts'},
        {Name:'Nuhin',Class:'Four',Roll:20,Subject:'Commerce'},
    ]
    ngOnInit(){

    }
    addfruits_item(){
        this.fruits.push("item-"+ this.fruits.length);
    }

    
}
 
class Student {
    Name: string;
    Class: string;
    Roll: number;
    Subject: string;

}