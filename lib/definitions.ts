export type Disease = {
    id: number
    name: string
    commonness: 'very common'|'common'|'rare' 
    description: string
    agegroup: string
    causes: string
    advice: string
    diagnosis: string
    tests: string
    treatment: string
    treatmentduration: string
    emergency: boolean
};

export type Symptoms = {
    id: number
    name: string
    description: string
    commonness: 'very common'|'common'|'rare'
    agegroup: string
    rank: string //Seriousness from 1 to 10 where 10 represents emergency 
    causes: string
    advice: string
}