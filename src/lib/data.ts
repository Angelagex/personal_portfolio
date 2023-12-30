type DiscordUserType = {
    username: string,
    display_name: string
}

export type DiscordStatusType = {
    discord_user: DiscordUserType,
    discord_status: string,
}


export const revalidate = 10 
export async function getDiscordStatus() {
    const  fetchData = await fetch('https://api.lanyard.rest/v1/users/448913483833147403', {next:{revalidate:revalidate}})
    const { data:{ discord_status } } = await fetchData.json()    
    return discord_status
}

