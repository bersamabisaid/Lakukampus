<template>
    <div id="q-app">
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'App',
};
</script>

<style lang="scss">
#q-app::after {
    content: 'COMING SOON';
    position: fixed;
    top: 50%;
    left: 50%;
    text-align: center;
    font-size: map-get($h1, size);
    text-shadow: 0 0 2rem #fffc;
    transform: translate(-50%, -50%);
}
</style>
