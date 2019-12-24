var app = new Vue({
  el: "#app",
  data: {
    message: "byebye Vue!",
    tasks: [
      {text: "Trash", completed: false},
      {text: "Bed", completed: true},
      {text: "Read", completed: false}
    ],
    newTask: "",
    taskFilter: 'incomplete'
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
  },
  computed: {
    incompleteTasks: function() {
      // find all the tasks that aren't done yet
      var sum = 0;
      this.tasks.forEach(function(task) {
        if (task.completed === false) {
          sum++;
        }
      })
      return sum;
    },
    shownTasks: function() {
      // show all the tasks
      if (this.taskFilter === 'all') {
        return this.tasks;
      } else if (this.taskFilter === 'complete') {
        var newArray = [];
        this.tasks.forEach(function(task) {
          if (task.completed === true) {
            newArray.push(task);
          }
        })
        return newArray;
      } else if (this.taskFilter === 'incomplete') {
              // show all completed
        var newArray = [];
        this.tasks.forEach(function(task) {
          if (task.completed === false) {
            newArray.push(task);
          }
        })
        return newArray;
      }
    }
  }
});
