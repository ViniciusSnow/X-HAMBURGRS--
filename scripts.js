// FORMA FEITA POR MIM // 


// const list = document.querySelector('ul')
// const buttonShowAll = document.querySelector('.show-all')
// let myLi = ''
// function showAll() {
// let myLi = ''
// menuOptions.forEach((product) => {
// myLi += `
// <li>

//       <img src= ${product.src} class="img1" alt="X-SALADA" >
//      <h2>${product.name}</h2> 
//     <p>${product.price}</p> 


//  </li>

//  `

// })
// list.innerHTML = myLi

// }

// buttonShowAll.addEventListener('click', showAll)


// const button = document.querySelector('.all')

// function descontar() {
// let myLiy = ''

// const novaVarialvel = menuOptions.map((value) => {
//     let desconto = 1 - 0.10
//    let newPrice = (value.price * desconto)
//   let newCompanies = {
//     name: value.name,
//      price: newPrice


//  }



// myLiy += `
//     <li>

//         <img src= ${value.src} class="img1" alt="X-SALADA" >
//         <h2>${value.name}</h2> 
//         <p>${newPrice.toFixed(2)}</p> 


//   </li>

//  `
//   return newCompanies

// })
// list.innerHTML = myLiy
//  console.log(novaVarialvel)
// }

// button.addEventListener('click', descontar)

// const buttonValor = document.querySelector('.valor')

// function somar() {

// const somatorio = menuOptions.reduce((acc, soma) => {
//    const somales = acc + soma.price


//  let myLiyy = ''
//   myLiyy += `
//  <li>

//    <p>${somales.toFixed(2)}</p> 


//   </li>

//  `
//  list.innerHTML = myLiyy


// return acc + soma.price




//  }, 0)
// console.log(somatorio)


// }
// buttonValor.addEventListener('click', somar)

// const buttonFiltro = document.querySelector('.filtro')
// let myliyi = ''
// function filtre() {
// let myliyi = ''
// const filtrador = menuOptions.filter((filtro) => {
//    if (filtro.vegan === true) {
//      myliyi += `
//      <li>

//            <img src= ${filtro.src} class="img1" alt="X-SALADA" >
//            <h2>${filtro.name}</h2> 
//          <p>${filtro.price}</p> 


//     </li>
// `
// list.innerHTML = myliyi
//  return true
// }
// else return false



// })
// console.log(filtrador)
// }
// buttonFiltro.addEventListener('click', filtre)


// FORMA DO RODOLFO //

const list = document.querySelector('ul')
const buttonMapAll = document.querySelector('.map-all')
const buttonShowAll = document.querySelector('.show-all')
const buttonValor = document.querySelector('.valor')
const buttonfiltro = document.querySelector('.filtro')

function formatCurrency (value) {

        const newFormat = value.toLocaleString ('pt-br', {

            style:'currency',
            currency: 'BRL',
        })
        return newFormat
}

function showAll(productarray) {
    let myLi = ''
    productarray.forEach((product) => {
        myLi += `
        <li>

                <img src= ${product.src} class="img1" alt="X-SALADA" >
              <h2>${product.name}</h2> 
               <p> R$  ${ formatCurrency (product.price.toFixed(2))}</p> 
                        

             </li>
            
       `

    })
    list.innerHTML = myLi

}


function mapAllItens() {
    const newPrices = menuOptions.map((product) => ({

        ...product, //*stread operator. 
        price: product.price * 0.9, 


    }))
    showAll(newPrices)

}

function sumaItens() {

    const totalValue = menuOptions.reduce((acc, curr) =>  acc + curr.price, 0 )

    list.innerHTML = `
             <li>

           
               <p>O valor somado no t   otal é R$ ${formatCurrency (totalValue.toFixed(2))}</p> 
                        

             </li>
`
}

function filtrador () {
 const filtroVegan = menuOptions.filter ((product)=> product.vegan === true)
 showAll(filtroVegan)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAllItens)
buttonValor.addEventListener('click', sumaItens)
buttonfiltro.addEventListener('click', filtrador)