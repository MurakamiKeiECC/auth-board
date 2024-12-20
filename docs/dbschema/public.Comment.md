# public.Comment

## Description

## Columns

| Name | Type | Default | Nullable | Children | Parents | Comment |
| ---- | ---- | ------- | -------- | -------- | ------- | ------- |
| id | integer | nextval('"Comment_id_seq"'::regclass) | false |  |  |  |
| content | text |  | false |  |  |  |
| postId | integer |  | false |  | [public.Post](public.Post.md) |  |
| authorId | integer |  | false |  | [public.User](public.User.md) |  |
| createdAt | timestamp(3) without time zone | CURRENT_TIMESTAMP | false |  |  |  |
| updatedAt | timestamp(3) without time zone |  | false |  |  |  |

## Constraints

| Name | Type | Definition |
| ---- | ---- | ---------- |
| Comment_authorId_fkey | FOREIGN KEY | FOREIGN KEY ("authorId") REFERENCES "User"(id) ON UPDATE CASCADE ON DELETE RESTRICT |
| Comment_postId_fkey | FOREIGN KEY | FOREIGN KEY ("postId") REFERENCES "Post"(id) ON UPDATE CASCADE ON DELETE RESTRICT |
| Comment_pkey | PRIMARY KEY | PRIMARY KEY (id) |

## Indexes

| Name | Definition |
| ---- | ---------- |
| Comment_pkey | CREATE UNIQUE INDEX "Comment_pkey" ON public."Comment" USING btree (id) |

## Relations

```mermaid
erDiagram

"public.Comment" }o--|| "public.Post" : "FOREIGN KEY ("postId") REFERENCES "Post"(id) ON UPDATE CASCADE ON DELETE RESTRICT"
"public.Comment" }o--|| "public.User" : "FOREIGN KEY ("authorId") REFERENCES "User"(id) ON UPDATE CASCADE ON DELETE RESTRICT"

"public.Comment" {
  integer id
  text content
  integer postId FK
  integer authorId FK
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
"public.User" {
  integer id
  text email
  text name
  timestamp_3__without_time_zone createdAt
  timestamp_3__without_time_zone updatedAt
}
```

---

> Generated by [tbls](https://github.com/k1LoW/tbls)