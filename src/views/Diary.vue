<template>
  <div class="diary">
    <b-alert show>Pending task <b-button v-b-modal.modal-1>New Task</b-button></b-alert>
    <template v-for="(item) in this.items">
      <div>
        <b-card>
          <b-card-text>
            {{item[1].title}}
            <b-button v-b-modal.modal-2 v-on:click=selectItem(item)>update Task</b-button>
          </b-card-text>
        </b-card>
      </div>
    </template>
    <NewTaskModal />
    <UpdateTaskModal />
  </div>
</template>

<script>
import firebase from 'firebase'
import store from '@/store'
import NewTaskModal from '../components/NewTaskModal'
import UpdateTaskModal from '../components/UpdateTaskModal'
export default {
  name: 'diary',
  components: {
    NewTaskModal,
    UpdateTaskModal
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA'
    }
  },
  methods: {
    newTask () {
      let task = {
        title: 'desing logo for web page',
        task: [
          'select colors',
          'select resolution',
          'select preliminar'
        ],
        advance: true,
        project: 'diary.com',
        code: 'DR15:Logo'
      }
      firebase.database().ref(`/${store.state.userUid}/task`).push(task)
    },
    newTaskmodal () {
      store.state.newTaskStatus = true
    },
    selectItem (item) {
      store.state.itemSelected = item
    }
  },
  computed: {
    items: function () {
      firebase.database().ref(`/${store.state.userUid}/task`).on('value', function (snapshot) {
        let val = snapshot.val()
        // let key = Object.keys(snapshot.val())
        let items = []
        for (let element in val) {
          items.push([element, val[element]])
        }
        store.state.task = items
      })
      return store.state.task
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
