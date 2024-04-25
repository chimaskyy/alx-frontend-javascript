/* eslint-disable */
export default function getFullResponseFromAPI(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            return resolve({
                status: 200,
                body: 'Success'
            });
        }
        return reject('The fake API is not working currently');
    });
}