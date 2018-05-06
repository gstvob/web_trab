const operation = {

    insert_group: (data) =>{
        return fetch("/createGroup",{
                method: "post",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(data)
            }).then(r => checkCode(r)).then(r=>r.json())
    },
    list_groups: () => {
        return fetch("/listGroups")
                .then(r=> checkCode(r)).then(r=>r.json());
    },
    find_byId : (id) => {
        return fetch(`/findById?id=${id}`)
                .then(r => checkCode(r)).then(r=>r.json());
    },
    find_byName : (name) => {
        return fetch(`/findByName?name=${name}`)
                .then(r => checkCode(r)).then(r=>r.json());
    }
}

function checkCode(response) {
    if (response.status === 200)
        return Promise.resolve(response)
    else
        return Promise.reject(false)
}


export default operation
