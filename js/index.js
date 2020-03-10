let name = ['rafa ','gaby ','juli '];
let cars = ['bmw ','audi ','ford '];
let color = ['red ','blue ','yellow '];
let text = '';
let i ;
let j ;
let k ;
let close = true

function buttonF() {   
    if(close){
        for ( i = 0; i < name.length; i++){
            for ( j = 0; j < cars.length; j++){
              for ( k = 0; k < color.length; k++){
                  text += name[i] + cars[j] + color[k] + '<br>'
              }
          }
      }
    } 
    else {
        text = ''
    }
    close = !close
document.getElementById('parrafo').innerHTML = text;
}

document.getElementById('button').onclick = buttonF;



// let name = ['rafa ','gaby ','juli '];
// let cars = ['bmw ','audi ','ford '];
// let color = ['red ','blue ','yellow '];
// let text = '';
// let i ;
// let j ;
// let k ;
//     for ( i = 0; i < name.length; i++){
//         for ( j = 0; j < cars.length; j++){
//             for ( k = 0; k < color.length; k++){
//                 text += name[i] + cars[j] + color[k]
//             }
//         }
//     }       
    
    

  