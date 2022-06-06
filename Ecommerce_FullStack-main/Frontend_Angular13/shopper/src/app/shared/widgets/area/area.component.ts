import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {
  chartOptions: any;
  @Input() data: any = [];
  
  Highcharts = Highcharts;
  constructor() { }


  ngOnInit(): void {
    this.chartOptions = {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Shopper Yearly Income'
      },
      subtitle: {
          text: 'Demo'
      },
      // xAxis: {
      //     categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
      //     tickmarkPlacement: 'on',
      //     title: {
      //         enabled: false
      //     }
      // },
      // yAxis: {
      //     title: {
      //         text: 'Billions'
      //     },
      //     labels: {
              
      //     }
      // },
      tooltip: {
          split: true,
          valueSuffix: ' millions'
      },
      credits:{
        enabled:false
      },
      exporting:{
        enabled:true
      },
      // plotOptions: {
      //     area: {
      //         stacking: 'normal',
      //         lineColor: '#666666',
      //         lineWidth: 1,
      //         marker: {
      //             lineWidth: 1,
      //             lineColor: '#666666'
      //         }
      //     }
      // },
      series: [{
          name: '2017',
          data: [502, 635, 809, 947, 1402, 3634, 5268]
      }, {
          name: '2018',
          data: [106, 107, 111, 133, 221, 767, 1766]
      }, {
          name: '2019',
          data: [163, 203, 276, 408, 547, 729, 628]
      }, {
          name: '2020',
          data: [18, 31, 54, 156, 339, 818, 1201]
      }, {
          name: '2021',
          data: [2, 2, 2, 6, 13, 30, 46]
      }]
  };
  HC_exporting(Highcharts);
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 900);

  }

}
