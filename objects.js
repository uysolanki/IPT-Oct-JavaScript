let player={
    pno:18,   //number as a value
    pname:'Virat',  //string as a value
    rs:90,  //number as a value
    mp:2,   //number as a value
    'mother-name' : 'Saroj',
    height:5.10, //number as a value
    captain:true, //boolean as a value
    century:{
        odi:51,
        t20:1,
        test:30
    },

    average: function calculateAverage()
              { 
                let avg=this.rs/this.mp;
                console.log(avg)
              },

    average1: function()
              { 
                let avg=this.rs/this.mp;
                console.log(avg)
              },
    average2: ()=>
              { 
                let avg=this.rs/this.mp;
                console.log(avg)
              }
}
console.log(player.century.odi)
player.average2();
console.log(player)
console.log(`My Fav player is ${player['mother-name']}`)
player.teamname='rcb'
console.log(player)
delete player['mother-name']
console.log(player)

console.log(typeof player.pno)
console.log(typeof player.pname)
console.log(typeof player.height)


function test()
{
    console.log("hi")
}

console.log(typeof test)
//diff between JSON & JS object


let rno=18;
let sname='Alice'
let per=78.5

let student={rno,sname,per}
console.log(student)


let {rno:a,sname:b,per:c}=student
console.log(a)
console.log(b)
console.log(c)