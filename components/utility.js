export const getProduct = async (url) => {
    const response = await
        fetch(url, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNzEzOGJkNWQxMjAwMTg5MGQzNGEiLCJpYXQiOjE3MDU5OTY2MDEsImV4cCI6MTcwNzIwNjIwMX0.rqjzekJT_GldBSBaPaU7hvuNZqNKslByYrGtOgoG19g",
            }
        });
    const json = await response.json();
    // console.log(json);
    return json;
}

export const addNewProduct = async (url, data) => {
    try {
        const response = await
            fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNzEzOGJkNWQxMjAwMTg5MGQzNGEiLCJpYXQiOjE3MDU5OTY2MDEsImV4cCI6MTcwNzIwNjIwMX0.rqjzekJT_GldBSBaPaU7hvuNZqNKslByYrGtOgoG19g",
                },
                body: JSON.stringify(data)
            });
        if (!response.ok) {
            throw new Error(await response.text());
        }
        const json = await response.json();
        console.log(json);
    } catch (e) { console.log(e) }
}

export const deleteProduct = async (url, id) => {
    try {
        const response = await
            fetch(url+id, {
                method: 'DELETE',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNzEzOGJkNWQxMjAwMTg5MGQzNGEiLCJpYXQiOjE3MDU5OTY2MDEsImV4cCI6MTcwNzIwNjIwMX0.rqjzekJT_GldBSBaPaU7hvuNZqNKslByYrGtOgoG19g",
                },
            });
        if (!response.ok) {
            throw new Error(await response.text());
        }
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.log(error);
    }
}

export const updateProduct = async (url, id, data) => {
    try {
        const response = await
            fetch(url+id, {
                method: 'PUT',
                headers: {
                    "Content-Type": 'application/json',
                    "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWFmNzEzOGJkNWQxMjAwMTg5MGQzNGEiLCJpYXQiOjE3MDU5OTY2MDEsImV4cCI6MTcwNzIwNjIwMX0.rqjzekJT_GldBSBaPaU7hvuNZqNKslByYrGtOgoG19g",
                },
                body: JSON.stringify(data)
            });
        if (!response.ok) {
            throw new Error(await response.text());
        }
        const json = await response.json();
        console.log(json);
    } catch (e) { console.log(e) }
}