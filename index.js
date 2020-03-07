class Polygon {
    constructor(arry){ 
        
         arry.map( (side, index) =>  this[`side${index}`] = side ); 

    } 
    get countSides() {
        return Object.keys(this).length
    } 
    get perimeter(){ 
        let x = Object.values(this); 
        let memo = 0;
         x.map(function(value){  
            memo += parseInt(value)
           return memo
        }); 
        return memo;
    }
    
} 

class Triangle extends Polygon {
    get isValid(){
       const testArray = Object.values(this);  
       let answer;
       return (testArray[0] + testArray[1] > testArray[2]) && (testArray[0] + testArray[2] > testArray[1]) && (testArray[1] + testArray[2] > testArray[0]) ? answer = true : answer = false
    }           
       

} 

class Square extends Polygon { 
    get isValid() {
        const testArray = Object.values(this); 
        let valueToTest = testArray[0] 
        let x = testArray.every( num => valueToTest == num )
        return x
         } 
    get area(){ 
        return (this.side0 * this.side1)
    }
}








