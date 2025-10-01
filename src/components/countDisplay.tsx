
interface CountDisplayProps {
    countObj: Count
}

function CountDisplay({countObj}: CountDisplayProps) {

    console.log(countObj)

    return (
        <div className={'text-4xl'}>
            NUMBER: {countObj.num}
        </div>
    );
}

export default CountDisplay;