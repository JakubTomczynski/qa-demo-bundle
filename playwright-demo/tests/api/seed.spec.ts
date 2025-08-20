import { test, expect, request } from '@playwright/test';

test.describe('@smoke api seed', () => {
  test('api status check', async () => {
    const base = process.env.BASE_URL_API ?? 'https://jsonplaceholder.typicode.com';
    const ctx = await request.newContext();
    const res = await ctx.get(`${base}/todos/1`);
    expect(res.ok()).toBeTruthy();
    const json = await res.json();
    expect(json).toHaveProperty('id', 1);
  });
});
