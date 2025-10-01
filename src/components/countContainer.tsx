import CountDisplay from "./countDisplay.tsx";
import CountButtons from "./countButtons.tsx";
import {useState} from "react";

function CountContainer() {

    const [count, setCount] = useState<Count>({num:10})

    const change = (amount: number) : void => {
        count.num += amount

        setCount({...count})
    }

    const p1: Person = {first:'길동', last:'홍'}

    return (
        <div className={'bg-amber-200 h-1/3 text-center pt-4 text text-4xl bold'}>
            COUNT CONTAINER

            <CountDisplay count={count} ></CountDisplay>
            <CountButtons change={{change}}></CountButtons>
        </div>
    );
}

export default CountContainer;