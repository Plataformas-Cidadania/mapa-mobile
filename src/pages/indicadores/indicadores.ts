import { Component, ViewChild } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-indicadores',
  templateUrl: 'indicadores.html',
})
export class IndicadoresPage {

  @ViewChild('grafico1') divgrafico1;
  @ViewChild('grafico2') divgrafico2;
  @ViewChild('grafico3') divgrafico3;
  @ViewChild('grafico4') divgrafico4;
  @ViewChild('grafico5') divgrafico5;
  @ViewChild('grafico6') divgrafico6;
  @ViewChild('grafico7') divgrafico7;
  @ViewChild('grafico8') divgrafico8;
  @ViewChild('grafico9') divgrafico9;
  @ViewChild('grafico10') divgrafico10;
  @ViewChild('grafico11') divgrafico11;
  @ViewChild('grafico12') divgrafico12;
  @ViewChild('grafico13') divgrafico13;

  grafico1: any;
  grafico2: any;
  grafico3: any;
  grafico4: any;
  grafico5: any;
  grafico6: any;
  grafico7: any;
  grafico8: any;
  grafico9: any;
  grafico10: any;
  grafico11: any;
  grafico12: any;
  grafico13: any;

  info_font: any = [];

  constructor(public navParams: NavParams, private alertCtrl: AlertController) {
    this.info_font = [
      {title: "Fonte: Ministério do Trabalho (2014)."},
      {title: "Fonte: Ministério do Trabalho (2014)."},
      {title: "Fonte: Ministério do Trabalho (2014)."},
      {title: "Fonte: Ministério do Trabalho (2014), Ministério do Esporte (2016), Ministério da Cultura (2016), Ministério da Ciência (2016), Ministério da Fazenda (2016), Ministério do Planejamento (2016). A série histórica inclui os dados do SIAFI a partir de 2011. Os dados do Ministério da Fazenda cobrem 2011-2017; do MPOG, 2009-2017; do MinC, 1992-2012; do Ministério do Esporte, 2007-2016; do MCTI, 2009-2016."},
      {title: "Fonte: Ministério do Trabalho (2014), Ministério do Esporte (2016), Ministério da Cultura (2016), Ministério da Ciência (2016), Ministério da Fazenda (2016), Ministério do Planejamento (2016). A série histórica inclui os dados do SIAFI a partir de 2011. Os dados do Ministério da Fazenda cobrem 2011-2017; do MPOG, 2009-2017; do MinC, 1992-2012; do Ministério do Esporte, 2007-2016; do MCTI, 2009-2016."},
      {title: "Fonte: Ministério do Trabalho (2014), Ministério do Esporte (2016), Ministério da Cultura (2016), Ministério da Ciência (2016), Ministério da Fazenda (2016), Ministério do Planejamento (2016). Valores deflacionados pelo IPCA do mês corrente. Os valores exibidos referem-se aos valores efetivamente pagos para as organizações.A série histórica inclui os dados do SIAFI a partir de 2011. Os dados do Ministério da Fazenda cobrem 2011-2017; do MPOG, 2009-2017; do MinC, 1992-2012; do Ministério do Esporte, 2007-2016; do MCTI, 2009-2016."},
      {title: "Fonte: Ministério do Trabalho (2014), Ministério do Esporte (2016), Ministério da Cultura (2016), Ministério da Ciência (2016), Ministério da Fazenda (2016), Ministério do Planejamento (2016). A série histórica inclui os dados do SIAFI a partir de 2011. Os dados do Ministério da Fazenda cobrem 2011-2017; do MPOG, 2009-2017; do MinC, 1992-2012; do Ministério do Esporte, 2007-2016; do MCTI, 2009-2016."},
      {title: "Fonte: Ministério do Trabalho (2014), Ministério do Esporte (2016), Ministério da Cultura (2016), Ministério da Ciência (2016), Ministério da Fazenda (2016), Ministério do Planejamento (2016). Valores deflacionados pelo IPCA do mês corrente. Os valores exibidos referem-se aos valores efetivamente pagos para as organizações. A série histórica inclui os dados do SIAFI a partir de 2011. Os dados do Ministério da Fazenda cobrem 2011-2017; do MPOG, 2009-2017; do MinC, 1992-2012; do Ministério do Esporte, 2007-2016; do MCTI, 2009-2016."},
      {title: "Fonte: Ministério do Desenvolvimento Social (2013), Ministério do Trabalho (2014)."},
      {title: "Fonte: Ministério da Saúde (2016), Ministério do Trabalho (2014)."},
      {title: "Fonte: Ministério da Saúde (2016), Ministério do Trabalho (2014)."},
      {title: "Fonte: Ministério do Trabalho (2016), Ministério do Trabalho (2014)."},
      {title: "Fonte: Ministério do Trabalho (2016), Ministério do Trabalho (2014). "}
    ];
  }

