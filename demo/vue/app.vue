
<template>
    <div class="parent">
        <p class="child">{{ greeting }}, A Simple Vue Component</p>
    </div>
</template>

<style lang="mcss" scoped>
    .parent {
        color: #ccc;

        .child {
            font-size: 30px;
        }
    }
</style>

<script>
    module.exports = {
        data: function() {
            return {
                greeting: 'Hello'
            }
        }
    }
</script>