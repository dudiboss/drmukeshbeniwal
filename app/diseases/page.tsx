

const id = 1
const name = "Phymosis"
const description = "Problem in moving penis foreskin, idealy you should be able to move it back and forth normally and also durin erection"
const causes =  "Can be cause by injury while playing or even while closing zip of pants"
const  advice =  "Its necessary to diagnos early as it will lead to many more serious diseases"
const diagnosis =  "Easily identifiable, even by patients"
const tests = "Tests are necessary to determiine seriousness and complications"
const treatement = "Circumscision"
const emergency = false
export default function Page()
{
    return ( 
    <div>
        <p>Diseaases Information</p>
        <h1>{name}</h1>
        <p>{description}</p>
        <p>{causes}</p>
        <p>{advice}</p>
        <p>{diagnosis}</p>
        <p>{tests}</p>
        <p>{treatement}</p>
        <p>{emergency?"Emergency":"Can Wait"}</p>
    </div>
    

)
}