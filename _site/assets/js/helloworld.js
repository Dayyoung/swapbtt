/*
  Hello World
*/
var dojichart = new DojiChart.core.Chart(document.getElementById("my-dojichart"), {
  fieldMap: {
    time: "t",
    open: "o",
    high: "h",
    low: "l",
    close: "c",
  }
});

// Candlestick layer
var candle_layer = new DojiChart.layer.CandleLayer({
  bearBodyColor: "blue",
  bullBodyColor: "red",
});

// Price chart panel
var price_chart_panel = new DojiChart.panel.TimeValuePanel({
  primaryLayer: candle_layer,
  height: 250,
  grid: true,
  //paddingTop : 100
});

dojichart.addComponent("price", price_chart_panel);

// Dummy data
var data_arr2 = [
  {"t":"03:00","o":2.0664,"h":2.06646,"l":2.06625,"c":2.06646,"v":10000},
  {"t":"03:05","o":1.06645,"h":1.06661,"l":1.06637,"c":1.06658,"v":86},
  {"t":"03:10","o":1.06661,"h":1.06663,"l":1.06647,"c":1.06651,"v":79},
  {"t":"03:15","o":1.0665,"h":1.0665,"l":1.06639,"c":1.06641,"v":30},
  {"t":"03:20","o":1.06637,"h":1.06639,"l":1.06618,"c":1.06628,"v":71},
  {"t":"03:25","o":1.0663,"h":1.06635,"l":1.06591,"c":1.06635,"v":163},
  {"t":"03:30","o":1.06634,"h":1.0664,"l":1.06625,"c":1.06628,"v":123},
  {"t":"03:35","o":1.06629,"h":1.06636,"l":1.06607,"c":1.06617,"v":117},
  {"t":"03:40","o":1.06619,"h":1.06627,"l":1.06583,"c":1.06584,"v":234},
  {"t":"03:45","o":1.06584,"h":1.06601,"l":1.06581,"c":1.06584,"v":51},
  {"t":"03:50","o":1.06585,"h":1.06595,"l":1.06581,"c":1.06594,"v":60},
  {"t":"03:55","o":1.06595,"h":1.06598,"l":1.06588,"c":1.06595,"v":51},
  {"t":"04:00","o":1.06594,"h":1.06597,"l":1.06576,"c":1.06579,"v":92},
  {"t":"04:05","o":1.06577,"h":1.0659,"l":1.06575,"c":1.06581,"v":87},
  {"t":"04:10","o":1.06584,"h":1.06584,"l":1.06557,"c":1.06576,"v":106},
  {"t":"04:15","o":1.06576,"h":1.06594,"l":1.06571,"c":1.06582,"v":59},
  {"t":"04:20","o":1.06581,"h":1.06589,"l":1.06569,"c":1.06586,"v":83},
  {"t":"04:25","o":1.06585,"h":1.06589,"l":1.06577,"c":1.06588,"v":59},
  {"t":"04:30","o":1.0659,"h":1.06593,"l":1.06583,"c":1.06591,"v":38},
  {"t":"04:35","o":1.06592,"h":1.06612,"l":1.06591,"c":1.06602,"v":68},
  {"t":"04:40","o":1.066,"h":1.06624,"l":1.06598,"c":1.06601,"v":113},
  {"t":"04:45","o":1.06603,"h":1.0661,"l":1.06588,"c":1.06606,"v":141},
  {"t":"04:50","o":1.06607,"h":1.06623,"l":1.06607,"c":1.06616,"v":31},
  {"t":"04:55","o":1.06614,"h":1.06618,"l":1.06605,"c":1.06614,"v":49},
  {"t":"05:00","o":1.06613,"h":1.06613,"l":1.06576,"c":1.06593,"v":162},
  {"t":"05:05","o":1.0659,"h":1.06597,"l":1.06588,"c":1.06593,"v":52},
  {"t":"05:10","o":1.06595,"h":1.06602,"l":1.06578,"c":1.06578,"v":63},
  {"t":"05:15","o":1.0658,"h":1.06588,"l":1.06565,"c":1.06572,"v":70},
  {"t":"05:20","o":1.06573,"h":1.0659,"l":1.06566,"c":1.06587,"v":79},
  {"t":"05:25","o":1.06588,"h":1.06589,"l":1.0658,"c":1.0658,"v":37},
  {"t":"05:30","o":1.06583,"h":1.06598,"l":1.06583,"c":1.06595,"v":83},
  {"t":"05:35","o":1.06594,"h":1.06609,"l":1.06565,"c":1.06579,"v":93},
  {"t":"05:40","o":1.06578,"h":1.06587,"l":1.06556,"c":1.06566,"v":92},
  {"t":"05:45","o":1.06568,"h":1.06602,"l":1.06568,"c":1.06601,"v":48},
  {"t":"05:50","o":1.06602,"h":1.06651,"l":1.06599,"c":1.06642,"v":130},
  {"t":"05:55","o":1.06644,"h":1.06651,"l":1.06619,"c":1.06619,"v":161},
  {"t":"06:00","o":1.06617,"h":1.06629,"l":1.0661,"c":1.06618,"v":140},
  {"t":"06:05","o":1.06618,"h":1.06647,"l":1.06595,"c":1.06595,"v":172},
  {"t":"06:10","o":1.06593,"h":1.06599,"l":1.06569,"c":1.06577,"v":174},
  {"t":"06:15","o":1.06579,"h":1.06598,"l":1.06578,"c":1.06592,"v":62},
  {"t":"06:20","o":1.06593,"h":1.06644,"l":1.06591,"c":1.06601,"v":105},
  {"t":"06:25","o":1.06601,"h":1.06622,"l":1.0659,"c":1.06602,"v":170},
  {"t":"06:30","o":1.06605,"h":1.06645,"l":1.06605,"c":1.06632,"v":152},
  {"t":"06:35","o":1.06629,"h":1.06641,"l":1.06622,"c":1.06632,"v":91},
  {"t":"06:40","o":1.06634,"h":1.06641,"l":1.06621,"c":1.06621,"v":147},
  {"t":"06:45","o":1.0662,"h":1.06643,"l":1.0662,"c":1.0664,"v":94},
  {"t":"06:50","o":1.0662,"h":1.06673,"l":1.06638,"c":1.0667,"v":124}
];

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var dateList = [
// '1-4-2021',
// '2-4-2021',
// '3-4-2021',
// '4-4-2021',
// '5-4-2021',
// '6-4-2021',
// '7-4-2021',
// '8-4-2021',
// '9-4-2021',
// '10-4-2021',
// '11-4-2021',
// '12-4-2021',
// '13-4-2021',
// '14-4-2021',
// '15-4-2021',
// '15-4-2021',
// '16-4-2021',
// '17-4-2021',
// '18-4-2021',
// '19-4-2021',
// '20-4-2021',
// '21-4-2021',
// '22-4-2021',
// '23-4-2021',
// '24-4-2021',
// '25-4-2021',
// '26-4-2021',
// '27-4-2021',
// '28-4-2021',
// '29-4-2021',
// '30-4-2021',
'1-5-2021',
'2-5-2021',
'3-5-2021',
'4-5-2021',
'5-5-2021',
'6-5-2021',
'7-5-2021',
'8-5-2021',
'9-5-2021',
'10-5-2021',
'11-5-2021',
'12-5-2021',
'13-5-2021',
]

 var data_arr = []

