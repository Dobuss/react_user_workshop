const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result.users;
}
export const getOne = async (userid) => {
    const response = await fetch(`${baseUrl}/${userid}`);
    const result = await response.json();
    return result.user;
}
export const create = async (userData) => {
    const {country, city, street, streetNumber, ...data} = userData;
    data.address = {
        country, city, street, streetNumber
    }

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
           'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const result = await response.json();
    return result.user;
}