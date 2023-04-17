import axios from "axios";

export const getDataFromApi = async () => {
    try {
        axios.get('https://sandapps.hubblerapp.com/testrest/zac/')
            .then(res => {
                console.log(res, 'ppppppppppppppppppp');
                const persons = res.data;
                console.log('persons >>>', persons);
                return persons;

            });
    } catch (err) {
        console.log(err, 'lllllllllllllllllllllllll');
    }
}


