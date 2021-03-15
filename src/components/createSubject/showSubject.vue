<template>
  <div>
    <a-form>
      <a-form-item v-for="(item, index) in subjectList" :key="index" :label="index + 1">
       <span v-html="item.content.body"></span>
        <div v-if="item && item.problem_type === 1">
          <a-radio-group>
            <a-radio  v-for="(option,select_index) in item.content.options" :key="select_index" :value="option[key]">
               {{option}}
              <!-- option {{option}}
                {{option[key]}}. {{option[value]}} -->
            </a-radio>
          </a-radio-group>
        </div>
        <div v-if="item && item.problem_type === 2">
          <a-checkout-group>
            <a-checkout></a-checkout>
          </a-checkout-group>
        </div>
        <div v-if="item && item.problem_type === 3">
        </div>
        <div v-if="item && item.problem_type === 4">
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import {getSubject} from './handleSubject'
export default {
  setup() {
    const subjectList = getSubject()
    // let answerList = [...Array[subjectList.length]]
    console.log('要展示的值', subjectList)
    return {
      subjectList
    }
  }
}
</script>