const axios = require('axios');

// Функція для виконання GET-запиту
async function getUsers() {
  try {
    const response = await axios.get('https://gorest.co.in/public-api/users');
    console.log('GET Users Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Функція для виконання POST-запиту
async function createUser() {
  try {
    const userData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      gender: 'male',
    };

    const response = await axios.post('https://gorest.co.in/public-api/users', userData);
    console.log('POST User Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Функція для виконання PUT-запиту
async function updateUser(userId) {
  try {
    const updatedData = {
      name: 'Updated Name',
    };

    const response = await axios.put(`https://gorest.co.in/public-api/users/${userId}`, updatedData);
    console.log('PUT User Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Функція для виконання DELETE-запиту
async function deleteUser(userId) {
  try {
    const response = await axios.delete(`https://gorest.co.in/public-api/users/${userId}`);
    console.log('DELETE User Response:', response.data);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

// Виклик функцій для тестування
getUsers();
// Також можна використовувати дані, які були отримані відповідь у попередньому запиті, для подальших тестів
// createUser();
// updateUser(userId);
// deleteUser(userId);
