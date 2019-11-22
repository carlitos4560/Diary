<template>
  <div class="newTask">

    <b-modal hide-footer id="modal-1" title="New task">
      <p class="my-4">New task</p>
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Title"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.title"
            required
            placeholder="Enter title"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Task" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.task"
            required
            placeholder="Enter task"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" >
          <b-form-checkbox 
            id="checkbox-1"
            v-model="status"
            name="checkbox-1"
            :value=true
            :unchecked-value=false
          >
            Advance
          </b-form-checkbox>
          <b-collapse v-model=status id="collapse-1" class="mt-2">
            <b-form-group id="input-group-3" label="project" >
                <b-form-select
                  id="input-3"
                  v-model="form.project"
                  :options="projects"
                  required
                ></b-form-select>
                <b-form-input
                id="input-3"
                v-model="form.code"
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
  name: 'newTask',
  data () {
    return {
      form: {
        title: '',
        task: '',
        advance: false,
        project: '',
        code: ''
      },
      status: false,
      projects: ['Diary.com', 'DY.mobile.com', 'personal', 'other']
    }
  },
  methods: {
    ok () {
      console.log(32)
    },
    onSubmit (evt) {
      evt.preventDefault()
      let task = {
        title: this.form.title,
        task: this.form.task,
        advance: this.status,
        project: this.form.project,
        code: this.form.code,
        finish: false,
        date: '',
        time: ''
      }
      firebase.database().ref(`/${store.state.userUid}/task`).push(task)
      this.onReset(evt)
    },
    onReset (evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.title = ''
      this.form.task = ''
      this.form.advance = null
      this.form.project = ''
      this.form.code = ''
      this.status = false
      this.$bvModal.hide('modal-1')
    }
  }

}
</script>