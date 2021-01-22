// TODO - Implement getCommentsByUserId() function
async function getCommentsByUserId(userId) {
    let response = await fetch('/api/comments');
    let data = await response.json()

    let arr = [] 
    
    for(let i=0; i<data.length; i++) {
        if(data[i].userId == userId) {
            arr.push(data[i].data)
        }
    }

    return arr
}

// ----------- Don't modify -----------
const mockFetch = (url, responseData) => {
    const mockJsonPromise = Promise.resolve(responseData);
    const mockFetchPromise = (callUrl) => {
        if (url === callUrl) {
            return Promise.resolve({
                json: () => mockJsonPromise
             });
        } else {
            return Promise.reject('404: No such url')
        }
    }
    global.fetch = mockFetchPromise;
}

const successResponse = [
    {
        'userId': '1',
        "data": 'This looks slick!'
    },
    {
        'userId': '2',
        "data": 'I think this can be improved.'
    },
    {
        'userId': '1',
        "data": 'What kind of improvement?'
    }];
mockFetch('/api/comments', successResponse);

module.exports = getCommentsByUserId;
// ----------- Don't modify -----------

getCommentsByUserId("1").then((res) => {
  console.log(res);
});
