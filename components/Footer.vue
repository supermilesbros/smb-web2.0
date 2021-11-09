<template>
    <footer class="footer-area bg-img-cover" :style="{ backgroundImage: `url('/images/photos/bg-footer.jpg')` }">
        <div class="footer-top" data-aos="fade-up" data-aos-duration="1000">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="contact-info-content">
                            <div class="contact-info-item">
                                <div class="icon">
                                    <img class="icon-img" src="/images/icons/c1.png" alt="Icon">
                                </div>
                                <div class="content">
                                    <h4>Call Us.</h4>
                                    <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">
                                    <a href="tel://18123504001">812.350.4001</a>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="icon">
                                    <img class="icon-img" src="/images/icons/c2.png" alt="Icon">
                                </div>
                                <div class="content">
                                    <h4>Email.</h4>
                                    <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">
                                    <a href="mailto://john@supermilesbros.com">john@supermilesbros.com</a>
                                </div>
                            </div>
                            <div class="contact-info-item">
                                <div class="icon">
                                    <img class="icon-img" src="/images/icons/c3.png" alt="Icon">
                                </div>
                                <div class="content">
                                    <h4>Location.</h4>
                                    <img class="line-icon" src="/images/shape/line-s1.png" alt="Icon">
                                    <p>Indianapolis <br>Indiana</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
                                        <li><n-link to="/service">Web Development</n-link></li>
                                        <li><n-link to="/service">SEO</n-link></li>
                                        <li><n-link to="/service">Brand Identity</n-link></li>
                                    </ul>
                                </div>
                                <div class="col-md-6">
                                    <ul class="nav-menu nav">
                                        <li><n-link to="/service">Content Creation</n-link></li>
                                        <li><n-link to="/service">Content Distribution</n-link></li>
                                        <li><n-link to="/service">Marketing</n-link></li>
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