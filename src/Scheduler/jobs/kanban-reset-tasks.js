import { CronJob } from 'cron';
import { resetTasks } from '../tasks/reset-tasks.js';

export const job = new CronJob(
    '0 0 * * *', // cronTime
    resetTasks, // onTick
    null, // onComplete
    true, // start
    'Africa/Cairo' // timeZone
);