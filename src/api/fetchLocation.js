const fetchLocation = async (lat, lon) => {

    const url = `https://geocode.xyz/${lat},${lon}?json=1&auth=426622711494272224235x68878`;
    const request = fetch(url);

    return request;

};

export default fetchLocation;