  ionViewWillEnter() {
    this.getChart();
  }

  getChart() {

    this.grafico1 = new Chart(this.divgrafico1.nativeElement, {
        type: 'bar',
        data: {
            labels: ["Sudeste", "Sul", "Nordeste", "Centro-Oeste", "Norte"],
            datasets: [{
                label: ["0"],
                data: [127866, 73278, 75689, 17885, 15844],
                backgroundColor: 'rgba(31, 119, 180, 0.2)',
                borderColor: 'rgba(31, 119, 180, 1)',
                borderWidth: 1
            },
            {
                label: ["1 a 4"],
                data: [22644, 9100, 6798, 3943, 1943],
                backgroundColor: 'rgba(174, 199, 232, 0.2)',
                borderColor: 'rgba(174, 199, 232, 1)',
                borderWidth: 1
            },
            {
                label: ["5 a 19"],
                data: [11816, 4472, 2656, 1678, 821],
                backgroundColor: 'rgba(255, 127, 14, 0.2)',
                borderColor: 'rgba(255, 127, 14, 1)',
                borderWidth: 1
            },
            {
                label: ["20 a 99"],
                data: [6589, 2140, 1370, 749, 364],
                backgroundColor: 'rgba(255, 187, 120, 0.2)',
                borderColor: 'rgba(255, 187, 120, 1)',
                borderWidth: 1
            },
            {
                label: ["100 ou mais"],
                data: [2210, 661, 488, 241, 126],
                backgroundColor: 'rgba(44, 160, 44, 0.2)',
                borderColor: 'rgba(44, 160, 44, 1)',
                borderWidth: 1
            }
          ]
        }

    });

    this.grafico2 = new Chart(this.divgrafico2.nativeElement, {
      type: 'bar',
      data: {
          labels: ["Sudeste", "Sul", "Nordeste", "Centro-Oeste", "Norte"],
          datasets: [{
              data: [1347407, 403905, 310339, 157331, 67401],
              backgroundColor: [
                'rgba(31, 119, 180, 0.2)',
                'rgba(174, 199, 232, 0.2)',
                'rgba(255, 127, 14, 0.2)',
                'rgba(255, 187, 120, 0.2)',
                'rgba(44, 160, 44, 0.2)'
              ],
              borderColor: [
                'rgba(31, 119, 180, 1)',
                'rgba(174, 199, 232, 1)',
                'rgba(255, 127, 14, 1)',
                'rgba(255, 187, 120, 1)',
                'rgba(44, 160, 44, 1)'
              ],
              borderWidth: 1
          }
        ],
      },
      options: {
          legend: {
              display: false
          }
      }
    });

    this.grafico3 = new Chart(this.divgrafico3.nativeElement, {
      type: 'doughnut',
      data: {
          labels: ["Outras atividades de serviços", "Artes, cultura, esporte e recreação", "Saúde humana e serviços sociais", "Educação", "Outras"],
          datasets: [{
              data: [318663, 27842, 18774, 16682, 9410],
              backgroundColor: [
                'rgba(31, 119, 180, 0.6)',
                'rgba(174, 199, 232, 0.6)',
                'rgba(255, 127, 14, 0.6)',
                'rgba(255, 187, 120, 0.6)',
                'rgba(44, 160, 44, 0.6)'
              ],
              hoverBackgroundColor: [
                'rgba(31, 119, 180, 1)',
                'rgba(174, 199, 232, 1)',
                'rgba(255, 127, 14, 1)',
                'rgba(255, 187, 120, 1)',
                'rgba(44, 160, 44, 1)'
              ]
          }]
      }
    });

    this.grafico4 = new Chart(this.divgrafico4.nativeElement, {
      type: 'bar',
      data: {
          labels: ["Sudeste", "Nordeste", "Sul", "Centro-Oeste", "Norte"],
          datasets: [{
              data: [8628, 5038, 4414, 1430, 1253],
              backgroundColor: [
                'rgba(31, 119, 180, 0.2)',
                'rgba(174, 199, 232, 0.2)',
                'rgba(255, 127, 14, 0.2)',
                'rgba(255, 187, 120, 0.2)',
                'rgba(44, 160, 44, 0.2)'
              ],
              borderColor: [
                'rgba(31, 119, 180, 1)',
                'rgba(174, 199, 232, 1)',
                'rgba(255, 127, 14, 1)',
                'rgba(255, 187, 120, 1)',
                'rgba(44, 160, 44, 1)'
              ],
              borderWidth: 1
          }
        ],
      },
      options: {
          legend: {
              display: false
          }
      }
    });

    this.grafico5 = new Chart(this.divgrafico5.nativeElement, {
        type: 'line',
        data: {
          labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
          datasets: [
            {
              label: ["Contrato de repasse"],
              data: [{x : 2009, y : 142 }, {x : 2010, y : 195 }, {x : 2011, y : 86 },
              {x : 2012, y : 61 }, {x : 2013, y : 49 }, {x : 2014, y : 110 },
              {x : 2015, y : 61 }, {x : 2016, y : 119 },{x : 2017, y : 0 }],
              backgroundColor: 'rgba(31, 119, 180, 0.2)',
              borderColor: 'rgba(31, 119, 180, 1)',
              borderWidth: 1
          },
          {
              label: ["Convênio"],
              data: [{x : 2009, y : 944 }, {x : 2010, y : 4058 }, {x : 2011, y : 629 },
              {x : 2012, y : 511 }, {x : 2013, y : 511 }, {x : 2014, y : 719 },
               {x : 2015, y : 569 }, {x : 2016, y : 675 }, {x : 2017, y : 6 }],
              backgroundColor: 'rgba(174, 199, 232, 0.2)',
              borderColor: 'rgba(174, 199, 232, 1)',
              borderWidth: 1
          },
          {
              label: ["Financiamento - Finep"],
              data: [{x : 2009, "y" : 101 }, {x : 2010, y : 145 }, {x : 2011, y : 60 },
              {x : 2012, y : 115 }, {x : 2013, y : 96 }, {x : 2014, y : 69 },
               {x : 2015, y : 13 }, {x : 2016, y : 15 } , {x : 2017, y : 0 }],
              backgroundColor: 'rgba(255, 127, 14, 0.2)',
              borderColor: 'rgba(255, 127, 14, 1)',
              borderWidth: 1
          },
          {
              label: ["Incentivo à cultura"],
              data: [{x : 2009, y : 20 }, {x : 2010, y : 5 }, {x : 2011, y : 1 },
               {x : 2012, y : 0 }, {x : 2013, y : 0 }, {x : 2014, y : 0 },
               {x : 2015, y : 0 }, {x : 2016, y : 0 }, {x : 2017, y : 0 }],
              backgroundColor: 'rgba(255, 187, 120, 0.2)',
              borderColor: 'rgba(255, 187, 120, 1)',
              borderWidth: 1
          },
          {
              label: ["Incentivo ao esporte"],
              data: [{x : 2009, y : 133 }, {x : 2010, y : 221 }, {x : 2011, y : 288 },
               {x : 2012, y : 290 }, {x : 2013, y : 310 }, {x : 2014, y : 313 },
               {x : 2015, y : 290 }, {x : 2016, y : 23 }, {x : 2017, y : 0 }],
              backgroundColor: 'rgba(44, 160, 44, 0.2)',
              borderColor: 'rgba(44, 160, 44, 1)',
              borderWidth: 1
          },
          {
              label: ["Outras transferências voluntárias"],
              data: [{x : 2009, y : 0 }, {x : 2010, y : 0 }, {x : 2011, y : 15414 },
              {x : 2012, y : 15961 }, {x : 2013, y : 15979 }, {x : 2014, y : 16264 },
              {x : 2015, y : 14380 }, {x : 2016, y : 15725 }, {x : 2017, y : 1434 }],
              backgroundColor: 'rgba(152, 223, 138, 0.2)',
              borderColor: 'rgba(152, 223, 138, 1)',
              borderWidth: 1
          },
          {
              label: ["Termo de colaboração"],
              data: [{x : 2009, y : 0 }, {x : 2010, y : 0 }, {x : 2011, y : 0 },
              {x : 2012, y : 0 }, {x : 2013, y : 0}, {x : 2014, y : 0 },
              {x : 2015, y : 0 }, {x : 2016, y : 25 }, {x : 2017, y : 2 }],
              backgroundColor: 'rgba(214, 39, 40, 0.2)',
              borderColor: 'rgba(214, 39, 40, 1)',
              borderWidth: 1
          },
          {
              label: ["Termo de parceria"],
              data: [{x : 2009, y : 18 }, {x : 2010, y : 18 }, {x : 2011, y : 8 },
              {x : 2012, y : 11 }, {x : 2013, y : 6 }, {x : 2014, y : 3 },
              {x : 2015, y : 4 }, {x : 2016, y : 2 }, {x : 2017, y : 0 }],
              backgroundColor: 'rgba(255, 152, 150, 0.2)',
              borderColor: 'rgba(255, 152, 150, 1)',
              borderWidth: 1
          },
          {
              label: ["Termo de fomento"],
              data: [{x : 2009, y : 0 }, {x : 2010, y : 0 }, {x : 2011, y : 0 },
              {x : 2012, y : 0 }, {x : 2013, y : 0 }, {x : 2014, y : 0 },
              {x : 2015, y : 0 }, {x : 2016, y : 15 }, {x : 2017, y : 0 }],
              backgroundColor: 'rgba(148, 103, 189, 0.2)',
              borderColor: 'rgba(148, 103, 189, 1)',
              borderWidth: 1
          }
        ]
      },
      options: {
          elements: {
              line: {
                  tension: 0,
              }
          }
      }
    });

    this.grafico6 = new Chart(this.divgrafico6.nativeElement, {
        type: 'line',
        data: {
          labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
          datasets: [
            {
              label: ["Contrato de repasse"],
              data: [{"x" : 2009, "y" : 154995912.816056 }, {"x" : 2010, "y" : 139929679.132065 }, {"x" : 2011, "y" : 69329607.9688609 },
              {"x" : 2012, "y" : 146108290.397886 }, {"x" : 2013, "y" : 32259486.5490012 }, {"x" : 2014, "y" : 23060337.1983431 },
               {"x" : 2015, "y" : 3133311.25842172 }, {"x" : 2016, "y" : 167724.115191084 }, {"x" : 2017, "y" : 0 }],
              backgroundColor: 'rgba(31, 119, 180, 0.2)',
              borderColor: 'rgba(31, 119, 180, 1)',
              borderWidth: 1
          },
          {
              label: ["Convênio"],
              data: [{"x" : 2009, "y" : 1454038499.10232 }, {"x" : 2010, "y" : 1617670445.66519 }, {"x" : 2011, "y" :2498718069.2037 },
              {"x" : 2012, "y" : 1613629249.14887 }, {"x" : 2013, "y" : 3358510931.7825 }, {"x" : 2014, "y" : 1217055668.18036 },
               {"x" : 2015, "y" : 734545942.296774 }, {"x" : 2016, "y" : 194884004.201096 }, {"x" : 2017, "y" : 0 }],
              backgroundColor: 'rgba(174, 199, 232, 0.2)',
              borderColor: 'rgba(174, 199, 232, 1)',
              borderWidth: 1
          },
          {
              label: ["Financiamento - Finep"],
              data: [{"x" : 2009, "y" : 1003478983.36941 }, {"x" : 2010, "y" : 1347486287.83862 }, {"x" : 2011, "y" : 324859318.156408 },
              {"x" : 2012, "y" : 808098813.718983 }, {"x" : 2013, "y" : 551380305.962435 }, {"x" : 2014, "y" : 330703367.383072 },
               {"x" : 2015, "y" : 6499733.01026759 }, {"x" : 2016, "y" : 0 }, {"x" : 2017, "y" : 0 }],
              backgroundColor: 'rgba(255, 127, 14, 0.2)',
              borderColor: 'rgba(255, 127, 14, 1)',
              borderWidth: 1
          },
          {
              label: ["Incentivo à cultura"],
              data: [{"x" : 2009, "y" : 37806335.9859964 }, {"x" : 2010, "y" : 25253362.8916816 }, {"x" : 2011, "y" : 244534.876262271 },
               {"x" : 2012, "y" : 0 }, {"x" : 2013, "y" : 0 }, {"x" : 2014, "y" : 0 },
               {"x" : 2015, "y" : 0 }, {"x" : 2016, "y" : 0 }, {"x" : 2017, "y" : 0 }],
              backgroundColor: 'rgba(255, 187, 120, 0.2)',
              borderColor: 'rgba(255, 187, 120, 1)',
              borderWidth: 1
          },
          {
              label: ["Incentivo ao esporte"],
              data: [{"x" : 2009, "y" : 152077906.16727 }, {"x" : 2010, "y" : 251473321.714602 }, {"x" : 2011, "y" : 277277818.525661 },
               {"x" : 2012, "y" : 258801704.594315 }, {"x" : 2013, "y" : 268210167.569054 }, {"x" : 2014, "y" : 244349585.64495 },
               {"x" : 2015, "y" : 0 }, {"x" : 2016, "y" : 0 }, {"x" : 2017, "y" : 0 }],
              backgroundColor: 'rgba(44, 160, 44, 0.2)',
              borderColor: 'rgba(44, 160, 44, 1)',
              borderWidth: 1
          },
          {
              label: ["Outras transferências voluntárias"],
              data: [{"x" : 2009, "y" : 0 }, {"x" : 2010, "y" : 0 }, {"x" : 2011, "y" : 3681353556.70508 },
              {"x" : 2012, "y" : 4008367002.66929 }, {"x" : 2013, "y" : 3522671851.99341 }, {"x" : 2014, "y" : 4597453203.45959 },
              {"x" : 2015, "y" : 2589512146.26217 }, {"x" : 2016, "y" : 3334558409.02197 }, {"x" : 2017, "y" : 144648063.09 }],
              backgroundColor: 'rgba(152, 223, 138, 0.2)',
              borderColor: 'rgba(152, 223, 138, 1)',
              borderWidth: 1
          },
          {
              label: ["Termo de colaboração"],
              data: [{"x" : 2009, "y" : 0 }, {"x" : 2010, "y" : 0 }, {"x" : 2011, "y" : 0 },
              {"x" : 2012, "y" : 0 }, {"x" : 2013, "y" : 0}, {"x" : 2014, "y" : 0 },
              {"x" : 2015, "y" : 0 }, {"x" : 2016, "y" : 7267562.56947329 }, {"x" : 2017, "y" : 0 }],
              backgroundColor: 'rgba(214, 39, 40, 0.2)',
              borderColor: 'rgba(214, 39, 40, 1)',
              borderWidth: 1
          },
          {
              label: ["Termo de parceria"],
              data: [{"x" : 2009, "y" : 23387537.7594027 }, {"x" : 2010, "y" : 307943241.131192 }, {"x" : 2011, "y" : 45500720.7797221 },
              {"x" : 2012, "y" : 622545548.549492 }, {"x" : 2013, "y" : 1005207305.44486 }, {"x" : 2014, "y" : 170037205.746424 },
              {"x" : 2015, "y" : 142476044.409264 }, {"x" : 2016, "y" : 23201354.5390073 }, {"x" : 2017, "y" : 0 }],
              backgroundColor: 'rgba(255, 152, 150, 0.2)',
              borderColor: 'rgba(255, 152, 150, 1)',
              borderWidth: 1
          },
          {
              label: ["Termo de fomento"],
              data: [{"x" : 2009, "y" : 0 }, {"x" : 2010, "y" : 0 }, {"x" : 2011, "y" : 0 },
              {"x" : 2012, "y" : 0 }, {"x" : 2013, "y" : 0}, {"x" : 2014, "y" : 0 },
              {"x" : 2015, "y" : 0 }, {"x" : 2016, "y" : 9666833.76719038 }, {"x" : 2017, "y" : 0 }],
              backgroundColor: 'rgba(148, 103, 189, 0.2)',
              borderColor: 'rgba(148, 103, 189, 1)',
              borderWidth: 1
          }
        ]
      },
      options: {
          elements: {
              line: {
                  tension: 0,
              }
          }
      }
    });

    this.grafico7 = new Chart(this.divgrafico7.nativeElement, {
        type: 'line',
        data: {
          labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
          datasets: [
            {
              label: ["0"],
              data: [{"x" : 2009, "y" : 376 }, {"x" : 2010, "y" : 457 }, {"x" : 2011, "y" : 13100 },
              {"x" : 2012, "y" : 13619 }, {"x" : 2013, "y" : 13652 }, {"x" : 2014, "y" : 13863 },
               {"x" : 2015, "y" : 13296 }, {"x" : 2016, "y" : 13324 }, {"x" : 2017, "y" : 809 }],
              backgroundColor: 'rgba(31, 119, 180, 0.2)',
              borderColor: 'rgba(31, 119, 180, 1)',
              borderWidth: 1
          },
          {
              label: ["1 a 4"],
              data: [{"x" : 2009, "y" : 187 }, {"x" : 2010, "y" : 216 }, {"x" : 2011, "y" : 499 },
              {"x" : 2012, "y" : 482 }, {"x" : 2013, "y" : 497 }, {"x" : 2014, "y" : 488 },
               {"x" : 2015, "y" : 298 }, {"x" : 2016, "y" : 397 }, {"x" : 2017, "y" : 23 }],
              backgroundColor: 'rgba(174, 199, 232, 0.2)',
              borderColor: 'rgba(174, 199, 232, 1)',
              borderWidth: 1
          },
          {
              label: ["5 a 19"],
              data: [{"x" : 2009, "y" : 207 }, {"x" : 2010, "y" : 225 }, {"x" : 2011, "y" : 781 },
              {"x" : 2012, "y" : 772 }, {"x" : 2013, "y" : 826 }, {"x" : 2014, "y" : 810 },
               {"x" : 2015, "y" : 245 }, {"x" : 2016, "y" : 703 }, {"x" : 2017, "y" : 17 }],
              backgroundColor: 'rgba(255, 127, 14, 0.2)',
              borderColor: 'rgba(255, 127, 14, 1)',
              borderWidth: 1
          },
          {
              label: ["20 a 99"],
              data: [{"x" : 2009, "y" : 208 }, {"x" : 2010, "y" : 280 }, {"x" : 2011, "y" : 920 },
               {"x" : 2012, "y" : 903 }, {"x" : 2013, "y" : 926 }, {"x" : 2014, "y" : 1004 },
               {"x" : 2015, "y" : 433 }, {"x" : 2016, "y" : 922 }, {"x" : 2017, "y" : 156 }],
              backgroundColor: 'rgba(255, 187, 120, 0.2)',
              borderColor: 'rgba(255, 187, 120, 1)',
              borderWidth: 1
          },
          {
              label: ["100 ou mais"],
              data: [{"x" : 2009, "y" : 273 }, {"x" : 2010, "y" : 348 }, {"x" : 2011, "y" : 790 },
               {"x" : 2012, "y" : 781 }, {"x" : 2013, "y" : 741 }, {"x" : 2014, "y" : 809 },
               {"x" : 2015, "y" : 712 }, {"x" : 2016, "y" : 740 }, {"x" : 2017, "y" : 436 }],
              backgroundColor: 'rgba(44, 160, 44, 0.2)',
              borderColor: 'rgba(44, 160, 44, 1)',
              borderWidth: 1
          }
        ]
      },
      options: {
          elements: {
              line: {
                  tension: 0,
              }
          }
      }
    });

    this.grafico8 = new Chart(this.divgrafico8.nativeElement, {
        type: 'line',
        data: {
          labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017"],
          datasets: [
            {
              label: ["0"],
              data: [{"x" : 2009, "y" : 305359081.669266 }, {"x" : 2010, "y" : 356947584.638683 }, {"x" : 2011, "y" : 502254862.14359 },
              {"x" : 2012, "y" : 650575038.436647 }, {"x" : 2013, "y" : 587478318.967865 }, {"x" : 2014, "y" : 450858828.719786 },
               {"x" : 2015, "y" : 339262278.508082 }, {"x" : 2016, "y" : 252723026.377461 }, {"x" : 2017, "y" : 12013657.41 }],
              backgroundColor: 'rgba(31, 119, 180, 0.2)',
              borderColor: 'rgba(31, 119, 180, 1)',
              borderWidth: 1
          },
          {
              label: ["1 a 4"],
              data: [{"x" : 2009, "y" : 207951543.543334 }, {"x" : 2010, "y" : 206492971.022804 }, {"x" : 2011, "y" : 101083095.055984 },
              {"x" : 2012, "y" : 164360989.515233 }, {"x" : 2013, "y" : 92762791.5564615 }, {"x" : 2014, "y" : 67575110.340414 },
               {"x" : 2015, "y" : 28920749.3671555 }, {"x" : 2016, "y" : 28765754.8714835 }, {"x" : 2017, "y" : 526352.02 }],
              backgroundColor: 'rgba(174, 199, 232, 0.2)',
              borderColor: 'rgba(174, 199, 232, 1)',
              borderWidth: 1
          },
          {
              label: ["5 a 19"],
              data: [{"x" : 2009, "y" : 257156587.957212 }, {"x" : 2010, "y" : 432016592.572412 }, {"x" : 2011, "y" : 337036762.740556 },
              {"x" : 2012, "y" : 429302885.533626 }, {"x" : 2013, "y" : 423431592.36591 }, {"x" : 2014, "y" : 521428288.807057 },
               {"x" : 2015, "y" : 234921428.40664 }, {"x" : 2016, "y" : 357320606.541281 }, {"x" : 2017, "y" : 3397981.94 }],
              backgroundColor: 'rgba(255, 127, 14, 0.2)',
              borderColor: 'rgba(255, 127, 14, 1)',
              borderWidth: 1
          },
          {
              label: ["20 a 99"],
              data: [{"x" : 2009, "y" : 432499756.620207 }, {"x" : 2010, "y" : 615967093.627833 }, {"x" : 2011, "y" : 731817338.911622 },
               {"x" : 2012, "y" : 1024561271.04736 }, {"x" : 2013, "y" : 703563489.531337 }, {"x" : 2014, "y" : 692368378.532493 },
               {"x" : 2015, "y" : 289676800.214741 }, {"x" : 2016, "y" : 205622757.726689 }, {"x" : 2017, "y" : 8833135.27 }],
              backgroundColor: 'rgba(255, 187, 120, 0.2)',
              borderColor: 'rgba(255, 187, 120, 1)',
              borderWidth: 1
          },
          {
              label: ["100 ou mais"],
              data: [{"x" : 2009, "y" : 1622818205.41044 }, {"x" : 2010, "y" : 2078332096.51162 }, {"x" : 2011, "y" : 5225091567.36394 },
               {"x" : 2012, "y" : 5188750424.54597 }, {"x" : 2013, "y" : 6961348621.70469 }, {"x" : 2014, "y" : 4850428761.21299 },
               {"x" : 2015, "y" : 2583385920.74028 }, {"x" : 2016, "y" : 2725313742.69701 }, {"x" : 2017, "y" : 119876936.45 }],
              backgroundColor: 'rgba(44, 160, 44, 0.2)',
              borderColor: 'rgba(44, 160, 44, 1)',
              borderWidth: 1
          }
        ]
      },
      options: {
          elements: {
              line: {
                  tension: 0,
              }
          }
      }
    });

    this.grafico9 = new Chart(this.divgrafico9.nativeElement, {
      type: 'doughnut',
      data: {
          labels: ["Proteção Básica", "Proteção Especial - Alta Complexidade", "Assessoramento, Defesa e Garantia de Direitos", "Proteção Especial - Média Complexidade", "Outras Ofertas", "Benefícios Eventuais"],
          datasets: [{
              data: [7906, 1975, 1652, 1147, 975, 206],
              backgroundColor: [
                'rgba(31, 119, 180, 0.6)',
                'rgba(174, 199, 232, 0.6)',
                'rgba(255, 127, 14, 0.6)',
                'rgba(255, 187, 120, 0.6)',
                'rgba(44, 160, 44, 0.6)',
                'rgba(152, 223, 138, 0.6)'
              ],
              hoverBackgroundColor: [
                'rgba(31, 119, 180, 1)',
                'rgba(174, 199, 232, 1)',
                'rgba(255, 127, 14, 1)',
                'rgba(255, 187, 120, 1)',
                'rgba(44, 160, 44, 1)',
                'rgba(152, 223, 138, 1)'
              ]
          }]
      }
    });

    this.grafico10 = new Chart(this.divgrafico10.nativeElement, {
      type: 'doughnut',
      data: {
          labels: ["Clinica/Centro De Especialidade", "Hospital Geral", "Consultorio Isolado", "Unidade De Apoio Diagnose E Terapia", "Policlinica", "Hospital Especializado", "Outras"],
          datasets: [{
              data: [1814, 1505, 440, 350, 272, 188, 284],
              backgroundColor: [
                'rgba(31, 119, 180, 0.6)',
                'rgba(174, 199, 232, 0.6)',
                'rgba(255, 127, 14, 0.6)',
                'rgba(255, 187, 120, 0.6)',
                'rgba(44, 160, 44, 0.6)',
                'rgba(152, 223, 138, 0.6)',
                'rgba(214, 39, 40, 0.6)'
              ],
              hoverBackgroundColor: [
                'rgba(31, 119, 180, 1)',
                'rgba(174, 199, 232, 1)',
                'rgba(255, 127, 14, 1)',
                'rgba(255, 187, 120, 1)',
                'rgba(44, 160, 44, 1)',
                'rgba(152, 223, 138, 1)',
                'rgba(214, 39, 40, 1)'
              ]
          }]
      }
    });

    this.grafico11 = new Chart(this.divgrafico11.nativeElement, {
        type: 'bar',
        data: {
            labels: ["Sudeste", "Sul", "Nordeste", "Centro-Oeste", "Norte"],
            datasets: [{
                label: ["Municipal"],
                data: [1932, 726, 497, 180, 86],
                backgroundColor: 'rgba(31, 119, 180, 0.2)',
                borderColor: 'rgba(31, 119, 180, 1)',
                borderWidth: 1
            },
            {
                label: ["Estadual"],
                data: [240, 403, 58, 75, 22],
                backgroundColor: 'rgba(174, 199, 232, 0.2)',
                borderColor: 'rgba(174, 199, 232, 1)',
                borderWidth: 1
            },
            {
                label: ["Dupla"],
                data: [202, 349, 57, 21, 6],
                backgroundColor: 'rgba(255, 127, 14, 0.2)',
                borderColor: 'rgba(255, 127, 14, 1)',
                borderWidth: 1
            }
          ]
        }

    });

    this.grafico12 = new Chart(this.divgrafico12.nativeElement, {
        type: 'bar',
        data: {
            labels: ["Sudeste", "Sul", "Nordeste", "Centro-Oeste", "Norte"],
            datasets: [{
                label: ["Não possui vínculo"],
                data: [19, 15, 17, 1, 7],
                backgroundColor: 'rgba(31, 119, 180, 0.2)',
                borderColor: 'rgba(31, 119, 180, 1)',
                borderWidth: 1
            },
            {
                label: ["Federação de órgãos sociais"],
                data: [0, 0, 11, 0, 3],
                backgroundColor: 'rgba(174, 199, 232, 0.2)',
                borderColor: 'rgba(174, 199, 232, 1)',
                borderWidth: 1
            },
            {
                label: ["Governo"],
                data: [5, 4, 6, 1, 1],
                backgroundColor: 'rgba(255, 127, 14, 0.2)',
                borderColor: 'rgba(255, 127, 14, 1)',
                borderWidth: 1
            },
            {
                label: ["Movimento sindical"],
                data: [2, 5, 6, 0, 2],
                backgroundColor: 'rgba(255, 187, 120, 0.2)',
                borderColor: 'rgba(255, 187, 120, 1)',
                borderWidth: 1
            },
            {
                label: ["Instituição de ensino e/ou pesquisa"],
                data: [4, 7, 0, 0, 0],
                backgroundColor: 'rgba(44, 160, 44, 0.2)',
                borderColor: 'rgba(44, 160, 44, 1)',
                borderWidth: 1
            }
          ]
        }
    });

    this.grafico13 = new Chart(this.divgrafico13.nativeElement, {
        type: 'bar',
        data: {
            labels: ["Sudeste", "Sul", "Nordeste", "Centro-Oeste", "Norte"],
            datasets: [{
                label: ["Estadual e/ou inter-estadual"],
                data: [26, 28, 30, 0, 50],
                backgroundColor: 'rgba(31, 119, 180, 0.2)',
                borderColor: 'rgba(31, 119, 180, 1)',
                borderWidth: 1
            },
            {
                label: ["Nacional"],
                data: [4, 11, 15, 0, 7],
                backgroundColor: 'rgba(174, 199, 232, 0.2)',
                borderColor: 'rgba(174, 199, 232, 1)',
                borderWidth: 1
            },
            {
                label: ["Municipal e/ou inter-municipal"],
                data: [6, 5, 8, 3, 1],
                backgroundColor: 'rgba(255, 127, 14, 0.2)',
                borderColor: 'rgba(255, 127, 14, 1)',
                borderWidth: 1
            }
          ]
        }
    });
  }

  presentAlert(font) {
    let alert = this.alertCtrl.create({
      title: 'Fonte de Dados',
      subTitle: font,
      buttons: ['OK']
    });
    alert.present();
  }
}
