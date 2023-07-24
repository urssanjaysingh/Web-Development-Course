console.clear();

fetch('https://mimo.org/users').then((response) => {
    console.log('API Request successfully sent!', response);
});

console.log();

// fetch('https://mimo.org/users', {
//     method: 'POST',
//     body: 'name=tester&username=testUser'
// }).then((response) => response.json());
