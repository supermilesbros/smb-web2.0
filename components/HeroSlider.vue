<template>
    <section class="home-slider-area slider-default">
        <div class="home-slider-content">
            <div class="home-slider-container">
                <swiper :options="swiperOptions">
                    <!-- Start Slide Item -->
                    <div class="swiper-slide home-slider-item" :style="{ backgroundImage: `url('/images/slider/bg1.jpg')` }">
                        <div class="slider-content-area">
                            <div class="content">
                                <div class="subtitle-content">
                                    <img src="/images/shape/line1.png" alt="Images">
                                    <h6>We Are Here</h6>
                                </div>
                                <div class="tittle-wrp">
                                    <h2>To Save The <span>Day.</span></h2>
                                </div>
                                <p>Getting your website and social media content up and going can be daunting for a small business. Let us help!</p>
                                <n-link to="/service" class="btn btn-theme btn-theme-color2">All Services <i class="icon icofont-long-arrow-right"></i></n-link>
                            </div>
                            <div class="layer-style">
                                <div class="thumb">
                                    <img src="/images/slider/1.jpg" alt="Images">
                                </div>
                                <div class="success-rate"><div class="content">150K <span>Follows Generated</span></div></div>
                                <div class="trusted-clients-content">
                                    <span>For Our <br>Clients</span>
                                    <ul class="clients-list">
                                        <li><img src="/images/clients/fgn-logo-sm.png" alt="Images"></li>
                                        <li><img src="/images/clients/t1-logo-sm.png" alt="Images"></li>
                                        <li><img src="/images/clients/bp-logo-sm.png" alt="Images"></li>
                                        <li><img src="/images/clients/rr-logo-sm.png" alt="Images"></li>
                                    </ul>
                                </div>
                                <div class="shape-style1">
                                    <img src="/images/shape/1.png" alt="Images">
                                </div>
                                <div class="shape-style2">
                                    <img src="/images/shape/2.png" alt="Images">
                                </div>
                                <div class="shape-style3">
                                    <img src="/images/shape/3.png" alt="Images">
                                </div>
                                <div class="shape-style4">
                                    <img src="/images/shape/4.png" alt="Images">
                                </div>
                                <div class="shape-style5">
                                    <img src="/images/shape/5.png" alt="Images">
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- End Slide Item -->
                    <!-- Start Slide Item -->
                    <!-- End Slide Item -->
                </swiper>
                <!-- Add Arrows -->
            </div>
        </div>
        <div class="home-slider-sidebar" data-aos="fade-zoom-in" data-aos-duration="1300">
            <div class="social-icon">
                <a href="https://www.facebook.com/supermilesbros"><i class="icofont-facebook"></i></a>
                <a href="https://www.instagram.com/supermilesbros/"><i class="icofont-instagram"></i></a>
                <a href="https://www.tiktok.com/@supermilesbros?lang=en"><fa :icon="['fab','tiktok']"></fa></a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        data() {
            return {
                swiperOptions: {
                    slidesPerView : 1,
                    loop: false,
                    spaceBetween : 30,
                    autoplay: false,
                    navigation: {
                        nextEl: '.home-slider-container .swiper-button-next',
                        prevEl: '.home-slider-container .swiper-button-prev',
                    }
                }
            }
        },
    };
</script>
