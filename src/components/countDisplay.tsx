
interface CountDisplayProps {
    count: Count
}

function CountDisplay({count, }: CountDisplayProps) {

    console.log(count, )

    return (
        <div className={'text-4xl'}>
            NUMBER: {count.num}
        </div>
    );
}

export default CountDisplay;