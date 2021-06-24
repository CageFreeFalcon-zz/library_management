import { API } from "aws-amplify";
import {
  createAuthor,
  createBook,
  createBookAuthor,
  createRack
} from "../graphql/mutations";

export default {
  data() {
    return {
      groups: ["librarians", "students", "requests"]
    };
  },
  methods: {
    async fakebooks() {
      let book = [
        {
          b: {
            id: "9788173817731",
            title: "Applied english grammer and comosition",
            subject: "English",
            publisher: "new central book agency",
            language: "English",
            edition: "2012",
            copies_present: 0,
            copies_issued: 0
          },
          a: ["Dr P C Das"]
        },
        {
          b: {
            id: "9798182961653",
            title: "understanding computer application with bluej",
            subject: "computer",
            publisher: "arya publiushing company",
            language: "english",
            edition: "2008",
            copies_present: 0,
            copies_issued: 0
          },
          a: ["vijay kumar pandey", "dilip kumar dey"]
        },
        {
          b: {
            id: "9788121919340",
            title: "principle for physics for class 11",
            subject: "physics",
            publisher: "s chand",
            language: "english",
            edition: "2014",
            copies_present: 0,
            copies_issued: 0
          },
          a: ["v k mehta", "rohit mehta"]
        }
      ];
      console.log(book);
      for (let i = 0; i < book.length; i++) {
        let item = book[i];
        console.log(item);
        const {
          data: { createBook: createdbook }
        } = await API.graphql({
          query: createBook,
          variables: {
            input: item.b
          }
        });
        console.log(createdbook);
        let createdauthors = [];
        for (let j = 0; j < item.a.length; j++) {
          let authorname = item.a[j];
          const {
            data: { createAuthor: createdauthor }
          } = await API.graphql({
            query: createAuthor,
            variables: {
              input: {
                name: authorname
              }
            }
          });
          createdauthors.push(createdauthor);
          console.log(createdauthor);
        }
        for (let j = 0; j < createdauthors.length; j++) {
          let createdauthorsKey = createdauthors[j];
          const {
            data: { createBookAuthor: match }
          } = await API.graphql({
            query: createBookAuthor,
            variables: {
              input: {
                bookID: createdbook.id,
                authorID: createdauthorsKey.id
              }
            }
          });
          console.log(match);
        }
      }
      console.log("three books created");
    },
    async fakeracks() {
      let r = [
        { name: "Rack 1" },
        { name: "Rack 2" },
        { name: "Rack 3" },
        { name: "Rack 4" },
        { name: "Rack 5" },
        { name: "Rack 6" },
        { name: "Rack 7" }
      ];
      for (let i = 0; i < r.length; i++) {
        const {
          data: { createRack: createdrack }
        } = await API.graphql({
          query: createRack,
          variables: {
            input: r[i]
          }
        });
        console.log(createdrack);
      }
      console.log("seven racks created");
    }
  }
};
