<template>
  <div>
    <div>vue single file component</div>
    <img :src="require('./assets/qq.jpg')" />
    <div class="title">
      <div class="title-child">{{ test }}</div>
    </div>
  </div>
</template>
<script>
@testable
class MyTestableClass {
  // ...
}

function testable(target) {
  target.isTestable = true;
}

const t = new MyTestableClass();

export default {
  name: "Single",
  data: function () {
    return {
      test: "data",
      single: {},
    };
  },
  mounted() {
    this.test1();
  },
  methods: {
    test1() {
      console.log(!!this.single.name?.first);
    },
  },
};
</script>
<style scoped lang="scss">
.title   {
  .title-child {
    color: green;
  }
}
</style>

