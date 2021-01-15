import React from 'react'
import ServiceItem from './ServiceItem'

function Services() {
    return (
        <div>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-white mb-20">Other Services <br className="hidden sm:block" />We Offer </h1>
                    <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                        <ServiceItem title='Unified Communications' description='Seamless UC ensures a higher level of interaction among staff members , external experts or consultants aw well as other dispersed workforce. It breaks down the silos between enterprise teams, and ensures that no matter where you work, you can still access the same secure system, equipped with: SMS and IM, Email services, Voicemail, Scheduling Meetings, VoIP and video calling and much more...' />
                        <ServiceItem title='IT Governance Frameworks' description='Our concentration area on our IT Governance frameworks implementation is centered on Value, Risk and Control. This is done by looking at the key IT resources such as applications, infrastructure, information and people. As the end products of our IT Governance frameworks implementations, we do put in place internal control systems or framework. ' />
                        <ServiceItem title='IT Support' description='CITS provides on-site , on-demand and on-call IT support services.  Our technical experts team will make sure that your IT infrastructure is secured and attain the required level of availability, confidentiality and integrity. Our support packages include installation, configuration, administration and support of IT Infrastructure ranging from end users to enterprise network and servers.' />
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Services
