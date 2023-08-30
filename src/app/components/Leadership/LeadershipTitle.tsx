
export default function LeadershipTitle({ title }: { title: string }) {
    return (
        <>
            <div className="bg-light">
                <div className="container subheader subheader-container">
                    <h1 className="title">
                        {title}
                    </h1>
                </div>
            </div>

        </>
    )
}
