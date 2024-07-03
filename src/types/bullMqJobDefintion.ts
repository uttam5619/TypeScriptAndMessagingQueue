import { Job } from "bullmq"

export interface JobInterface{
    name: string
    payload?: Record<string, unknown>
    handle: (job?: Job) => void
    failed: (job?: Job) => void
}