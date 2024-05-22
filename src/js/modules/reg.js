import axios from 'axios';
const reg = () => {
  const registrationForm = document.getElementById('ff');
  registrationForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

      const email = document.getElementById('emailul').value;
      const password = document.getElementById('password').value;
      // const email = 'user@strapi.io'
      // const password = 'strapiPassword'

      console.log('Email:', email);
      console.log('Пароль:', password);
      // axios
      //   .post('http://localhost:1337/api/auth/local', {
      //     identifier: 'user@strapi.io',
      //     password: 'strapiPassword',
      //   })
      //   .then(response => {
      //     // Handle success.
      //     console.log('Well done!');
      //     console.log('User profile', response.data.user);
      //     console.log('User token', response.data.jwt);
      //   })
      //   .catch(error => {
      //     // Handle error.
      //     console.log('An error occurred:', error.response);
      //   });


      const registerUserToStrapi = async (email, password) => {
        try {
          const response = await axios.post('http://localhost:1337/api/auth/local/register', {
            username: email, // Используем email пользователя как его имя пользователя
            email: email,
            password: password,
          });
      
          // Если регистрация прошла успешно, возвращаем данные пользователя
          return response.data;
        } catch (error) {
          // Если возникла ошибка, выводим ее в консоль и возвращаем null
          console.error('An error occurred during registration:', error.response);
          return null;
        }
      };
      // Пример использования:
      
      registerUserToStrapi(email, password)
        .then(userData => {
          if (userData) {
            console.log('Registration successful!');
            console.log('User data:', userData);
          } else {
            console.log('Registration failed.');
          }
        })
        .catch(error => {
          console.error('An error occurred:', error);
        });
  });

}




    
// }
export default reg




