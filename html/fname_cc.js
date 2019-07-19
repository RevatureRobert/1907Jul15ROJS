//assignment 1
let tdArr=[
    [],
    [],
    []
]
let y=0;
for(let x=1;x<=33;x++){
    tdArr[0][y]=x;
    y++;
}
for(let x=33;x<=66;x++){
    tdArr[1].push(x);
}
y=0;
for(let x=66;x<=98;x++){
    tdArr[2][y]=x;
    y++;
}
for(let ind in tdArr){
    let ind2=+ind
    for(let el of tdArr[ind]){
        if((el+ind2)%15==0){
            console.log(`${el+ind2} Race Car`)
        }else if((el+ind2)%5==0){
            console.log(`${el+ind2} Car`)
        }else if((el+ind2)%3==0){
            console.log(`${el+ind2} Race`)
        }else{
            console.log(el+ind2)
        }
    }
}


//assignment 2

let toystore={
    name: "Toys for us",
    open: true,
    inventory:['teddy bear','buzz lightyear'],
    invCount: 2,
    getInventory: function (){
        return this.inventory;
    },
    listInv: function (){
        for(let toy of this.inventory){
            console.log(toy)
        }
    },
    addItem: function (toy){
        this.inventory.push(toy)
        this.invCount=this.inventory.length
    },
    removeItem: function (toy){
        for(let x=0;x<this.inventory.length;x++){
            if(this.inventory[x]==toy){
                // this.inventory[x]=this.inventory[this.inventory.length-1];
                // this.inventory.length=this.inventory.length-1;
                this.inventory.splice(1,x);
            }
        }
        this.invCount=this.inventory.length;
    },
    openAndClose: function (){
        this.open=!this.open;
    }
}