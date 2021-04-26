export default node; 

export function node({ department = '', email = '', id = new Date().getTime() }) {
  return {
    department,
    email,
    id,
    children: []
  }
}
