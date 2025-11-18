// now params is not an object , its promise and it must be wrappedwith await
export default async  function BlogPage({params} ){
    const { postId }=await params
    return (
    <div>
        blog page {postId}
    </div>
    )
}