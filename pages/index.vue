<template>
    <div class="main-container">

        <Header />

        <OffCanvasMobileMenu />

        <HeroSlider />

        <ServiceOne />

        <FaqOne />

        <TeamSection class="team-default-area" />
 
        <BrandLogoSection />

        <ContactDevider />

        <Footer />

        <client-only>
            <back-to-top class="scroll-top" bottom="30px">
                <i class="arrow-top icofont-rounded-up"></i>
                <i class="arrow-bottom icofont-rounded-up"></i>
            </back-to-top>
        </client-only>

    </div>
</template>

<script>
    export default {
        components: {
            Header: () => import('@/components/Header'),
            OffCanvasMobileMenu: () => import('@/components/OffCanvasMobileMenu'),
            HeroSlider: () => import('@/components/HeroSlider'),
            AboutOne: () => import('@/components/AboutOne'),
            FunFactOne: () => import('@/components/FunFactOne'),
            ServiceOne: () => import('@/components/ServiceOne'),
            FaqOne: () => import('@/components/FaqOne'),
            TeamSection: () => import('@/components/TeamSection'),
            PortfolioSection: () => import('@/components/PortfolioSection'),
            TestimonialOne: () => import('@/components/TestimonialOne'),
            BrandLogoSection: () => import('@/components/BrandLogoSection'),
            BlogSection: () => import('@/components/BlogSection'),
            ContactDevider: () => import('@/components/ContactDevider'),
            Footer: () => import('@/components/Footer'),
        },

        head() {
            return {
                title: 'Home'
            }
        },
    };
</script>


