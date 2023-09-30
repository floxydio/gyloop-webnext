
interface PrivacyPolicy {
  id: number,
  content: string,
  createdAt: string,
  updatedAt:  string,
  locale: string
}

export default function PrivacyComponent({privacyPolicy}: {privacyPolicy:PrivacyPolicy}) {
  return (
    <>
      <div>
          <title>Privacy Statement for Gyloop</title>
        </div>
        <div className="mb-5">
          <div className="container privacy-container py-3 pb-md-2 py-xl-4">
            <p className="privacy-update-info">
              This statement wast updated on 31 October 2001
            </p>

            <div className="privacy-content">
                {privacyPolicy.content}
            </div>
          </div>
        </div>
    
    </>
  )
}
