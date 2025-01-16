# Todo Backend

A very simple backend for todo management without database, fail treatments and tests made in node/express with typescript.

## Todo object

```typescript
{
  text: string,
  isComplete: boolean,
}
```

## Endpoints

- get:/todo
- get:/todo/$id
- get:/todo/$text
- post:/todo
- put:/todo/$id
- delete:/todo/$id
