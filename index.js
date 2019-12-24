var app = new Vue({
  el: "#app",
  data: {
    message: "byebye Vue!",
    tasks: [
      {text: "Trash", completed: false},
      {text: "Bed", completed: false},
      {text: "Read", completed: false}
    ],
    newTask: ""
  },
  methods: {
    addTask: function() {
      console.log('add task');
      // add newTask into the array (tasks)

      this.tasks.push({ text: this.newTask, completed: false});
      console.log("this.newTask")
      console.log(this.newTask)
      console.log("this.tasks")
      console.log(this.tasks)
    },
    deleteTask: function(theTask) {
      console.log('deleteTask')
      console.log(theTask)
      var index = this.tasks.indexOf(theTask);
      console.log(index);
      this.tasks.splice(index, 1);
    }
  }
});
