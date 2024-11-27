// Must have an HTTP method name:
// Setting up API like routes that produce store data behind the scenes from some client



export function GET(request) {
  console.log(request)
  // return Response.json()
  return new Response('Hello!')
}

// export function POST() {
//   return (
//     <div>
      
//     </div>
//   )
// }
