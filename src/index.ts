export default (promise:Promise<any>):Promise<{ data:any | null, error: null | any }> => promise
  .then(data => ({ data, error: null }))
  .catch(error => ({ data: null, error }))
