export default node; 

export function node({ name = '', value = '', id = new Date().getTime() }) {
  return {
    name,
    value,
    id,
    children: []
  }
}
