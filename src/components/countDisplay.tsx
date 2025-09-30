
interface CountDisplayProps {
    count: Count
}

function CountDisplay({count}: {count:CountDisplayProps}) {

    console.log(count)

    return (
        <div className={'text-4xl'}>
            NUMBER:
        </div>
    );
}

export default CountDisplay;