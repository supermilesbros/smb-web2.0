<template>
    <section class="service-area">
        <div class="container">
            <div class="row icon-box-style1">
                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1100" v-for="(service, index) in services" :key="index">
                    <ServiceItem :service="service" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                services: [
                    {
                        icon: "/images/icons/s1.png",
                        title: "Web Development",
                        desc: "Every brand needs a home and we can build it together. From quick turnaround templated solutions to a fully custom websites that accomadates your every need.",
                        to: "/web-development"
                    },
                    {
                        icon: "/images/icons/s5.png",
                        title: "SEO",
                        desc: "Once you have a home online you need to help your potential clients find it. We know all the tricks to get you ranking high in online searches and beat the competition.",
                        to: "/seo"
                    },
                    {
                        icon: "/images/icons/s3.png",
                        title: "Brand Identity",
                        desc: "From logos to in-store signage we can help craft brand assets that will capture new and returning clients and make your branding something to remember.",
                        to: "/brand-identity"
                    },
                    {
                        icon: "/images/icons/s4.png",
                        title: "Content Creation",
                        desc: "We create engaging content that cuts through the noise and reaches your audience.",
                        to: "/content-creation"
                    },
                    {
                        icon: "/images/icons/c2.png",
                        title: "Content Distribution",
                        desc: "Is your plate a little full? With a growing number of platforms wanting your attention, let us distibute your message for you.",
                        to: "/content-creation"
                    },
                    {
                        icon: "/images/icons/s2.png",
                        title: "Marketing",
                        desc: "Together we can meet your new clients where their attention really is. From social lead genereation to youtube pre-roll ads.",
                        to: "/marketing"
                    },
                ]
            }
        },
    };
</script>