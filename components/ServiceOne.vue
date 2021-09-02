<template>
    <section class="service-area service-default-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-xl-6 m-auto">
                    <div class="section-title text-center" data-aos="fade-up" data-aos-duration="1000">
                        <h2 class="title">What We Do?</h2>
                        <div class="separator-line mt-14">
                            <img src="/images/shape/line-s1.png" alt="Images">
                            <img class="me-1" src="/images/shape/line-s2.png" alt="Images">
                        </div>
                        <div class="desc">
                            <p class="mt-21">Whether you are a just starting out or have been in business for years we have the skills to get your company where you want to go.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row icon-box-style1">
                <div class="col-md-6 col-lg-4" data-aos="fade-up" data-aos-duration="1100" v-for="(service, index) in services" :key="index">
                    <ServiceItem :service="service" />
                </div>
            </div>
        </div>
        <div class="layer-shape">
            <img class="layer-shape-one" src="/images/shape/6.png" alt="shape">
            <img class="layer-shape-two" src="/images/shape/7.png" alt="shape">
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
                        desc: "Every brand needs a home and we can build it together. From quick turnaround templated solutions to a fully custom websites that accomadates your every need."
                    },
                    {
                        icon: "/images/icons/s5.png",
                        title: "SEO",
                        desc: "Once you have a home online you need to help your potential clients find it. We know all the tricks to get you ranking high in online searches and beat the competition."
                    },
                    {
                        icon: "/images/icons/s3.png",
                        title: "Brand Identity",
                        desc: "From logos to in-store signage we can help craft brand assets that will capture new and returning clients and make your branding something to remember."
                    },
                    {
                        icon: "/images/icons/s4.png",
                        title: "Content Creation",
                        desc: "We create engaging content that cuts through the noise and reaches your audience."
                    },
                    {
                        icon: "/images/icons/c2.png",
                        title: "Content Distribution",
                        desc: "Is your plate a little full? With a growing number of platforms wanting your attention, let us distribute your message for you."
                    },
                    {
                        icon: "/images/icons/s2.png",
                        title: "Marketing",
                        desc: "Together we can meet your new clients where their attention really is. From social lead genereation to youtube pre-roll ads."
                    },
                ]
            }
        },
    };
</script>