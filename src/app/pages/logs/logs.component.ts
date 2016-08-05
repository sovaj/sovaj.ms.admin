import {Component} from '@angular/core';
import {DatePipe} from "@angular/common";
import {DataTable} from '../../theme/directives';


@Component({
    selector: 'logs',
    styles: [require('./logs.scss')],
    template: require('./logs.html'),
    directives: [DataTable],
    pipes: [DatePipe]
})
export class Logs {

    private data;
    public activePage:number = 1;
    public rowsOnPage:number = 5;
    public dataLength:number = 0;
    public lastPage:number = 10;
    public rowsOnPageSet = [5, 10, 20, 100, 200];

    private sortByWordLength = (a:any) => {
        return a.name.length;
    }

    public removeItem(item: any) {
      this.data = _.filter(this.data, (elem)=>elem!=item);
    }

    public setPage(pageNumber:number):void {
        this.activePage = pageNumber;
    }

    public setRowsOnPage(rowsOnPage:number):void {
        this.rowsOnPage = rowsOnPage;
    }

    constructor() {
        this.data = [
            {
              "name": "Wing",
              "email": "tellus.eu.augue@arcu.com",
              "regDate": "2016-01-09T14:48:34-08:00",
              "city": "Paglieta",
              "age": 25
            },
            {
              "name": "Whitney",
              "email": "sed.dictum@Donec.org",
              "regDate": "2017-01-23T20:09:52-08:00",
              "city": "Bear",
              "age": 32
            },
            {
              "name": "Oliver",
              "email": "mauris@Craslorem.ca",
              "regDate": "2015-11-19T19:11:33-08:00",
              "city": "Bruderheim",
              "age": 31
            },
            {
              "name": "Vladimir",
              "email": "mi.Aliquam@Phasellus.net",
              "regDate": "2015-11-02T07:59:34-08:00",
              "city": "Andenne",
              "age": 50
            },
            {
              "name": "Maggy",
              "email": "ligula@acorciUt.edu",
              "regDate": "2017-02-25T15:42:17-08:00",
              "city": "HomprŽ",
              "age": 24
            },
            {
              "name": "Unity",
              "email": "Nunc.commodo@justo.org",
              "regDate": "2016-03-07T03:47:55-08:00",
              "city": "Ried im Innkreis",
              "age": 23
            },
            {
              "name": "Ralph",
              "email": "augue@penatibuset.net",
              "regDate": "2017-02-27T20:03:50-08:00",
              "city": "Cwmbran",
              "age": 45
            },
            {
              "name": "Medge",
              "email": "sagittis.augue@taciti.edu",
              "regDate": "2016-03-02T03:59:17-08:00",
              "city": "Maranguape",
              "age": 21
            },
            {
              "name": "Orli",
              "email": "nascetur@mipedenonummy.edu",
              "regDate": "2016-11-07T20:48:43-08:00",
              "city": "Gibbons",
              "age": 38
            },
            {
              "name": "Ainsley",
              "email": "morbi.tristique.senectus@enim.ca",
              "regDate": "2016-02-11T22:14:36-08:00",
              "city": "Guardia Perticara",
              "age": 43
            },
            {
              "name": "Candice",
              "email": "turpis.non.enim@fringillami.com",
              "regDate": "2015-04-23T12:29:39-07:00",
              "city": "Aylmer",
              "age": 25
            },
            {
              "name": "Alexis",
              "email": "lacinia.orci.consectetuer@dolorFuscefeugiat.ca",
              "regDate": "2016-08-18T12:06:56-07:00",
              "city": "Halkirk",
              "age": 35
            },
            {
              "name": "Diana",
              "email": "pede.Cras@a.edu",
              "regDate": "2016-12-24T00:53:04-08:00",
              "city": "Palermo",
              "age": 31
            },
            {
              "name": "Tyrone",
              "email": "ornare.In@duilectus.co.uk",
              "regDate": "2015-03-31T11:45:57-07:00",
              "city": "Bellevue",
              "age": 36
            },
            {
              "name": "Brennan",
              "email": "scelerisque.lorem@enim.net",
              "regDate": "2016-09-07T16:12:31-07:00",
              "city": "Oxford County",
              "age": 38
            },
            {
              "name": "Lillith",
              "email": "non@lectus.edu",
              "regDate": "2016-08-01T12:45:06-07:00",
              "city": "Lillois-WitterzŽe",
              "age": 25
            },
            {
              "name": "Wayne",
              "email": "at.egestas.a@Pellentesque.edu",
              "regDate": "2016-02-23T10:20:18-08:00",
              "city": "Baie-Saint-Paul",
              "age": 32
            },
            {
              "name": "Vielka",
              "email": "Nam.porttitor@Uttincidunt.ca",
              "regDate": "2016-07-18T19:26:59-07:00",
              "city": "Rodgau",
              "age": 21
            },
            {
              "name": "Armando",
              "email": "Aliquam@orciin.net",
              "regDate": "2016-12-07T17:31:26-08:00",
              "city": "Khanewal",
              "age": 30
            },
            {
              "name": "Justin",
              "email": "gravida.non.sollicitudin@placerataugue.edu",
              "regDate": "2016-09-23T20:17:41-07:00",
              "city": "İslahiye",
              "age": 20
            },
            {
              "name": "Zorita",
              "email": "enim@risus.org",
              "regDate": "2015-06-14T12:12:00-07:00",
              "city": "Burdinne",
              "age": 20
            },
            {
              "name": "Mariam",
              "email": "purus.mauris.a@odiosagittis.ca",
              "regDate": "2016-10-14T18:52:48-07:00",
              "city": "Bharatpur",
              "age": 22
            },
            {
              "name": "Malik",
              "email": "Nam@enimEtiam.org",
              "regDate": "2016-09-20T18:06:55-07:00",
              "city": "Neerheylissem",
              "age": 28
            }
          ];
    }

}