import { objectType, makeSchema } from '@nexus/schema';
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-micro';
import path from 'path';

var prisma = new PrismaClient();
var User = objectType({
  name: "User",
  definition: function definition(t) {
    t.string("id");
    t.string("email");
  }
});
var Site = objectType({
  name: "Site",
  definition: function definition(t) {
    t.string("id");
    t.string("name");
  }
});
var Page = objectType({
  name: "Page",
  definition: function definition(t) {
    t.string("id");
    t.string("url");
    t.string("siteId");
    t.field("screenshots", {
      type: "Screenshot",
      nullable: true,
      resolve: function resolve(parent) {
        return prisma.screenshot.findOne({
          where: {
            id: parent.id
          }
        });
      }
    });
  }
});
var Screenshot = objectType({
  name: "Screenshot",
  definition: function definition(t) {
    t.string("id");
    t.string("image");
    t.string("pageId");
  }
});
var Query = objectType({
  name: "Query",
  definition: function definition(t) {// t.field("site", {
    //   type: "Site",
    // });
    // t.list.field("feed", {
    //   type: "Post",
    //   resolve: (_parent, _args, ctx) => {
    //     return prisma.post.findMany({
    //       where: { published: true },
    //     });
    //   },
    // });
    // t.list.field("drafts", {
    //   type: "Post",
    //   resolve: (_parent, _args, ctx) => {
    //     return prisma.post.findMany({
    //       where: { published: false },
    //     });
    //   },
    // });
    // t.list.field("filterPosts", {
    //   type: "Post",
    //   args: {
    //     searchString: stringArg({ nullable: true }),
    //   },
    //   resolve: (_, { searchString }, ctx) => {
    //     return prisma.post.findMany({
    //       where: {
    //         OR: [
    //           { title: { contains: searchString } },
    //           { content: { contains: searchString } },
    //         ],
    //       },
    //     });
    //   },
    // });
  }
}); // const Mutation = objectType({
//   name: "Mutation",
//   definition(t) {
//     t.field("signupUser", {
//       type: "User",
//       args: {
//         name: stringArg(),
//         email: stringArg({ nullable: false }),
//       },
//       resolve: (_, { name, email }, ctx) => {
//         return prisma.user.create({
//           data: {
//             name,
//             email,
//           },
//         });
//       },
//     });
//     t.field("deletePost", {
//       type: "Post",
//       nullable: true,
//       args: {
//         postId: stringArg(),
//       },
//       resolve: (_, { postId }, ctx) => {
//         return prisma.post.delete({
//           where: { id: Number(postId) },
//         });
//       },
//     });
//     t.field("createDraft", {
//       type: "Post",
//       args: {
//         title: stringArg({ nullable: false }),
//         content: stringArg(),
//         authorEmail: stringArg(),
//       },
//       resolve: (_, { title, content, authorEmail }, ctx) => {
//         return prisma.post.create({
//           data: {
//             title,
//             content,
//             published: false,
//             author: {
//               connect: { email: authorEmail },
//             },
//           },
//         });
//       },
//     });
//     t.field("publish", {
//       type: "Post",
//       nullable: true,
//       args: {
//         postId: stringArg(),
//       },
//       resolve: (_, { postId }, ctx) => {
//         return prisma.post.update({
//           where: { id: Number(postId) },
//           data: { published: true },
//         });
//       },
//     });
//   },
// });

var schema = makeSchema({
  types: [Query, // Mutation,
  User, Site, Page, Screenshot],
  outputs: {
    typegen: path.join(process.cwd(), "pages", "api", "graphql", "nexus-typegen.ts"),
    schema: path.join(process.cwd(), "pages", "api", "graphql", "schema.graphql")
  }
});
var config = {
  api: {
    bodyParser: false
  }
};
var index = new ApolloServer({
  schema: schema
}).createHandler({
  path: "/api"
});

export default index;
export { config, schema };
