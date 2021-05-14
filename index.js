// Your code here
class Polygon{
    constructor(sides){
        this.sides = sides;
    }
    get countSides(){
        return this.sides.length
    }

    get perimeter(){
        return this.sides.reduce((accumulator, currentValue) => accumulator + currentValue)
    }
}

class Triangle extends Polygon{
    get isValid(){
        let sortedArr = this.sides.sort(( a , b)=>{
            if(a > b) return 1;
            if(a < b) return -1;
            return 0;
        })
        if (sortedArr[2] < (sortedArr[0] + sortedArr[1])) {
            return true;
        } else{
            return false;
        }

    }
}

class Square extends Polygon{
    get isValid(){
        let newArr = this.sides.filter(side => side === this.sides[0])
        return this.sides.length === newArr.length;
    }

    get area(){
        return this.sides[0] * this.sides[0];
    }
}