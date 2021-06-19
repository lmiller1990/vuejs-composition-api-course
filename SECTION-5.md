+-----------+
| Section 5 |
+-----------+

Authentication -> Can you access the system? (Sign in)
Authorization -> Once authentication, can you perform this action? (Permissions)

Front-end only
- Change <navbar> when authenticated
- Router guards:
  /posts/new (authenticated users only)
  /posts/4/edit (authorized users only)

- improving `useModal` to be dynamic
- Vue Router's `useParams` composable
- reactivity optimizations