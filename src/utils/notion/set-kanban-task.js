
const TOKEN = process.env.INTERNAL_NOTION_TOKEN;

export async function setTaskStatus(pageId, newStatusName) {
    const res = await fetch(`https://api.notion.com/v1/pages/${pageId}`, {
        method: "PATCH",
        headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Notion-Version": "2022-06-28",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            properties: {
                Status: {
                    status: { name: newStatusName }
                }
            }
        })
    });

    const data = await res.json();
    console.log(`Updated status to "${newStatusName}":`, data);
}

