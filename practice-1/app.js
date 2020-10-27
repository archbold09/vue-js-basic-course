new Vue({
  el: "#app",

  data() {
    return {
      courses: [],
      courseTitle: "",
      couseHours: "",
      totalTime: 0,
      message: false,
    };
  },

  computed: {
    countHours() {
      let courses = this.courses;
      let countHours = 0;
      courses.forEach((course) => {
        countHours += parseInt(course.hour);
      });
      this.totalTime = countHours;
      return this.totalTime;
    },
    handleMessage() {
      let message = this.message;
      if (message) {
        return "Se han agregado cursos";
      }
      return "Aun no has realizado cursos";
    },
  },
  methods: {
    addCourse() {
      let courseTitle = this.$refs.courseTitle.value;
      let courseHours = this.$refs.couseHours.value;
      let allCourses = this.courses;
      allCourses.push({ title: courseTitle, hour: courseHours });
      this.message = true
    },
  },
});
