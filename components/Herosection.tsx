import Link from "next/link"
import { Button } from "./ui/moving-border"
import { ArrowRight } from "lucide-react"
export default function Herosection()
{
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <div className="p-4 relative z-10 w-full text-center">
                <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold
                bg-clip-text bg-gradiient-to-b from-neutral-50
                 to-neutral-400">Urologist Dr. Mukesh Beniwal</h1>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 mx:auto">
                    Explore the Mysteries of Medical Science at your Fingertips</p> 
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 mx:auto">Experience the nobelity of Engineering and Medical Science.</p>
                <p className="mt-4 font-normal text-base md:text-lg text-neutral-300 mx:auto">Leverage the Information Age to Improve your Knowledge and Health</p>
                <div className="mt-4">
                    <Link href={ "/start" }>
                    <Button
                        borderRadius="1.75rem"
                        className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
                    >
                        Learn More &nbsp; <ArrowRight />
                    </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}