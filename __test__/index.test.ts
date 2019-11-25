/* eslint-env jest */

import asyncWrapper from '../src/index'

test('Resolves with a error as null and data as object', async function () {
  const { data, error } = await asyncWrapper(Promise.resolve({}))
  expect(data).toBeTruthy()
  expect(error).toBeNull()
})

test('Rejects with a data as null and error as object', async function () {
  const { data, error } = await asyncWrapper(Promise.reject(Error()))
  expect(error).toBeTruthy()
  expect(data).toBeNull()
})