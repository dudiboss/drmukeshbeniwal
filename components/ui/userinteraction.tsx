"use client"
function handleClick(event: any)
{
    console.log({event});
}

export default function UserInteraction()
{
    return (
        <div>
            <h1>Please Select an Option</h1>
            <input type="checkbox" name="Zero Diseases and Symptoms" id="fit" />
            <input type="checkbox" name="Symptoms Only" id="symp" />
            <input type="checkbox" name="Suffering from Diseases" id="diseased" />
            <button onClick={handleClick} >Submit</button>
        </div>
    )
}