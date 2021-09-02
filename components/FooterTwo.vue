<template>
    <footer class="footer-area bg-img-cover" :style="{ backgroundImage: `url('/images/photos/bg-footer.jpg')` }">
        <div class="container" data-aos="fade-up" data-aos-duration="1000">
            <div class="row">
                <div class="col-md-9 col-lg-4 col-xl-4">
                    <div class="widget-item mt-0">
                        <div class="about-widget">
                            <n-link to="/" class="footer-logo">
                                <img src="/images/logo/smb-dark.svg" alt="Logo">
                            </n-link>
                            <p>Getting your website and social media content up and going can be daunting for a small business. Let us help!</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-8 col-lg-6 col-xl-6">
                    <div class="widget-item menu-wrap-two-column">
                        <h4 class="widget-title">All Services</h4>
                        <img class="line-shape" src="/images/shape/line-s1.png" alt="shape">
                        <nav class="widget-menu-wrap">
                            <div class="row">
                                <div class="col-md-6">
                                    <ul class="nav-menu nav">
                                        <li><n-link to="/service-details">Web Development</n-link></li>
                                        <li><n-link to="/service-details">SEO</n-link></li>
                                        <li><n-link to="/service-details">Brand Identity</n-link></li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul class="nav-menu nav">
                                        <li><n-link to="/service-details">Content Creation</n-link></li>
                                        <li><n-link to="/service-details">Content Distribution</n-link></li>
                                        <li><n-link to="/service-details">Marketing</n-link></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="col-md-4 col-lg-2 col-xl-2 lg-pr-0">
                    <div class="widget-item menu-wrap-column">
                        <h4 class="widget-title">Useful Links</h4>
                        <img class="line-shape" src="/images/shape/line-s1.png" alt="Virtuf-HasTech">
                        <nav class="widget-menu-wrap">
                            <ul class="nav-menu nav">
                                <li><n-link to="/">Pricing</n-link></li>
                                <li><n-link to="/">Contact Us</n-link></li>
                                <li><n-link to="/">Privacy Policy</n-link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {

    };
</script>