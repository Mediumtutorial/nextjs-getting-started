import React from 'react'

//Importing useRouter hook from next/router
import { useRouter } from 'next/router'

const index = () => {
    //Assigning useRouter hook to router variable
    const router = useRouter()

    //Destructuring id from the router
    const { id } = router.query
    return (
        <div>
            <h2>I am {id} page inside blog/{id}</h2>
        </div>
    )
}

export default index
