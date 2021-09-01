<template>
    <div class="accordion">
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-1 class="accordion-button">
                    <span class="icon-box">
                        <i class="icon icofont-plus"></i>
                        <i class="icon icofont-minus"></i>
                    </span>
                    Who are you?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-1" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text class="text-dark">
                        We are John and Jared and yes we ARE brothers. In 2016 we were part of a start-up here in Indianapolis "The Recovery Room". There were many hats to wear and none of us knew how to put them on, but we slowly developed our unique skillsets. John focused on the ins and outs of brand building, social media and marketing. Jared grew his skills as a developer, creating websites and then apps to solve any business need. Now we use what we learned from real experience to help other businesses find success.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-2 class="accordion-button">
                    <span class="icon-box">
                        <i class="icon icofont-plus"></i>
                        <i class="icon icofont-minus"></i>
                    </span>
                    How long will my website take?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-2" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text class="text-dark">
                        Websites depending on their complexity can take anywhere from a week to going live all the way to a few months. We offer a ready to go option that you can choose from any number of templates and have a website in no time. Or if you want the full development experience we will design then code the site to your exact specifications.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
        <b-card no-body>
            <b-card-header header-tag="header">
                <b-button block v-b-toggle.accordion-3 class="accordion-button">
                    <span class="icon-box">
                        <i class="icon icofont-plus"></i>
                        <i class="icon icofont-minus"></i>
                    </span>
                    What kind of content can you create?
                </b-button>
            </b-card-header>
            <b-collapse id="accordion-3" visible accordion="my-accordion">
                <b-card-body>
                    <b-card-text class="text-dark">
                        We can create videos for content and marketing, graphics for social media, as well as signage, posters, flyers, logos, and business cards. Are you interested in starting a podcast or live stream. We have the tools and experience to meet any challenge.
                    </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>
    </div>
</template>