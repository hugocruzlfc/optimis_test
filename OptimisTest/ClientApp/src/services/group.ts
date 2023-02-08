

export const getGroupsFromApi = async() => {
    const groups = fetch('group')
        .then((results) => {
            return results.json();
        })
        .then(data => {
            return data
        })

    return groups
};