$(document).ready(function(){


  // var i = 0;

  // setInterval(function() {
  //   //$(dateList).each(function(i,item){
      
  //     if (i > dateList.length){
  //       return;
  //     }
  //     var item = dateList[i];
      
  //     $.get( "https://api.coingecko.com/api/v3/coins/dogecoin/history?date="+item, function( data ) {
  //         var openPrice = data.market_data.current_price.usd 
  //         var highPrice = openPrice + (openPrice * 0.2)
  //         var lowPrice = openPrice - (openPrice * 0.2)
  //         var closePrice = openPrice + (openPrice * 0.1)
  //         // console.log(openPrice)
  //         // console.log(highPrice)
  //         // console.log(lowPrice)
  //         // console.log(closePrice)
  //         var appendItem = {"t":item,"o":openPrice,"h": highPrice ,"l":lowPrice,"c":closePrice,"v":100};
  //         data_arr.push(appendItem)

  //         dojichart.loadData(data_arr, "DOGE", "M5");
  //         console.log(data_arr);
  //     });
  //   //});
  //   i ++;

  // }, 1000);

  dojichart.loadData(dogeData, "EURUSD", "M5");
});

// var data_arr = [
//   {"t":"1-4-2021","o":10,"h":30,"l":5,"c":15,"v":10},
//   {"t":"1-4-2021","o":10,"h":30,"l":5,"c":5,"v":10},
//   {"t":"1-4-2021","o":10,"h":30,"l":5,"c":15,"v":10},
// ]

// // Load data
 //dojichart.loadData(data_arr, "EURUSD", "M5");

setInterval(function() {


  if (DOGEPRICEFORUSD == 0){
    return
  }
  
  //data_arr = shuffle(data_arr);

  const rand1 = DOGEPRICEFORUSD
  const rand2 = rand1 + 0.03
  const rand3 = rand1 - 0.03;
  var rand4 = rand1 + Math.random() * 0.1;

  if (MOONCOST > 0){
    MOONCOST = MOONCOST * 1.2;
    
    //var maxCost = (DOGEPRICE / DOGEPRICEFORUSD)

    //console.log(maxCost);

    if(MOONCOST > 1){
      MOONCOST = 1
    }
    rand4 = MOONCOST;
  }

  //console.log(rand4 + "!!")

  dogeData.pop()
  dogeData.pop()
  
  var data = {"t":"14-5-2021","o":rand1,"h":rand2,"l":rand3,"c":rand4,"v":100}
  dogeData.push(data)
  
  var data = {"t":"14-5-2021","o":1,"h":1,"l":1,"c":1,"v":100}
  dogeData.push(data)
  
  dojichart.loadData(dogeData, "DOGE", "M5");
}, 300);

/* end of file */