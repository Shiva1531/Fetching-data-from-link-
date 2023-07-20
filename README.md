# Fetching-data-from-link
Fetching data from the link and writing test cases for the data in the link
link: - https://dummyjson.com/products

Step 1 :- installing dependencies 

 npm install axios typescript ts-node @types/node jest ts-jest --save-dev 

Step 2 :- Need to create one ts file with name fetchDataFromAPI.ts 

//1 
  import axios from 'axios'; 
//2 
async function fetchDataFromAPI() { 
  try { 
//3 
    const response = await axios.get('https://dummyjson.com/products'); 
//4 
    return response.data; 
  } catch (error) { 
//5 
    console.error('Error fetching data:', error); 
    throw new Error('Failed to fetch data from API'); 
  } 
} 
//6 
export default fetchDataFromAPI; 

 

 

Code Explanation :-   

1. importing of 'axios'-- axios is library used for making http requests. 

2. defining async function which will perform asynchronous operations. 

3.http get request using axios.get method from following url. await key word is used to wait for the response to be returned before proceeding. response is object. 

4.data represents the data retrived from the API. 

5. catch block is used to handle errors during API request . 

6. it allows other modules to import and use this function. 

 

Step 3 :- now we need to write test cases or the above dummy data. 

import axios from "axios"; 

import fetchDataFromAPI from "../../../pass_checker/doubles/fetchDataFromAPI"; 

describe.only('fetchDataFromAPI', () => { 

        it('should fetch data from the API successfully', async () => { 

          const data = await fetchDataFromAPI(); 

          expect(data).toBeDefined(); 

          expect(typeof data).toBe('object'); 

          expect(Object.keys(data).length).toBeGreaterThan(0); 

    }); 

    it('should contain specific properties in the fetched data', async () => { 

        const data = await fetchDataFromAPI(); 

        // Check if each product in the data array has the specified properties 

        data.products.forEach(product => { 

          expect(product).toHaveProperty('title'); 

          expect(product).toHaveProperty('price'); 

          expect(product).toHaveProperty('description'); 

        }); 

      }); 

      it('should have a valid price in the fetched data', async () => { 

        const data = await fetchDataFromAPI(); 

        data.products.forEach(product => { 

          expect(product.price).toBeDefined(); 

          expect(typeof product.price).toBe('number'); 

          expect(product.price).toBeGreaterThan(0); 

        }); 

      }); 

      it('should handle API errors gracefully', async () => { 

        // Mock the API call to simulate an error 

        jest.spyOn(axios, 'get').mockRejectedValue(new Error('API request failed')); 

        // Test the error handling 

        try { 
          await fetchDataFromAPI(); 

        } catch (error) { 

          expect(error.message).toBe('Failed to fetch data from API'); 

        } 

      }); 

  }); 

 

Test Cases Explanation :-  

First test case: 'should fetch data from the API successfully' 

 1.The assertions check if the data is defined, its type is an object, and it contains at least one property. 

Second test case: 'should contain specific properties in the fetched data' 

 1.it will fetch for the data contains title, price, description it iterates over the products array  in the data. 

Third test case: 'should have a valid price in the fetched data' 

 1.it checks fetched data has a valid price it ietrates over products array in data . 

 2. it will check price property is defined, its type is a number and it is gretaer than 0. 

Fourth test case: 'should handle API errors gracefully' 

 1.it will simulates an API error and checks if fetchdatafromapi function can handle it.  

 2. it uses jest.spyOn to mock the axios.get method a d make it reject with a custom error message. 

 3. it will execute fetchdatafromapi function and expects it to throw an error with message . 
