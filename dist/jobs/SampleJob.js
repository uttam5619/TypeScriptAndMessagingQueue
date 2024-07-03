"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class SampleJob {
    constructor(payload) {
        this.handle = () => {
            console.log(`handler of the job called`);
        };
        this.failed = (job) => {
            console.log('job failed');
            if (job) {
                console.log(job.id);
            }
        };
        this.payload = payload;
        this.name = this.constructor.name;
    }
}
exports.default = SampleJob;
