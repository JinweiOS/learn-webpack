<template>
  <div>
    <div>ssss姓名 single file component</div>
    <img src="./assets/qq.jpg" />
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
    this.tes();
  },
  methods: {
    test1() {
      console.lo(!!this.single.name?.first);
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

