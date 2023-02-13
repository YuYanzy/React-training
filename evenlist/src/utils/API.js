
const URL = "https://thin-aspiring-bison.glitch.me/events";

export const getData = () => {
    return fetch(URL).then((res) => res.json());
};

export const postData = (newEvent) => {
    return fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
    }).then((res) => res.json());
};

export const pacthData = (id, newEvent) => {
    return fetch(`${URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newEvent),
    }).then((res) => res.json())
}

export const deleteData = (id) => {
    return fetch(`${URL}/${id}`, {
        method: "DELETE",
    }).then((res) => res.json())
};


