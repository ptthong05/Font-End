const fetchAPI = (url) => {
    const result = fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        });
        return result;
}



const fetchAPI2 = async (url) => { 
    const res = await fetchAPI(url);
    const result = await res.json();
    return result;
}
fetchAPI2();