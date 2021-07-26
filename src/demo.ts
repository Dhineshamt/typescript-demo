import { Child, AnotherChild, demoFunction  } from './child';
import DefaultChild, { NoDefault } from './default-child'


let child = new Child();
let anotherChild = new AnotherChild();
let defaultChild = new DefaultChild();
let noDefaultClass = new NoDefault();
class Demo {
     print() {
        let city: string = 'chennai';
        console.log("Print");
        child.printer();
        anotherChild.printer();
        demoFunction();
        defaultChild.printer();
        noDefaultClass.printer();
    }

 
}

let demo = new Demo();
demo.print();

