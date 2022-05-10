import { Appwrite } from "appwrite";
const appwrite = new Appwrite();

appwrite.setEndpoint("http://localhost/v1").setProject("627a2d6cd1a17e8a7bfd");

export const account = appwrite.account;
