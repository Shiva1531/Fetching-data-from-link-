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