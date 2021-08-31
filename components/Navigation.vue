<template>
    <ul class="main-menu nav justify-content-center">
        <li>
            <n-link to="/">Home</n-link>
        </li>
        <li>
            <n-link to="/about">About</n-link>
        </li>
        <li class="has-submenu">
            <n-link to="/service">Services</n-link>
            <ul class="submenu-nav">
                <li>
                    <n-link to="/service">Service</n-link>
                </li>
                <li>
                    <n-link to="/service-details">Service Details</n-link>
                </li>
            </ul>
        </li>
        <li>
            <n-link to="/contact">Contact</n-link>
        </li>
    </ul>
</template>