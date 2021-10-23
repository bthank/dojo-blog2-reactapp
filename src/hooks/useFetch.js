// custom hooks in React must start with the word 'use' or they will not work
import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    // useEffect fires on every render; note that a change of state triggers a render
    useEffect(() => {
        console.log('useEffect ran');

        // associate the fetch with an AbortController in order to stop the fetch when needed
        //   - this also requires:
        //      - adding a 2nd arg to the fetch call as shown below
        //      - calling abort() from AbortController
        //      - intercepting the error that is thrown and not update the error state variable
        const abortController = new AbortController();
    
        setTimeout(() => {
            fetch(url, { signal: abortController.signal })
            .then(response => {   // this response is not the data; you need to do something to the object to get the data
    
                console.log(response);
                if (!response.ok){
                    throw Error('*** ERROR: Could not fetch the data for that resource'); // this error that we have thrown will be caught by the catch block connected to this fetch
                }
                return response.json();  // this json() function also takes some time to resolve, so you need another then() to wait for it to resolve
            })
            .then((data) => {  // at this point the data will be available
                console.log(data);
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {  // this catch block will catch any network error like we can't connect to server
                               // this catch block won't catch non-network errors like the server endpoint not existing and the response object being received
                console.log(err.message);
                // don't update state if it is the Abort error that we threw
                if (err.name === 'AbortError'){
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
                
            });
    
        }, 1000);  // create a delay of 1000 to simulate a delay to see the 'Loading ...' message
    
        // this aborts whatever fetch it is associated with
        return () => abortController.abort();

    },[url]); // 2nd arg is a dependency array that controls when useEffect runs
               // an empty array as 2nd arg stops useEffect from running after the initial render
               // 2nd arg with a var inside the array causes useEffect to watch for changes in that variable and call itself when a change occurs
    return { data, isPending, error };
};

export default useFetch;