const Person = (props) => {
    return (
        <>
            <h1>Using props parameter in function</h1>
            <ul>
                <li>{props.name}</li>
                <li>{props.profession}</li>
                <li>{props.age}</li>
                <li>{props.city}</li>
            </ul>
        </>
    )
}
export { Person };