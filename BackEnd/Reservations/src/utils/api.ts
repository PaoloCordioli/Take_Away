import fetch from 'node-fetch'

export const authentication = async (token : any) : Promise<boolean> => {
    const get = await fetch("https://take-away-auth.now.sh/authentication", {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': token,
        }
    })

    const result = await get.json()
    if(!result.ok)
        return false
    return true
}