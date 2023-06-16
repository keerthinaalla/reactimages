const Person1 = ({ name, age, profession, city }) => {
    return (
        <>
            <h1>With destructing concept in passing parameters in function</h1>
            <ul>
                <li>{name}</li>
                <li>{profession}</li>
                <li>{age}</li>
                <li>{city}</li>

            </ul>
        </>
    )
}
export { Person1 };