# Migration `20200912141901-add-base-models`

This migration has been generated by Nirmalya Ghosh at 9/12/2020, 7:49:01 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."User" (
"id" text   NOT NULL ,
"email" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Site" (
"id" text   NOT NULL ,
"name" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Page" (
"id" text   NOT NULL ,
"url" text   NOT NULL ,
"siteId" text   NOT NULL ,
PRIMARY KEY ("id")
)

CREATE TABLE "public"."Screenshot" (
"id" text   NOT NULL ,
"image" text   NOT NULL ,
"pageId" text   NOT NULL ,
PRIMARY KEY ("id")
)

ALTER TABLE "public"."Page" ADD FOREIGN KEY ("siteId")REFERENCES "public"."Site"("id") ON DELETE CASCADE ON UPDATE CASCADE

ALTER TABLE "public"."Screenshot" ADD FOREIGN KEY ("pageId")REFERENCES "public"."Page"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200912141901-add-base-models
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,34 @@
+generator client {
+  provider = "prisma-client-js"
+}
+
+datasource db {
+  provider = "postgresql"
+  url = "***"
+}
+
+model User {
+  id    String @default(uuid()) @id
+  email String
+}
+
+model Site {
+  id    String @default(uuid()) @id
+  name  String
+  pages Page[]
+}
+
+model Page {
+  id         String       @default(uuid()) @id
+  url        String
+  siteId     String
+  site       Site         @relation(fields: [siteId], references: [id])
+  Screenshot Screenshot[]
+}
+
+model Screenshot {
+  id      String @default(uuid()) @id
+  image   String
+  pageId  String
+  page    Page   @relation(fields: [pageId], references: [id])
+}
```
