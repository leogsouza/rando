import axios from 'axios';

const API = 'https://blooming-garden-90086.herokuapp.com/api/passwords';

it('async API call with Jest', async () => {
  const req = await axios.get(API);
  const result = req.data;
  expect(result.data).toHaveLength(5);
})
