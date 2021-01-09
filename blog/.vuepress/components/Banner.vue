<template>
<div>
    <img :src="$withBase('/images/banners/BannerTemplate' + type + '.jpg')" :alt="alt">
</div>
</template>
<script>
export default {
    props: [
        'url',
        'alt'
    ],
    computed: {
        type() {
            return this.$page.frontmatter.type;
        }
    }
}
</script>
