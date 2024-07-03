import { JobInterface } from "../types/bullMqJobDefintion";
import { Job } from "bullmq";


export default class SampleJob implements JobInterface{

    name: string
    payload: Record<string, unknown>
    constructor(payload: Record<string, unknown>){
        this.payload = payload;
        this.name =this.constructor.name
    }

    handle = ()=>{
        console.log(`handler of the job called`)
    }

    failed = (job?:Job) : void=>{
        console.log('job failed')
        if(job){
            console.log(job.id)
        }
    }
}