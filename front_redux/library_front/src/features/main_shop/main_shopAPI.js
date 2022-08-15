import axios from 'axios'



const URL = "http://127.0.0.1:8000/"
// async(2)
export function get_all_books() {
    return new Promise((resolve) =>
        axios.get(`${URL}allbooks/`).then((res) => resolve({ data: res.data }))
    );
}

export function add_book(action) {
    return new Promise((resolve) =>
        axios.post(`${URL}createbook/`, 
            { 
            "name": action.bookname,
            "author": action.author,
            "year_published": action.year_published
            },
            {headers: {'Authorization': `Bearer ${action.token}`}},
            
        ).then((res) => resolve(res.data))
    );
}
