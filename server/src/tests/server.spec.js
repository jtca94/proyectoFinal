import request from "supertest";
import { app } from "../main.js";
import jwt from "jsonwebtoken";

let userId;

{
  /* Functions */
}
const generateRandomString = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;

  let result = "";
  Array.from({ length }).forEach(() => {
    const randomIndex = Math.floor(Math.random() * charactersLength);
    result += characters[randomIndex];
  });

  return result;
};

const body = {
  userName: generateRandomString(8),
  firstName: generateRandomString(10),
  lastName: generateRandomString(10),
  email: generateRandomString(12) + "@email.com",
  password: generateRandomString(10),
  address: generateRandomString(15),
};


const secretkey = "hjgTGDRSUhjashdj7623bGc";
const options = { expiresIn: "100y" };

const token = jwt.sign(body, secretkey, options);

const token = jwt.sign({body.userName, body.password}, secretkey, options);

{
  /* Testings */
}
describe("Testing POST", () => {
  test("New user registration", async () => {
    const newUser = body;
    const response = await request(app)
    .post("/register")
    .send(newUser);
    expect(response.status).toBe(200);
    userId = response.body.id;
  });

  test("New Order", async () => {
    const order = {
      userid: userId,
      productid: 1,
      quantity: 10,
      payload: {
        token: token,
      },
    };
    const response = await request(app)
    .post("/orders")
    .send(order);

    expect(response.status).toBe(401);
  });
});

describe("Testing GET", () => {
    test("GET Products", async () => {
      const response = await request(app)
      .get("/products")
      expect(response.status).toBe(200);
    });

    test("GET Products By ID", async () => {
        const idParams = 1;
        const response = await request(app)
        .get(`/products/${idParams}`)
        expect(response.status).toBe(200);
      });
  
  });
