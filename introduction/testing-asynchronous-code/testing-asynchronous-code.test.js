const axios = require("axios").default;

test("the data is peanut butter", async () => {
  const { data } = await axios.get("http://jsonplaceholder.typicode.com/users");
  expect(data).toHaveLength(10);
});
