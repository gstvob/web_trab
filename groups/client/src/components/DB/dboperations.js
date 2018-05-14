const operation = {

    add_user: (data) => {
        return fetch("/createuser", {
            method:"post",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(data)
        }).then(r=>checkCode(r)).then(r=>r.json())
    },
    insert_group: (data) =>{
        return fetch("/createGroup",{
                method: "post",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(data)
            }).then(r => checkCode(r)).then(r=>r.json())
    },

    all_users: () => {
        return fetch("/allusers")
                .then(r=>checkCode(r)).then(r=>r.json());
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
    },
    push_user_into_group: (data) => {
        return fetch("/pushuser", {
                method: "post",
                headers: {"Content-Type":"application/json"},
                body: JSON.stringify(data)
        }).then(r=>checkCode(r)).then(r=>r.json())
    }

}

function checkCode(response) {
    if (response.status === 200)
        return Promise.resolve(response)
    else
        return Promise.reject(false)
}


export default operation
