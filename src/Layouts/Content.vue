<template>
  <div>
    <a-tabs @change="callback">
      <a-tab-pane key="1" tab="Tab 1">
        Content of Tab Pane 1
      </a-tab-pane>
      <a-tab-pane key="2" tab="Tab 2" force-render>
        Content of Tab Pane 2
      </a-tab-pane>
      <a-tab-pane key="3" tab="Tab 3">
        Content of Tab Pane 3
      </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
export default {
  name: 'Content',
  data() {
    return {
      arr: [this.src],
      src: 1
    }
  },
  methods: {
    callback(key) {
      console.log(key);
      console.log('count', this.$store.state.count, this)
    }
  },
}
</script>