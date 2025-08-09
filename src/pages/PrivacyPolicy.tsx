import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - TEDx Jahangirnagar University"
        description="Learn about how TEDx JU collects, uses, and protects your personal information. Read our comprehensive privacy policy to understand your data rights."
        keywords="TEDx JU privacy policy, data protection, personal information, cookies, user rights, GDPR compliance"
        url="https://tedx-ju.netlify.app/privacy-policy"
        type="website"
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-tedx-red to-tedx-red-dark text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              How we collect, use, and protect your personal information at TEDx Jahangirnagar University.
            </p>
          </div>
        </section>

        {/* Privacy Policy Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-8">
                  <p className="text-muted-foreground">
                    <strong>Last updated:</strong> January 2025
                  </p>
                  <p className="text-muted-foreground">
                    This Privacy Policy describes how TEDx Jahangirnagar University ("we," "us," or "our") collects, uses, and shares your personal information when you visit our website or use our services.
                  </p>
                </div>

                <div className="space-y-8">
                  {/* Information We Collect */}
                  <div>
                    <h2 className="text-3xl font-bold text-tedx-black mb-4">Information We Collect</h2>
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-xl font-semibold text-tedx-black mb-2">Personal Information</h3>
                        <p className="text-muted-foreground">
                          We may collect personal information that you voluntarily provide to us, such as:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2">
                          <li>Name and contact information (email address, phone number)</li>
                          <li>University affiliation and student status</li>
                          <li>Event registration information</li>
                          <li>Feedback and survey responses</li>
                          <li>Communication preferences</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h3 className="text-xl font-semibold text-tedx-black mb-2">Automatically Collected Information</h3>
                        <p className="text-muted-foreground">
                          When you visit our website, we automatically collect certain information, including:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground ml-4 mt-2">
                          <li>IP address and device information</li>
                          <li>Browser type and version</li>
                          <li>Pages visited and time spent</li>
                          <li>Referring website</li>
                          <li>Cookies and similar technologies</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* How We Use Information */}
                  <div>
                    <h2 className="text-3xl font-bold text-tedx-black mb-4">How We Use Your Information</h2>
                    <p className="text-muted-foreground mb-4">
                      We use the information we collect for the following purposes:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-2">
                      <li>To provide and maintain our services</li>
                      <li>To process event registrations and manage attendance</li>
                      <li>To communicate with you about events and updates</li>
                      <li>To improve our website and user experience</li>
                      <li>To comply with legal obligations</li>
                      <li>To protect our rights and prevent fraud</li>
                    </ul>
                  </div>

                  {/* Information Sharing */}
                  <div>
                    <h2 className="text-3xl font-bold text-tedx-black mb-4">Information Sharing</h2>
                    <p className="text-muted-foreground mb-4">
                      We do not sell, trade, or otherwise transfer your personal information to third parties, except in the following circumstances:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-2">
                      <li>With your explicit consent</li>
                      <li>To comply with legal requirements</li>
                      <li>To protect our rights and safety</li>
                      <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                    </ul>
                  </div>

                  {/* Cookies */}
                  <div>
                    <h2 className="text-3xl font-bold text-tedx-black mb-4">Cookies and Tracking Technologies</h2>
                    <p className="text-muted-foreground mb-4">
                      We use cookies and similar technologies to enhance your browsing experience. These technologies help us:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-2">
                      <li>Remember your preferences and settings</li>
                      <li>Analyze website traffic and usage patterns</li>
                      <li>Provide personalized content</li>
                      <li>Improve website performance</li>
                    </ul>
                    <p className="text-muted-foreground mt-4">
                      You can control cookie settings through your browser preferences. However, disabling cookies may affect website functionality.
                    </p>
                  </div>

                  {/* Data Security */}
                  <div>
                    <h2 className="text-3xl font-bold text-tedx-black mb-4">Data Security</h2>
                    <p className="text-muted-foreground">
                      We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                    </p>
                  </div>

                  {/* Your Rights */}
                  <div>
                    <h2 className="text-3xl font-bold text-tedx-black mb-4">Your Rights</h2>
                    <p className="text-muted-foreground mb-4">
                      Depending on your location, you may have the following rights regarding your personal information:
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground ml-4 space-y-2">
                      <li><strong>Access:</strong> Request a copy of your personal information</li>
                      <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                      <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                      <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                      <li><strong>Objection:</strong> Object to certain processing activities</li>
                      <li><strong>Withdrawal:</strong> Withdraw consent where applicable</li>
                    </ul>
                  </div>

                  {/* Data Retention */}
                  <div>
                    <h2 className="text-3xl font-bold text-tedx-black mb-4">Data Retention</h2>
                    <p className="text-muted-foreground">
                      We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law. When we no longer need your information, we will securely delete or anonymize it.
                    </p>
                  </div>

                  {/* Third-Party Links */}
                  <div>
                    <h2 className="text-3xl font-bold text-tedx-black mb-4">Third-Party Links</h2>
                    <p className="text-muted-foreground">
                      Our website may contain links to third-party websites or services. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
                    </p>
                  </div>

                  {/* Children's Privacy */}
                  <div>
                    <h2 className="text-3xl font-bold text-tedx-black mb-4">Children's Privacy</h2>
                    <p className="text-muted-foreground">
                      Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately.
                    </p>
                  </div>

                  {/* International Transfers */}
                  <div>
                    <h2 className="text-3xl font-bold text-tedx-black mb-4">International Data Transfers</h2>
                    <p className="text-muted-foreground">
                      Your personal information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information.
                    </p>
                  </div>

                  {/* Changes to Policy */}
                  <div>
                    <h2 className="text-3xl font-bold text-tedx-black mb-4">Changes to This Privacy Policy</h2>
                    <p className="text-muted-foreground">
                      We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
                    </p>
                  </div>

                  {/* Contact Information */}
                  <div>
                    <h2 className="text-3xl font-bold text-tedx-black mb-4">Contact Us</h2>
                    <p className="text-muted-foreground mb-4">
                      If you have any questions about this Privacy Policy or our data practices, please contact us:
                    </p>
                    <div className="bg-tedx-light-grey p-6 rounded-lg">
                      <p className="text-muted-foreground mb-2">
                        <strong>Email:</strong> tedx@juniv.edu
                      </p>
                      <p className="text-muted-foreground mb-2">
                        <strong>Address:</strong> Jahangirnagar University, Savar, Dhaka-1342, Bangladesh
                      </p>
                      <p className="text-muted-foreground">
                        <strong>Website:</strong> tedx-ju.netlify.app
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PrivacyPolicy;
