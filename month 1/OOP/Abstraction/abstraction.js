class Character{
    attack(){
        throw new Error("SubClass must implement the attack.")
    }
}

class Worrior extends Character{
    attack(){
        console.log("Attacking with Sword")
    }
}
class Archer extends Character{
    attack(){
        console.log("Attacking with Arrows")
    }
}
class RockMan extends Character{
    // attack(){
    //     console.log("Attacking with Rocks")
    // }
}

const worrior= new Worrior();
const archer=new Archer()
const rockMan=new RockMan()

worrior.attack();
archer.attack();
rockMan.attack();
