# public.User

## Description

## Columns

| Name | Type | Default | Nullable | Children | Parents | Comment |
| ---- | ---- | ------- | -------- | -------- | ------- | ------- |
| id | integer | nextval('"User_id_seq"'::regclass) | false | [public.Post](public.Post.md) [public.Comment](public.Comment.md) |  |  |
| email | text |  | false |  |  |  |
| name | text |  | true |  |  |  |
| createdAt | timestamp(3) without time zone | CURRENT_TIMESTAMP | false |  |  |  |
| updatedAt | timestamp(3) without time zone |  | false |  |  |  |

## Constraints

| Name | Type | Definition |
| ---- | ---- | ---------- |
| User_pkey | PRIMARY KEY | PRIMARY KEY (id) |

## Indexes

| Name | Definition |
| ---- | ---------- |
| User_pkey | CREATE UNIQUE INDEX "User_pkey" ON public."User" USING btree (id) |
| User_email_key | CREATE UNIQUE INDEX "User_email_key" ON public."User" USING btree (email) |

## Relations

```mermaid
erDiagram

"public.Post" }o--o| "public.User" : "FOREIGN KEY ("authorId") REFERENCES "User"(id) ON UPDATE CASCADE ON DELETE SET NULL"
"public.Comment" }o--|| "public.User" : "FOREIGN KEY ("authorId") REFERENCES "User"(id) ON UPDATE CASCADE ON DELETE RESTRICT"

"public.User" {
  integer id
  text email
  text name
  timestamp_3__without_time_zone createdAt
  timestamp_3__without_time_zone updatedAt
}
"public.Post" {
  integer id
  text title
  text content
  boolean published
  integer authorId FK
  timestamp_3__without_time_zone createdAt
  timestamp_3__without_time_zone updatedAt
}
"public.Comment" {
  integer id
  text content
  integer postId FK
  integer authorId FK
  timestamp_3__without_time_zone createdAt
  timestamp_3__without_time_zone updatedAt
}
```

---

> Generated by [tbls](https://github.com/k1LoW/tbls)