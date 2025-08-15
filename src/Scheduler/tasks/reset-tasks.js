import { getTasks, setTaskStatus } from "../../utils/index.js";
import { taskStatus } from './../../common/index.js';

const DB_ID = process.env.NOTION_DATABASE_ID;

export const resetTasks = async () => {
    console.log('Resetting tasks...');
    //get task page id
    const tasks = await getTasks(DB_ID)
    const taskPageIds = tasks.filter(task => task.status != taskStatus.NOT_STARTED).map(task => task.id);

    //update tasks statuses
    for (const taskPageId of taskPageIds) {
        await setTaskStatus(taskPageId, taskStatus.NOT_STARTED);
    }
}
