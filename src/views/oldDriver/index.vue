<template>
  <div>66666</div>
</template>

<script>
export default {
    name: "Header",
    data() {
        return {
            placeholder: "请输入"
        };
    }
};
</script>

<style lang="scss">
.top-header {
    display: flex;
    height: 0.86rem;
    line-height: 0.86rem;
    .icon {
        display: block;
        text-align: center;
    }
    .header-back {
        //float: left;
        width: 0.86rem;
        .icon {
            &:before {
                content: "\e622";
            }
        }
    }
}
</style>