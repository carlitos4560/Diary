<template>
  <div class="updateTask">
    <b-modal hide-footer id="modal-2" title="Update task">
      <p class="my-4">Update task</p>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Title"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="item.title"
            required
            placeholder="Enter title"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Task" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="item.task"
            required
            placeholder="Enter task"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" >
          <b-form-checkbox 
            id="checkbox-1"
            v-model="item.status"
            name="checkbox-1"
            :value=true
            :unchecked-value=false
          >
            Advance
          </b-form-checkbox>
          <b-collapse v-model=item.status id="collapse-1" class="mt-2">
            <b-form-group id="input-group-3" label="project" >
                <b-form-select
                  id="input-3"
                  v-model="item.project"
                  :options="projects"
                ></b-form-select>
                <b-form-input
                id="input-3"
                v-model="item.code"
                placeholder="Enter code"
                ></b-form-input>
            </b-form-group>
          </b-collapse>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Cancel</b-button>   
      </b-form>
    </b-modal>
  </div>
</template>

<script>
import firebase from 'firebase'
import store from '@/store'

export default {
  name: 'updateTask',
  data () {
    return {
      projects: ['Diary.com', 'DY.mobile.com', 'personal', 'other']
    }
  },
  methods: {
    onSubmit (evt) {
      evt.preventDefault()
      let task = {
        title: this.item.title,
        task: this.item.task,
        advance: this.item.status,
        project: this.item.project,
        code: this.item.code,
        finish: false,
        date: '',
        time: ''
      }
      firebase.database().ref(`/${store.state.userUid}/task/${this.key}/`).update(task)
      this.onReset(evt)
    },
    onReset (evt) {
      evt.preventDefault()
      this.$bvModal.hide('modal-2')
    }
  },
  computed: {
    item: function () {
      return store.state.itemSelected[1]
    },
    key: function () {
      return store.state.itemSelected[0]
    }
  }

}
</script>