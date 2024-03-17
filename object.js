let obj=[
    {
        pname:"Honda 1011",
        pprice:100000,
        pbrand:"Honda",
        pspec:"Engine CC",
        pimg:"3.png"

    }
    ,
    {
        pname:"Honda 1012",
        pprice:200000,
        pbrand:"Honda",
        pspec:"Engine CC",
        pimg:"artemis.png"

    }
    ,
    {
        pname:"Honda 1013",
        pprice:300000,
        pbrand:"Honda",
        pspec:"Engine CC",
        pimg:"australia.png"

    }
    ,
    {
        pname:"Honda 1014",
        pprice:400000,
        pbrand:"Honda",
        pspec:"Engine CC",
        pimg:"Dubrovnik, Croatia.png"

    }
    ,
    {
        pname:"Honda 1015",
        pprice:400000,
        pbrand:"Honda",
        pspec:"Engine CC",
        pimg:"giza.png"

    }
    ,
    {
        pname:"Honda 1016",
        pprice:400000,
        pbrand:"Honda",
        pspec:"Engine CC",
        pimg:"Greece.png"

    }
    ,
]

let person = document.getElementById('cards');

for(var a in obj)
{
person.innerHTML+=
`
<div class="col-lg-4 col-md-6 col-sm-12">

<div class="card-1" style="width: 18rem;">
  <img class="card-img-top" src="${obj[a].pimg}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${obj[a].pname}</h5>
    <p class="card-text">${obj[a].pspec}</p>
    <p class="card-text">${obj[a].pprice}</p>
    
    <a href="detailed.html?id=${a}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>
`
}