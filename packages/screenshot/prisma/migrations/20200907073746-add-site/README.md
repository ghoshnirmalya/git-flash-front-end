# Migration `20200907073746-add-site`

This migration has been generated by Nirmalya Ghosh at 9/7/2020, 1:07:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Site" (
"id" text   NOT NULL ,
"name" text   NOT NULL ,
PRIMARY KEY ("id")
)
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200906163904-add-user..20200907073746-add-site
--- datamodel.dml
+++ datamodel.dml
@@ -1,16 +1,18 @@
-// This is your Prisma schema file,
-// learn more about it in the docs: https://pris.ly/d/prisma-schema
+generator client {
+  provider = "prisma-client-js"
+}
 datasource db {
   provider = "postgresql"
-  url = "***"
+  url = "***"
 }
-generator client {
-  provider = "prisma-client-js"
+model User {
+  id    Int    @default(autoincrement()) @id
+  email String
 }
-model User {
-  id           Int    @default(autoincrement()) @id
-  email        String
+model Site {
+  id    String    @default(uuid()) @id
+  name String
 }
```
