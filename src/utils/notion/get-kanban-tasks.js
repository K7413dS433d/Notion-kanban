
const TOKEN = process.env.INTERNAL_NOTION_TOKEN;


export async function getTasks(DB_ID) {
    const res = await fetch(`https://api.notion.com/v1/databases/${DB_ID}/query`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
        }
    });

    const data = await res.json();

    const tasks = data.results.map(page => ({
        id: page.id,
        name: page.properties.Name?.title?.[0]?.plain_text || "Untitled",
        status: page.properties.Status?.status?.name || "No status",
        Description: page.properties.Description?.rich_text?.[0]?.plain_text || "No description",
        Tags: page.properties.Tags?.multi_select?.map(tag => tag.name) || []
    }));

    return tasks;
}


// console.log(await getTasks(DB_ID));

