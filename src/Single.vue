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
    this.test1();
  },
  methods: {
    test1() {
      console.log('hahahah')
      const a = 1;
      const b = {
        a: "哈哈哈哈"
      }
      console.log('我到底有没有被删除');
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

