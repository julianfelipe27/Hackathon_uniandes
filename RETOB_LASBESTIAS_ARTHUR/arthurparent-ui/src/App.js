import React from 'react';
import Chart from './components/Chart';
import './App.scss';

const chartData = {
  labels: ['Ciencias', 'Tecnología', 'Ingeniería', 'Artes', 'Matemáticas'],
  datasets:[
    {
      label:'Population',
      data:[
        94,
        100,
        100,
        85,
        70,
      ],
      backgroundColor:[
        'rgba(255, 99, 132, 0.6)',
        'rgba(54, 162, 235, 0.6)',
        'rgba(255, 206, 86, 0.6)',
        'rgba(75, 192, 192, 0.6)',
        'rgba(153, 102, 255, 0.6)',
        'rgba(255, 159, 64, 0.6)',
        'rgba(255, 99, 132, 0.6)'
      ]
    }
  ]
};

const recomendaciones = [
  {
    "img": '/reco 1.png',
    "text": "20% de descuento en talleres de pintura"
  },{
    "img": '/reco 2.png',
    "text": "Convocatoria de niños para arte con acuarela"
  },{
    "img": '/reco 1.png',
    "text": "20% de descuento en talleres de pintura"
  },{
    "img": '/reco 2.png',
    "text": "Convocatoria de niños para arte con acuarela"
  },
];

const gustos = [
  {
    "img": '/kreativa.png',
    "text": "Massa Kreativa",
    "precio": 18000
  }, {
    "img": '/norma.png',
    "text": "Arenástica Norma",
    "precio": 13000
  }, {
    "img": '/kreativa.png',
    "text": "Massa Kreativa",
    "precio": 18000
  }, {
    "img": '/norma.png',
    "text": "Arenástica Norma",
    "precio": 13000
  }
]

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <div className="App-header-select">

          <select name="" id="">
            <option value="Daniela" selected> Perfil de Daniela</option>
            <option value="Santiago"> Perfil de Santiago</option>
          </select>

        </div>

      </header>
      <section className="App-content">
        <Chart chartData={chartData} />
        <article className="App-content-text">
              Durante esta semana <strong>Daniela </strong>ha aumentando significativamente sus habilidades en <strong>arte</strong>, ¡felicitala!
          </article>
      </section>

      <section className="App-recomendaciones">
        <h1>Recomendados para vivir junto a Daniela</h1>
        <article className="App-recomendaciones-content">
        {
          recomendaciones.map( ( item ) => {
            var background = {
              backgroundImage: 'url("' + process.env.PUBLIC_URL + item.img + '")'
            }
            console.log(process.env.PUBLIC_URL + item.img);
              return(
                <div className="App-recomendaciones-content-item" style={background} key={item}>
                  <p>{item.text}</p>
                </div>
              )
          })
        }
        </article>
      </section>

      <section className="App-gustos">
        <h1>Porque a Daniela le gusta el arte</h1>
        <article className="App-gustos-content">
        {
          gustos.map( ( item ) => {
              return(
                <div className="App-gustos-content-item" key={item}>
                  
                  <div className="App-gustos-content-item-img">
                    <img src={process.env.PUBLIC_URL + item.img} alt="Imagen producto"/>
                  </div>

                  <div className="App-gustos-content-item-text">
                    <p>{item.text}</p>
                    <p>$ {item.precio}</p>
                  </div>
                </div>
              )
          })
        }
        </article>
      </section>
    </div>
  );
}

export default App;
