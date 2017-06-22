import axios from 'axios';

const API = 'https://blooming-garden-90086.herokuapp.com/api/passwords';

it('async API call with Jest', async () => {
  const req = await axios.get(API);
  const result = req;

  expect.assertions(2);
  expect(result.status).toBe(200);
  expect(result.data).toHaveLength(5);
})
